import { CARD, DATA } from './cards.js';

export const COMBO = {
  DOUBLE_DEEP: 'DOUBLE_DEEP',
  HANDTRAP: 'HANDTRAP',
};

export const CODE = {
  [COMBO.DOUBLE_DEEP]: {
    id: COMBO.DOUBLE_DEEP,
    name: 'Double Deep Beyond',

    // TODO: fill this in according to spreadsheet
    // https://docs.google.com/spreadsheets/d/1D-b62pewYGp2SbrpFllLPX7kV_Pg5v6nY2WtL8KPnTw/edit#gid=0
    combos: [],

    condition: defaultCondition,
  },

  [COMBO.HANDTRAP]: {
    id: COMBO.HANDTRAP,
    name: 'At Least 2 Usable Handtraps',

    // TODO: make spreadsheet and fill this in
    combos: [],

    condition: defaultCondition,
  },
};

// Binds each condition function to its combo object to maintain context.
// This ensures no unexpected behaviour from the 'this' keyword.
for (const combo in CODE) {
  CODE[combo].condition = CODE[combo].condition.bind(CODE[combo]);
}

/**
 * The default condition checks whether the given hand and deck
 * satisfy at least one of the definied combos in the calling code.
 * @param {Array<CARD>} hand cards drawn from full deck
 * @param {Array<CARD>} deck cards remaining in deck after draw
 * @returns {Boolean} true iff any combo is found
 */
function defaultCondition(hand, deck) {
  const anywhere = [...hand, ...deck];

  for (const combo of this.combos) {
    const handOK = hand.contains(combo.hand);
    const deckOK = deck.contains(combo.deck);
    const anyOK = anywhere.contains(combo.every);

    if (handOK && deckOK && anyOK) return true;
  }

  return false;
}

/**
 * Checks if given other array is contained by
 * the array on which the function is called.
 * @param {Array} this 'bigger' array A
 * @param {Array} other 'smaller' array B
 * @returns {Boolean} true iff B subset A
 *
 * This function considers the number of occurences
 * of elements in B. This means
 *      [1,2].contains([2,1]) returns true
 *      [1,2].contains([1,2,1]) returns false
 * even though the mathematical subset would return
 * true in both cases, since [1,2,1] = {1,2} (Set).
 */
Array.prototype.contains = function (other) {
  const copy = [...this];

  for (const element of other) {
    if (!copy.includes(element)) return false;
    copy.splice(copy.indexOf(element), 1);
  }

  return true;
};
