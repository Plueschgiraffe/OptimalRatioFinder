import { CARD, DATA } from './cards.js';
import { COMBO, CODE } from './combos.js';

/**
 * @param {Array<CARD>} cardpool list of cards to consider for a deck
 * @param {Array<Integer>} initialRatios
 *      number of each card from cardpool in initial deck
 *      should be same length as cardpool and in the same order
 */
const cardpool = [
  CARD.SHIF,
  CARD.PACES,
  CARD.ANGLER,
  CARD.PSIICS,
  CARD.RFUSION,
  CARD.IFUSION,
  CARD.ASH,
  CARD.IMPERM,
  CARD.VEILER,
  CARD.NIBIRU,
];
const initialRatios = [3, 3, 3, 2, 3, 1, 1, 3, 3, 0];

/**
 * @param {Object} minRatios custom minimum for certain ratios
 * @param {Object} maxRatios custom maximum for certain ratios
 */
const minRatios = {
  default: 0,
  [CARD.PSIICS]: 1,
};
const maxRatios = {
  default: 3,
  [CARD.IFUSION]: 1,
};

/**
 * @param {Intger} minDeckSize minimum number of cards in a deck
 * @param {Intger} maxDeckSize maximum number of cards in a deck
 */
const minDeckSize = 20;
const maxDeckSize = 30;

/**
 * @param {Integer} handSize number of cards in a hand
 * @param {Integer} handsToDraw number of hands to check
 */
const handSize = 5;
const handsToDraw = 100; // <= 50000, good start: 1000

/**
 * @param {Integer} numOfSearches number of searches, each one gives new ratios
 * @param {Integer} searchDepth number of cards that can be changed per search
 */
const numOfSearches = 10;
const searchDepth = 3; // <= deckpool.length, good start: 3

// pre generate all possible search steps
const searchSteps = generateSteps(cardpool.length, searchDepth);

/**
 * @param {Array<COMBO>} combosToOptimize list of combos to optimize
 * @param {Object} comboWeights weights of the combos, should add to 100
 */
const combosToOptimize = [COMBO.HANDTRAP];
const comboWeights = { [COMBO.HANDTRAP]: 100 };

/**
 * Adds given array and array the function
 * is called on as if they were vectors.
 * @param {Array<Number>} this vector A
 * @param {Array<Number>} other vector B
 * @returns {Array<Number>} vector A + B
 */
Array.prototype.add = function (other) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(this[i] + other[i]);
  }

  return result;
};

/**
 * Sums up the elements of array the function is called on.
 * @param {Array<Number>} this array A = [A1,...,AN]
 * @returns {Number} sum of elements A1 + ... + AN
 */
Array.prototype.sum = function () {
  let result = 0;

  for (let i = 0; i < this.length; i++) {
    result += this[i];
  }

  return result;
};

/**
 * Creates a deck from set cardpool based on given ratios.
 * @param {Array<Integer>} ratios the number of each card
 * @returns {Array<CARD>} deck with given number of each cards
 */
function deckFromRatios(ratios) {
  const deck = [];

  // go through each ratio and add that many of that card to deck
  for (let i = 0; i < ratios.length; i++) {
    for (let j = 0; j < ratios[i]; j++) {
      deck.push(cardpool[i]);
    }
  }

  return deck;
}

/**
 * Draws a random hand of cards with set size from given
 * deck. Checks if given condition is met by hand and deck
 * (after draw). Repeats this for set number of times.
 * @param {Array<CARD>} deck cards to draw from
 * @param {Function(Array<CARD>x3)} condition to optimize
 * @returns {Integer} number of times condition was met
 */
function evaluate(deck, condition) {
  let numConditionMet = 0;

  for (let i = 0; i < handsToDraw; i++) {
    const { hand, deckAfterDraw } = draw(deck);

    // true is interpreted as 1 when used in calculations
    numConditionMet += condition(hand, deckAfterDraw);
  }

  return numConditionMet;
}

/**
 * Draws set number of cards from a given deck.
 * @param {Array<CARD>} deck cards to draw from
 * @returns {Array<CARD>, Array<CARD>} hand, deck
 *      hand contains set number of random cards from given deck
 *      deckAfterDraw contains all the cards that were not drawn
 */
function draw(deck) {
  const deckAfterDraw = [...deck];
  const hand = [];

  for (let i = 0; i < handSize; i++) {
    // find random index from 0 to n-1 where n is
    // the number of cards in the remaining deck
    const randomIndex = Math.floor(Math.random() * deckAfterDraw.length);

    // copy the card at the choosen index into hand
    // and also remove it from the remaining deck
    hand[i] = deckAfterDraw.splice(randomIndex, 1)[0];
  }

  return { hand, deckAfterDraw };
}

/**
 * The target function for the optimization problem.
 * Saves found values in targetValues array below.
 * @param {Array<Integer>} ratios to use for calculation
 * @param {Function} combo to use condition from
 * @returns {Number}
 *      result of evaluate(deck, condition)
 *      where deck = deckFromRatios(ratios)
 */
function target(ratios, combo) {
  const key = [ratios, combo];
  if (targetValues[key] != undefined) return targetValues[key];

  const deck = deckFromRatios(ratios);
  const condition = CODE[combo].condition;
  const result = evaluate(deck, condition);

  targetValues[key] = result;
  return result;
}
const targetValues = [];

/**
 * Weighted sum of eachs combo from set combos to
 * optimize for target function and its set weight.
 * @param {Array<Integer>} ratios to use for calculation
 * @returns sum over weight(combo) * target(combo)
 *      where combo is from combosToOptimize
 */
function targetSum(ratios) {
  let weightedSum = 0;

  for (const combo of combosToOptimize) {
    weightedSum += comboWeights[combo] * target(ratios, combo);
  }

  return weightedSum;
}

/**
 * Computes a score between 0 and 10k of a deck with given ratios. The higher
 * this number the more combos will be met with a higher chance. This number
 * however is for output purposes only, since it uses division and Math.round()
 * to produce a user friendly number. In code use targetSum() for calculations.
 * @param {Array<Integer>} ratios to use for calculation
 * @returns {Integer} normalised score, higher values mean higher optimisation
 */
function deckScore(ratios) {
  let score = 100 * targetSum(ratios);
  score /= handsToDraw;
  score /= combosToOptimize.length;

  return Math.round(score);
}

/**
 * Finds the best possible step from given ratio position to take
 * in order to achive maximum increase in sum of traget functions.
 * @param {Array<Integer>} ratios the current position
 * @returns {Array<Integer>} best possible ratios after one step
 */
function improveRatios(ratios) {
  let targetToBeat = targetSum(ratios);
  let bestRatios = ratios;

  for (const step of searchSteps) {
    let newRatios = ratios.add(step);
    if (!ratiosAreValid(newRatios)) continue;

    // before doing this costly calculation continue if ratios not valid
    if (targetSum(newRatios) > targetToBeat) bestRatios = [...newRatios];
  }

  return bestRatios;
}

/**
 * Generates all possible steps of a given dimension and a given depth.
 * Basically these are all the ways to remove or add a copy of depth many
 * cards. Scales quickly, be carefull when choosing value for depth:
 *              #steps = sum_k^depth (dim C k) * 2^k
 * Where C is choose (binomial coefficent) and dim is dimension.
 * @param {Integer} dimension should be legth of the cardpool
 * @param {Integer} depth max number of cards that can be changed
 * @returns {Array<Array<Integer>>} array of all possible steps
 */
function generateSteps(dimension, depth) {
  let arrays = [];

  function generate(array, remainingLength, remainingOnes) {
    if (remainingLength == 0) {
      // do not include the step with only zeros
      if (array.includes(1) || array.includes(-1)) arrays.push(array);
      return;
    }

    if (remainingOnes > 0) {
      generate(array.concat(1), remainingLength - 1, remainingOnes - 1);
      generate(array.concat(-1), remainingLength - 1, remainingOnes - 1);
    }

    generate(array.concat(0), remainingLength - 1, remainingOnes);
  }

  generate([], dimension, depth);

  return arrays;
}

/**
 * Checks if given ratios are valid as set by min and max
 * decksize as well as custom min and mux card ratios.
 * @param {Array<Integer>} ratios to check
 * @returns {Boolean} true iff decksize and card ratios valid
 */
function ratiosAreValid(ratios) {
  const deckSize = ratios.sum();
  // decksize is not valid
  if (minDeckSize > deckSize || maxDeckSize < deckSize) return false;

  for (let i = 0; i < ratios.length; i++) {
    // min and max ratios for a card if defined else default ratios
    const minCardRatio = minRatios[cardpool[i]] || minRatios.default;
    const maxCardRatio = maxRatios[cardpool[i]] || maxRatios.default;

    // for at least one card ratios are not valid
    if (minCardRatio > ratios[i] || maxCardRatio < ratios[i]) return false;
  }

  // decksize and card ratios are valid
  return true;
}

/* -------------------------- TESTING -------------------------- */
let ratios = improveRatios(initialRatios);
console.log(ratios);

for (let i = 0; i < numOfSearches; i++) {
  ratios = improveRatios(ratios);
  console.log(ratios);
}
