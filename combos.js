import { CARD, DATA } from './cards.js';

export const COMBO = {
  DEEP_BEYOND: 'DEEP_BEYOND',
  HANDTRAP: 'HANDTRAP',
};

export const CODE = {
  [COMBO.FULL_GHOTI_SETUP]: {
    id: COMBO.FULL_GHOTI_SETUP,
    name: 'Full Ghoti Setup (2x Deep Beyond)',

    // set min ratios to 1 for: Shif, Paces, Zep, Snopios, Psiics
    combos: [
      { hand: [CARD.PIRIMAP, CARD.ANGLER], deck: [CARD.PSIICS] },
      { hand: [CARD.PIRIMAP, CARD.RFUSION], deck: [CARD.PSIICS] },
      { hand: [CARD.PIRIMAP, CARD.IFUSION], deck: [CARD.PSIICS] },
      { hand: [CARD.PIRIMAP, CARD.SAKITAMA], deck: [CARD.PSIICS] },
      { hand: [CARD.PIRIMAP, CARD.SHTHANA], deck: [CARD.PSIICS] },
      { hand: [CARD.PIRIMAP, CARD.ABYSS], deck: [CARD.ANGLER, CARD.PSIICS] },

      { hand: [CARD.TUNA, CARD.ANGLER], deck: [CARD.PSIICS] },
      { hand: [CARD.TUNA, CARD.RFUSION], deck: [CARD.PSIICS] },
      { hand: [CARD.TUNA, CARD.IFUSION], deck: [CARD.PSIICS] },
      { hand: [CARD.TUNA, CARD.SAKITAMA], deck: [CARD.PSIICS] },
      { hand: [CARD.TUNA, CARD.SHTHANA], deck: [CARD.PSIICS] },
      { hand: [CARD.TUNA, CARD.ABYSS], deck: [CARD.ANGLER, CARD.PSIICS] },

      { hand: [CARD.SHIF, CARD.ANGLER], deck: [CARD.PSIICS] },
      { hand: [CARD.SHIF, CARD.RFUSION], deck: [CARD.PSIICS] },
      { hand: [CARD.SHIF, CARD.IFUSION], deck: [CARD.PSIICS] },
      { hand: [CARD.SHIF, CARD.SAKITAMA], deck: [CARD.PSIICS] },
      { hand: [CARD.SHIF, CARD.SHTHANA], deck: [CARD.PSIICS] },
      { hand: [CARD.SHIF, CARD.ABYSS], deck: [CARD.ANGLER, CARD.PSIICS] },

      { hand: [CARD.PACES, CARD.ANGLER], deck: [CARD.PSIICS] },
      { hand: [CARD.PACES, CARD.RFUSION], deck: [CARD.PSIICS] },
      { hand: [CARD.PACES, CARD.IFUSION], deck: [CARD.PSIICS] },
      { hand: [CARD.PACES, CARD.SAKITAMA], deck: [CARD.PSIICS] },
      { hand: [CARD.PACES, CARD.SHTHANA], deck: [CARD.PSIICS] },
      { hand: [CARD.PACES, CARD.ABYSS], deck: [CARD.ANGLER, CARD.PSIICS] },

      {
        hand: [CARD.LIFELESS, CARD.ABYSS],
        deck: [CARD.SHIF, CARD.ANGLER, CARD.PSIICS],
      },
      {
        hand: [CARD.LIFELESS, CARD.ABYSS],
        deck: [CARD.PACES, CARD.ANGLER, CARD.PSIICS],
      },

      {
        hand: [CARD.SHTHANA, CARD.ABYSS],
        deck: [CARD.SHIF, CARD.LIFELESS, CARD.PSIICS],
      },
      {
        hand: [CARD.SHTHANA, CARD.ABYSS],
        deck: [CARD.PACES, CARD.LIFELESS, CARD.PSIICS],
      },

      { hand: [CARD.HARPOONER, CARD.KEAF, CARD.PACES], deck: [CARD.PSIICS] },
      { hand: [CARD.HARPOONER, CARD.KEAF, CARD.SHIF], deck: [CARD.PSIICS] },

      {
        hand: [CARD.MERMAID, CARD.SHIF],
        deck: [CARD.ANGLER, CARD.ABYSS, CARD.PSIICS],
      },
      {
        hand: [CARD.MERMAID, CARD.PACES],
        deck: [CARD.ANGLER, CARD.ABYSS, CARD.PSIICS],
      },
      {
        hand: [CARD.MERMAID, CARD.RFUSION],
        deck: [CARD.LIFELESS, CARD.ABYSS, CARD.PSIICS],
      },
      {
        hand: [CARD.MERMAID, CARD.IFUSION],
        deck: [CARD.LIFELESS, CARD.ABYSS, CARD.PSIICS],
      },
    ],

    condition: defaultCondition,
  },

  [COMBO.HANDTRAP]: {
    id: COMBO.HANDTRAP,
    name: 'At Least 2 Usable Handtraps',

    // currently considers: Ash, Imperm, Veiler, Nibiru, Crow, Belle, Droll
    combos: [
      { hand: [CARD.ASH, CARD.IMPERM], deck: [] },
      { hand: [CARD.ASH, CARD.VEILER], deck: [] },
      { hand: [CARD.ASH, CARD.NIBIRU], deck: [] },
      { hand: [CARD.ASH, CARD.CROW], deck: [] },
      { hand: [CARD.ASH, CARD.BELLE], deck: [] },
      { hand: [CARD.ASH, CARD.DROLL], deck: [] },

      { hand: [CARD.IMPERM, CARD.IMPERM], deck: [] },
      { hand: [CARD.IMPERM, CARD.VEILER], deck: [] },
      { hand: [CARD.IMPERM, CARD.NIBIRU], deck: [] },
      { hand: [CARD.IMPERM, CARD.CROW], deck: [] },
      { hand: [CARD.IMPERM, CARD.BELLE], deck: [] },
      { hand: [CARD.IMPERM, CARD.DROLL], deck: [] },

      { hand: [CARD.VEILER, CARD.VEILER], deck: [] },
      { hand: [CARD.VEILER, CARD.NIBIRU], deck: [] },
      { hand: [CARD.VEILER, CARD.CROW], deck: [] },
      { hand: [CARD.VEILER, CARD.BELLE], deck: [] },
      { hand: [CARD.VEILER, CARD.DROLL], deck: [] },

      { hand: [CARD.NIBIRU, CARD.CROW], deck: [] },
      { hand: [CARD.NIBIRU, CARD.BELLE], deck: [] },
      { hand: [CARD.NIBIRU, CARD.DROLL], deck: [] },

      { hand: [CARD.CROW, CARD.CROW], deck: [] },
      { hand: [CARD.CROW, CARD.BELLE], deck: [] },
      { hand: [CARD.CROW, CARD.DROLL], deck: [] },

      { hand: [CARD.BELLE, CARD.DROLL], deck: [] },
    ],

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
  for (const combo of this.combos) {
    const handOK = hand.contains(combo.hand);
    const deckOK = deck.contains(combo.deck);

    if (handOK && deckOK) return true;
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
