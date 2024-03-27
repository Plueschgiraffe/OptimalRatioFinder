export const CARD = {
  ANY: 'ANY',
  SHIF: 'SHIF',
  PACES: 'PACES',
  ANGLER: 'ANGLER',
  PSIICS: 'PSIICS',
  IMPERM: 'IMPERM',
  ASH: 'ASH',
  VEILER: 'VEILER',
  NIBIRU: 'NIBIRU',
  BELLE: 'BELLE',
  CROW: 'CROW',
  RFUSION: 'RFUSION',
  IFUSION: 'IFUSION',
  ZEP: 'ZEP',
  KEAF: 'KEAF',
  SNOPIOS: 'SNOPIOS',
  DEPTHS: 'DEPTHS',
  IXEEP: 'IXEEP',
  EANOC: 'EANOC',
  ABYSS: 'ABYSS',
  MERMAID: 'MERMAID',
  TUNA: 'TUNA',
  ONEFORONE: 'ONEFORONE',
  GOLDSARC: 'GOLDSARC',
  DESIRES: 'DESIRES',
  PROSPERITY: 'PROSPERITY',
  CALLEDBY: 'CALLEDBY',
  CROSSOUT: 'CROSSOUT',
  HARPOONER: 'HARPOONER',
  SWAPFROG: 'SWAPFROG',
  MASTER: 'MASTER',
  ICEBARRIER: 'ICEBARRIER',
  CHAINS: 'CHAINS',
  MEDALLION: 'MEDALLION',
  AEGIRINE: 'AEGIRINE',
  CRADLE: 'CRADLE',
  DROLL: 'DROLL',
  PIRIMAP: 'PIRIMAP',
  TERRA: 'TERRA',
  SCHEIREN: 'SCHEIREN',
  PERLEREINO: 'PERLEREINO',
  SAKITAMA: 'SAKITAMA',
  LIFELESS: 'LIFELESS',
  SHTHANA: 'SHTHANA',
};

export const DATA = {
  [CARD.ANY]: { id: CARD.ANY, name: 'Any Card' },

  [CARD.SHIF]: {
    id: CARD.SHIF,
    name: 'Shif, Fairy of the Ghoti',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    subtype: 'Tuner',
    level: 2,
    attack: 0,
    defence: 500,
  },

  [CARD.ZEP]: {
    id: CARD.ZEP,
    name: 'Zep, Ruby of the Ghoti',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    subtype: 'Tuner',
    level: 2,
    attack: 0,
    defence: 1000,
  },

  [CARD.SCHEIREN]: {
    id: CARD.SCHEIREN,
    name: 'Tearlaments Scheiren',
    group: 'Monster',
    attribute: 'DARK',
    type: 'AQUA',
    level: 4,
    attack: 1800,
    defence: 1300,
  },

  [CARD.SHTHANA]: {
    id: CARD.SHTHANA,
    name: 'Tenyi Spirit - Shthana',
    group: 'Monster',
    attribute: 'WATER',
    type: 'WYRM',
    level: 4,
    attack: 400,
    defence: 2000,
  },

  [CARD.SAKITAMA]: {
    id: CARD.SAKITAMA,
    name: 'Sakitama',
    group: 'Monster',
    attribute: 'LIGHT',
    type: 'Fairy',
    subtype: 'Spirit',
    level: 4,
    attack: 400,
    defence: 900,
  },

  [CARD.LIFELESS]: {
    id: CARD.LIFELESS,
    name: 'Lifeless Leaffish',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    level: 4,
    attack: 1500,
    defence: 1600,
  },

  [CARD.HARPOONER]: {
    id: CARD.HARPOONER,
    name: 'Fishborg Harpooner',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    subtype: 'Tuner',
    level: 4,
    attack: 400,
    defence: 400,
  },

  [CARD.KEAF]: {
    id: CARD.KEAF,
    name: 'Keaf, Murk of the Ghoti',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    level: 2,
    attack: 0,
    defence: 1500,
  },

  [CARD.SNOPIOS]: {
    id: CARD.SNOPIOS,
    name: 'Snopios, Shade of the Ghoti',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    level: 6,
    attack: 2100,
    defence: 0,
  },

  [CARD.AEGIRINE]: {
    id: CARD.AEGIRINE,
    name: 'Icejade Ran Aegirine',
    group: 'Monster',
    attribute: 'WATER',
    type: 'AQUA',
    level: 7,
    subtype: 'Tuner',
    attack: 1500,
    defence: 2500,
  },

  [CARD.MASTER]: {
    id: CARD.MASTER,
    name: 'Mirror Magic Master of the Ice Barrier',
    group: 'Monster',
    attribute: 'WATER',
    type: 'AQUA',
    subtype: 'Tuner',
    level: 6,
    attack: 1000,
    defence: 400,
  },

  [CARD.SWAPFROG]: {
    id: CARD.SWAPFROG,
    name: 'Swap Frog',
    group: 'Monster',
    attribute: 'WATER',
    type: 'AQUA',
    level: 2,
    attack: 1000,
    defence: 500,
  },

  [CARD.ABYSS]: {
    id: CARD.ABYSS,
    name: 'Abyss Shark',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    level: 5,
    attack: 1200,
    defence: 700,
  },

  [CARD.TUNA]: {
    id: CARD.TUNA,
    name: 'Beautunaful Princess',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    level: 1,
    attack: 0,
    defence: 0,
  },

  [CARD.DROLL]: {
    id: CARD.DROLL,
    name: 'Droll & Lock Bird',
    group: 'Monster',
    attribute: 'WIND',
    type: 'Spellcaster',
    level: 1,
    attack: 0,
    defence: 0,
  },

  [CARD.MERMAID]: {
    id: CARD.MERMAID,
    name: 'Mermaid Shark',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    level: 1,
    attack: 100,
    defence: 100,
  },

  [CARD.PACES]: {
    id: CARD.PACES,
    name: 'Paces, Light of the Ghoti',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    subtype: 'Tuner',
    level: 2,
    attack: 0,
    defence: 0,
  },

  [CARD.ANGLER]: {
    id: CARD.ANGLER,
    name: 'Silent Angler',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    level: 4,
    attack: 800,
    defence: 1400,
  },

  [CARD.PSIICS]: {
    id: CARD.PSIICS,
    name: 'Psiics, Moonlight of the Ghoti',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    level: 6,
    attack: 2400,
    defence: 0,
  },

  [CARD.IXEEP]: {
    id: CARD.IXEEP,
    name: 'Ixeep, Omen of the Ghoti',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    level: 4,
    attack: 1500,
    defence: 0,
  },

  [CARD.EANOC]: {
    id: CARD.EANOC,
    name: 'Eanoc, Sentry of the Ghoti',
    group: 'Monster',
    attribute: 'WATER',
    type: 'Fish',
    level: 6,
    attack: 2100,
    defence: 0,
  },

  [CARD.IMPERM]: {
    id: CARD.IMPERM,
    name: 'Infinite Impermanence',
    group: 'Trap',
    type: 'Normal',
  },

  [CARD.PIRIMAP]: {
    id: CARD.PIRIMAP,
    name: 'Piri Reis Map',
    group: 'Spell',
    type: 'Normal',
  },

  [CARD.TERRA]: {
    id: CARD.TERRA,
    name: 'Terraforming',
    group: 'Spell',
    type: 'Normal',
  },

  [CARD.PERLEREINO]: {
    id: CARD.PERLEREINO,
    name: 'Primeval Planet Perlereino',
    group: 'Spell',
    type: 'Field',
  },

  [CARD.CRADLE]: {
    id: CARD.CRADLE,
    name: 'Icejade Cradle',
    group: 'Spell',
    type: 'Normal',
  },

  [CARD.ICEBARRIER]: {
    id: CARD.ICEBARRIER,
    name: 'Ice Barrier',
    group: 'Trap',
    type: 'Normal',
  },

  [CARD.CHAINS]: {
    id: CARD.CHAINS,
    name: 'Freezing Chains of the Ice Barrier',
    group: 'Spell',
    type: 'Continuous',
  },

  [CARD.MEDALLION]: {
    id: CARD.MEDALLION,
    name: 'Medallion of the Ice Barrier',
    group: 'Spell',
    type: 'Normal',
  },

  [CARD.ONEFORONE]: {
    id: CARD.ONEFORONE,
    name: 'One for One',
    group: 'Spell',
    type: 'Normal',
  },

  [CARD.DESIRES]: {
    id: CARD.DESIRES,
    name: 'Pot of Desires',
    group: 'Spell',
    type: 'Normal',
  },

  [CARD.PROSPERITY]: {
    id: CARD.PROSPERITY,
    name: 'Pot of Prosperity',
    group: 'Spell',
    type: 'Normal',
  },

  [CARD.GOLDSARC]: {
    id: CARD.GOLDSARC,
    name: 'Gold Sarcophagus',
    group: 'Spell',
    type: 'Normal',
  },

  [CARD.CALLEDBY]: {
    id: CARD.CALLEDBY,
    name: 'Called by the Grave',
    group: 'Spell',
    type: 'Quick',
  },

  [CARD.CROSSOUT]: {
    id: CARD.CROSSOUT,
    name: 'Crossout Designator',
    group: 'Spell',
    type: 'Quick',
  },

  [CARD.DEPTHS]: {
    id: CARD.DEPTHS,
    name: 'The Most Distant, Deepest Depths',
    group: 'Spell',
    type: 'Normal',
  },

  [CARD.RFUSION]: {
    id: CARD.RFUSION,
    name: 'Ready Fusion',
    group: 'Spell',
    type: 'Normal',
  },

  [CARD.IFUSION]: {
    id: CARD.IFUSION,
    name: 'Instant Fusion',
    group: 'Spell',
    type: 'Normal',
  },

  [CARD.ASH]: {
    id: CARD.ASH,
    name: 'Ash Blossom & Joyous Spring',
    group: 'Monster',
    attribute: 'FIRE',
    type: 'Zombie',
    subtype: 'Tuner',
    level: 3,
    attack: 0,
    defence: 1800,
  },

  [CARD.VEILER]: {
    id: CARD.VEILER,
    name: 'Effect Veiler',
    group: 'Monster',
    attribute: 'LIGHT',
    type: 'Spellcaster',
    subtype: 'Tuner',
    level: 1,
    attack: 0,
    defence: 0,
  },

  [CARD.NIBIRU]: {
    id: CARD.NIBIRU,
    name: 'Nibiru, the Primal Being',
    group: 'Monster',
    attribute: 'LIGHT',
    type: 'Rock',
    level: 11,
    attack: 3000,
    defence: 600,
  },

  [CARD.BELLE]: {
    id: CARD.BELLE,
    name: 'Ghost Belle & Haunted Mansion',
    group: 'Monster',
    attribute: 'Earth',
    type: 'Zombie',
    subtype: 'Tuner',
    level: 3,
    attack: 0,
    defence: 1800,
  },

  [CARD.CROW]: {
    id: CARD.CROW,
    name: 'D.D. Crow',
    group: 'Monster',
    attribute: 'DARK',
    type: 'Winged Beast',
    level: 1,
    attack: 100,
    defence: 100,
  },
};
