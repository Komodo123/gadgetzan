let util = require ('../util');

module.exports = {
  backCategory: util.toIndex ([
    'base',
    'fireside',
    'achieve',
    'heroes',
    'season',
    'legend',
    'esports',
    'game_license',
    'promotion',
    'pre_purchase',
    'blizzard',
    'golden',
    'events'
  ]),

  cardClass: util.toIndex ([
    'demonhunter',
    'druid',
    'hunter',
    'mage',
    'paladin',
    'priest',
    'rogue',
    'shaman',
    'warlock',
    'warrior',
    'neutral'
  ]),

  gameMode: util.toIndex ([
    'constructed',
    'battlegrounds',
    'arena',
    'duels'
  ]),

  metaType: util.toIndex ([
    'sets',
    'setGroups',
    'types',
    'rarities',
    'classes',
    'minionTypes',
    'keywords'
  ]),

  mercenaryType: util.toIndex ([
    'fighter',
    'protector',
    'tank'
  ]),

  minionType: util.toIndex ([
    'murloc',
    'demon',
    'mech',
    'elemental',
    'beast',
    'totem',
    'pirate',
    'dragon',
    'all'
  ]),

  order: util.toIndex ([
    'asc',
    'desc'
  ]),

  rarity: util.toIndex ([
    'free',
    'common',
    'rare',
    'epich',
    'legendary'
  ]),

  sort: util.toIndex ([
    'manaCost',
    'attack',
    'health',
    'name',
    'dataAdded',
    'groupByClass'
  ]),

  spellSchool: util.toIndex ([
    'arcane',
    'fel',
    'fire',
    'frost',
    'holy',
    'shadow',
    'nature'
  ]),

  tier: util.toIndex ([
    1,
    2,
    3,
    4,
    5,
    6,
    'hero'
  ]),

  type: util.toIndex ([
    'hero',
    'minion',
    'spell',
    'weapon'
  ])
};