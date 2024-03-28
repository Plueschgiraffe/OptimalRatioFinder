import { CARD, DATA } from './cards.js';

export const COMBO = {
  DOUBLE_DEEP: 'DOUBLE_DEEP',
  HANDTRAP: 'HANDTRAP',
};

export const CODE = {
  [COMBO.DOUBLE_DEEP]: {
    id: COMBO.DOUBLE_DEEP,
    name: 'Double Deep Beyond',

    // https://docs.google.com/spreadsheets/d/1D-b62pewYGp2SbrpFllLPX7kV_Pg5v6nY2WtL8KPnTw/edit#gid=0
    combos: [
      // SHIF COMBOS
      {
        hand: [CARD.SHIF, CARD.MERMAID],
        anywhere: [CARD.ABYSS, CARD.ANGLER, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.SHIF, CARD.ABYSS],
        anywhere: [CARD.ANGLER, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.SHIF, CARD.ANGLER],
        anywhere: [CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.SHIF, CARD.SHTHANA],
        anywhere: [CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.SHIF, CARD.SAKITAMA],
        anywhere: [CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.SHIF, CARD.RFUSION],
        anywhere: [CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },

      // PACES COMBOS
      {
        hand: [CARD.PACES, CARD.MERMAID],
        anywhere: [CARD.ABYSS, CARD.ANGLER, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.PACES, CARD.ABYSS],
        anywhere: [CARD.ANGLER, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.PACES, CARD.ANGLER],
        anywhere: [CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.PACES, CARD.SHTHANA],
        anywhere: [CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.PACES, CARD.SAKITAMA],
        anywhere: [CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.PACES, CARD.RFUSION],
        anywhere: [CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },

      // PSIICS COMBOS
      {
        hand: [CARD.PSIICS, CARD.MERMAID],
        anywhere: [
          CARD.ABYSS,
          CARD.SUNFISH,
          CARD.SARDINE,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.SARDINE, CARD.SHIF],
      },
      {
        hand: [CARD.PSIICS, CARD.MERMAID],
        anywhere: [
          CARD.ABYSS,
          CARD.SUNFISH,
          CARD.SARDINE,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.SARDINE, CARD.PACES],
      },

      // DEPTHS COMBOS
      {
        hand: [CARD.DEPTHS, CARD.MERMAID],
        anywhere: [CARD.ABYSS, CARD.ANGLER, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.DEPTHS, CARD.MERMAID],
        anywhere: [CARD.ABYSS, CARD.ANGLER, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.DEPTHS, CARD.MERMAID],
        anywhere: [CARD.ABYSS, CARD.IXEEP, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.DEPTHS, CARD.MERMAID],
        anywhere: [CARD.ABYSS, CARD.IXEEP, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },

      // SARDINE COMBOS
      {
        hand: [CARD.SARDINE, CARD.MERMAID],
        anywhere: [CARD.ABYSS, CARD.SUNFISH, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SARDINE],
      },
      {
        hand: [CARD.SARDINE, CARD.MERMAID],
        anywhere: [
          CARD.ABYSS,
          CARD.SUNFISH,
          CARD.PACES,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.SARDINE],
      },
      {
        hand: [CARD.SARDINE, CARD.ABYSS],
        anywhere: [CARD.LIFELESS, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SARDINE, CARD.SHIF],
      },
      {
        hand: [CARD.SARDINE, CARD.ABYSS],
        anywhere: [CARD.LIFELESS, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SARDINE, CARD.PACES],
      },
      {
        hand: [CARD.SARDINE, CARD.SUNFISH],
        anywhere: [CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SARDINE],
      },
      {
        hand: [CARD.SARDINE, CARD.SUNFISH],
        anywhere: [CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SARDINE],
      },
      {
        hand: [CARD.SARDINE, CARD.REINCARNATION],
        anywhere: [CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SARDINE],
      },
      {
        hand: [CARD.SARDINE, CARD.REINCARNATION],
        anywhere: [CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SARDINE],
      },

      // SUNFISH COMBOS
      {
        hand: [CARD.SUNFISH, CARD.REINCARNATION],
        anywhere: [CARD.SARDINE, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SARDINE],
      },
      {
        hand: [CARD.SUNFISH, CARD.REINCARNATION],
        anywhere: [CARD.SARDINE, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SARDINE],
      },

      // REINCARNATION COMBOS
      {
        hand: [CARD.REINCARNATION, CARD.MERMAID],
        anywhere: [
          CARD.SARDINE,
          CARD.ABYSS,
          CARD.SUNFISH,
          CARD.SHIF,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.SARDINE],
      },
      {
        hand: [CARD.REINCARNATION, CARD.MERMAID],
        anywhere: [
          CARD.SARDINE,
          CARD.ABYSS,
          CARD.SUNFISH,
          CARD.PACES,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.SARDINE],
      },
      {
        hand: [CARD.REINCARNATION, CARD.ABYSS],
        anywhere: [
          CARD.SARDINE,
          CARD.LIFELESS,
          CARD.SHIF,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.SARDINE, CARD.PACES],
      },
      {
        hand: [CARD.REINCARNATION, CARD.ABYSS],
        anywhere: [
          CARD.SARDINE,
          CARD.LIFELESS,
          CARD.PACES,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.SARDINE, CARD.SHIF],
      },

      // MIRROR COMBOS
      {
        hand: [CARD.MIRROR, CARD.PIRIMAP],
        anywhere: [
          CARD.TUNA,
          CARD.LIFELESS,
          CARD.PACES,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.MIRROR, CARD.PIRIMAP],
        anywhere: [CARD.TUNA, CARD.LIFELESS, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.PACES],
      },
      {
        hand: [CARD.MIRROR, CARD.TUNA],
        anywhere: [CARD.LIFELESS, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.PACES],
      },
      {
        hand: [CARD.MIRROR, CARD.TUNA],
        anywhere: [CARD.LIFELESS, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.MIRROR, CARD.MERMAID],
        anywhere: [
          CARD.ABYSS,
          CARD.LIFELESS,
          CARD.PACES,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.MIRROR, CARD.MERMAID],
        anywhere: [
          CARD.ABYSS,
          CARD.LIFELESS,
          CARD.SHIF,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.PACES],
      },
      {
        hand: [CARD.MIRROR, CARD.LIFELESS],
        anywhere: [CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.MIRROR, CARD.LIFELESS],
        anywhere: [CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.PACES],
      },

      // ANGLER COMBOS
      {
        hand: [CARD.ANGLER, CARD.PIRIMAP],
        anywhere: [CARD.SHIF, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.ANGLER, CARD.TUNA],
        anywhere: [CARD.SHIF, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },

      // LIFELESS COMBOS
      {
        hand: [CARD.LIFELESS, CARD.MERMAID],
        anywhere: [
          CARD.ABYSS,
          CARD.HARPOONER,
          CARD.PACES,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.LIFELESS, CARD.MERMAID],
        anywhere: [
          CARD.ABYSS,
          CARD.HARPOONER,
          CARD.SHIF,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.PACES],
      },
      {
        hand: [CARD.LIFELESS, CARD.ABYSS],
        anywhere: [CARD.ANGLER, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.PACES],
      },
      {
        hand: [CARD.LIFELESS, CARD.ABYSS],
        anywhere: [CARD.ANGLER, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.LIFELESS, CARD.RFUSION],
        anywhere: [CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.LIFELESS, CARD.RFUSION],
        anywhere: [CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.PACES],
      },

      // MERMAID COMBOS
      {
        hand: [CARD.MERMAID, CARD.TUNA],
        anywhere: [CARD.ABYSS, CARD.ANGLER, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.MERMAID, CARD.TUNA],
        anywhere: [CARD.ABYSS, CARD.ANGLER, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.PACES],
      },
      {
        hand: [CARD.MERMAID, CARD.ABYSS],
        anywhere: [
          CARD.LIFELESS,
          CARD.HARPOONER,
          CARD.PACES,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.MERMAID, CARD.ABYSS],
        anywhere: [
          CARD.LIFELESS,
          CARD.HARPOONER,
          CARD.SHIF,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.PACES],
      },
      {
        hand: [CARD.MERMAID, CARD.HARPOONER],
        anywhere: [
          CARD.ABYSS,
          CARD.LIFELESS,
          CARD.PACES,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.MERMAID, CARD.HARPOONER],
        anywhere: [
          CARD.ABYSS,
          CARD.LIFELESS,
          CARD.SHIF,
          CARD.ZEP,
          CARD.SNOPIOS,
        ],
        deck: [CARD.PSIICS, CARD.PACES],
      },

      // ABYSS COMBOS
      {
        hand: [CARD.ABYSS, CARD.PIRIMAP],
        anywhere: [CARD.ANGLER, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.PACES],
      },
      {
        hand: [CARD.ABYSS, CARD.PIRIMAP],
        anywhere: [CARD.ANGLER, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.ABYSS, CARD.TUNA],
        anywhere: [CARD.ANGLER, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.PACES],
      },
      {
        hand: [CARD.ABYSS, CARD.TUNA],
        anywhere: [CARD.ANGLER, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.ABYSS, CARD.SHTHANA],
        anywhere: [CARD.LIFELESS, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.ABYSS, CARD.SHTHANA],
        anywhere: [CARD.LIFELESS, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.PACES],
      },
      {
        hand: [CARD.ABYSS, CARD.RFUSION],
        anywhere: [CARD.LIFELESS, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
      {
        hand: [CARD.ABYSS, CARD.RFUSION],
        anywhere: [CARD.LIFELESS, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.PACES],
      },

      // TUNA COMBOS
      {
        hand: [CARD.TUNA, CARD.SHTHANA],
        anywhere: [CARD.PACES, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.TUNA, CARD.SAKITAMA],
        anywhere: [CARD.PACES, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.TUNA, CARD.IXEEP],
        anywhere: [CARD.PACES, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },
      {
        hand: [CARD.TUNA, CARD.RFUSION],
        anywhere: [CARD.PACES, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },

      // RFUSION COMBOS
      {
        hand: [CARD.RFUSION, CARD.PIRIMAP],
        anywhere: [CARD.PACES, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },

      // SHTHANA COMBOS
      {
        hand: [CARD.SHTHANA, CARD.PIRIMAP],
        anywhere: [CARD.PACES, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },

      // SAKITAMA COMBOS
      {
        hand: [CARD.SAKITAMA, CARD.PIRIMAP],
        anywhere: [CARD.PACES, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS],
      },

      // PIRIMAP COMBOS
      {
        hand: [CARD.PIRIMAP, CARD.IXEEP],
        anywhere: [CARD.TUNA, CARD.SHIF, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.PACES],
      },
      {
        hand: [CARD.PIRIMAP, CARD.IXEEP],
        anywhere: [CARD.TUNA, CARD.PACES, CARD.ZEP, CARD.SNOPIOS],
        deck: [CARD.PSIICS, CARD.SHIF],
      },
    ],

    condition: defaultCondition,
  },

  [COMBO.HANDTRAP]: {
    id: COMBO.HANDTRAP,
    name: 'At Least 2 Usable Handtraps',

    // TODO: https://docs.google.com/spreadsheets/d/1OKwlY5WK-ZLEjdineYogCg98SM9Zv6z4dGRFILOpbZU/edit#gid=0
    combos: [
      // IMPERM COMBOS
      { hand: [CARD.IMPERM, CARD.IMPERM], anywhere: [], deck: [] },
      { hand: [CARD.IMPERM, CARD.VEILER], anywhere: [], deck: [] },
      { hand: [CARD.IMPERM, CARD.CROW], anywhere: [], deck: [] },
      { hand: [CARD.IMPERM, CARD.ASH], anywhere: [], deck: [] },
      { hand: [CARD.IMPERM, CARD.NIBIRU], anywhere: [], deck: [] },
      { hand: [CARD.IMPERM, CARD.BELLE], anywhere: [], deck: [] },
      { hand: [CARD.IMPERM, CARD.DROLL], anywhere: [], deck: [] },

      // VEILER COMBOS
      { hand: [CARD.VEILER, CARD.VEILER], anywhere: [], deck: [] },
      { hand: [CARD.VEILER, CARD.CROW], anywhere: [], deck: [] },
      { hand: [CARD.VEILER, CARD.ASH], anywhere: [], deck: [] },
      { hand: [CARD.VEILER, CARD.NIBIRU], anywhere: [], deck: [] },
      { hand: [CARD.VEILER, CARD.BELLE], anywhere: [], deck: [] },
      { hand: [CARD.VEILER, CARD.DROLL], anywhere: [], deck: [] },

      // VEILER COMBOS
      { hand: [CARD.CROW, CARD.CROW], anywhere: [], deck: [] },
      { hand: [CARD.CROW, CARD.ASH], anywhere: [], deck: [] },
      { hand: [CARD.CROW, CARD.NIBIRU], anywhere: [], deck: [] },
      { hand: [CARD.CROW, CARD.BELLE], anywhere: [], deck: [] },
      { hand: [CARD.CROW, CARD.DROLL], anywhere: [], deck: [] },

      // ASH COMBOS
      { hand: [CARD.ASH, CARD.NIBIRU], anywhere: [], deck: [] },
      { hand: [CARD.ASH, CARD.BELLE], anywhere: [], deck: [] },
      { hand: [CARD.ASH, CARD.DROLL], anywhere: [], deck: [] },

      // NIBIRU COMBOS
      { hand: [CARD.NIBIRU, CARD.BELLE], anywhere: [], deck: [] },
      { hand: [CARD.NIBIRU, CARD.DROLL], anywhere: [], deck: [] },

      // BELLE COMBOS
      { hand: [CARD.BELLE, CARD.DROLL], anywhere: [], deck: [] },
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
