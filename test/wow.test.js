require ('dotenv/config');

let { Client } = require ('gadgetzan');

let AuctionHouse = require ('../src/wow/model/AuctionHouse');
let ConnectedRealm = require ('../src/wow/model/ConnectedRealm');
let Item = require ('../src/wow/model/Item');
let Region = require ('../src/wow/model/Region');

describe ('World of Warcraft', () => {
  let client;

  beforeAll (() => {
    client = new Client (
      process.env.BATTLE_NET_CLIENT_ID,
      process.env.BATTLE_NET_CLIENT_SECRET,

      {
        region: process.env.BATTLE_NET_REGION,
        cache: false,
        throttle: 25
      }
    );
  });

  afterEach (async () => {
    await client.cache.save ();
  });

  function commonHighLevelAPIs (version) {
    test (`client.wow.${version}.getConnectedRealms`, async () => {
      let connectedRealms = await client.wow [version].getConnectedRealms ();

      for (let connectedRealm of connectedRealms) {
        expect (connectedRealm).toBeInstanceOf (ConnectedRealm);
      }
    }, 60 * 10 * 1000);

    test (`client.wow.${version}.getConnectedRealm`, async () => {
      let connectedRealm = await client.wow [version].getConnectedRealm ('Grobbulus');
      if (version === 'classic') {
        expect (connectedRealm).toBeInstanceOf (ConnectedRealm);
      } else {
        expect (connectedRealm).toBeNull ();
      }

      connectedRealm = await client.wow [version].getConnectedRealm ('Bladefist');

      if (version === 'classic') {
        expect (connectedRealm).toBeNull ();
      } else {
        expect (connectedRealm).toBeInstanceOf (ConnectedRealm);
      }
    }, 60 * 10 * 1000);

    test (`client.wow.${version}.getItem`, async () => {
      let item = await client.wow [version].getItem ('Thunderfury');

      expect (item).toBeInstanceOf (Item);
      expect (item.name).toEqual ('Thunderfury, Blessed Blade of the Windseeker');

      item = await client.wow [version].getItem ('D.N.E');

      expect (item).toBeNull ();
    });

    test (`client.wow.${version}.getItemById`, async () => {
      let item = await client.wow [version].getItemById (25);

      expect (item).toBeInstanceOf (Item);
      expect (item.name).toEqual ('Worn Shortsword');

      item = await client.wow [version].getItemById (1);

      expect (item).toBeNull ();
    });

    test (`client.wow.${version}.getItems`, async () => {
      let items = await client.wow [version].getItems ('Thunderfury');

      for await (let item of items) {
        expect (item).toBeInstanceOf (Item);
      }
    });

    test (`client.wow.${version}.getRegions`, async () => {
      let regions = await client.wow [version].getRegions ();

      for (let region of regions) {
        expect (region).toBeInstanceOf (Region);
      }

      regions = await client.wow [version].getRegions ('eu');

      for (let region of regions) {
        expect (region).toBeInstanceOf (Region);
      }
    });
  }

  function commonLowLevelAPIs (version) {
    test (`client.wow.${version}.api.getConnectedRealmsIndex`, async () => {
      expect (await client.wow [version].api.getConnectedRealmsIndex ()).toHaveProperty ('connected_realms');
    });

    test (`client.wow.${version}.api.getConnectedRealm`, async () => {
      expect (await client.wow [version].api.getConnectedRealm (version === 'classic' ? 4408 : 11)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.searchConnectedRealms`, async () => {
      expect (await client.wow [version].api.searchConnectedRealms ({ timezone: 'America/New_York'})).toHaveProperty ('results');
    });

    test (`client.wow.${version}.api.getCreatureFamiliesIndex`, async () => {
      expect (await client.wow [version].api.getCreatureFamiliesIndex ()).toHaveProperty ('creature_families');
    });

    test (`client.wow.${version}.api.getCreatureFamily`, async () => {
      expect (await client.wow [version].api.getCreatureFamily (1)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getCreatureTypesIndex`, async () => {
      expect (await client.wow [version].api.getCreatureTypesIndex ()).toHaveProperty ('creature_types');
    });

    test (`client.wow.${version}.api.getCreatureType`, async () => {
      expect (await client.wow [version].api.getCreatureType (1)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getCreature`, async () => {
      expect (await client.wow [version].api.getCreature (26446)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.searchCreatures`, async () => {
      expect (await client.wow [version].api.searchCreatures ({ name: 'Crystalline Ice Elemental' })).toHaveProperty ('results');
    });

    test (`client.wow.${version}.api.getCreatureDisplayMedia`, async () => {
      expect (await client.wow [version].api.getCreatureDisplayMedia (16901)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getCreatureFamilyMedia`, async () => {
      expect (await client.wow [version].api.getCreatureFamilyMedia (27)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getGuildCrestComponentsIndex`, async () => {
      expect (await client.wow [version].api.getGuildCrestComponentsIndex ()).toHaveProperty ('borders');
    });

    test (`client.wow.${version}.api.getGuildCrestBorderMedia`, async () => {
      expect (await client.wow [version].api.getGuildCrestBorderMedia (0)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getGuildCrestEmblemMedia`, async () => {
      expect (await client.wow [version].api.getGuildCrestEmblemMedia (0)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getItemClassesIndex`, async () => {
      expect (await client.wow [version].api.getItemClassesIndex ()).toHaveProperty ('item_classes');
    });

    test (`client.wow.${version}.api.getItemClass`, async () => {
      expect (await client.wow [version].api.getItemClass (0)).toHaveProperty ('class_id');
    });

    test (`client.wow.${version}.api.getItemSubclass`, async () => {
      expect (await client.wow [version].api.getItemSubclass (0, 0)).toHaveProperty ('subclass_id');
    });

    test (`client.wow.${version}.api.getItem`, async () => {
      expect (await client.wow [version].api.getItem (19019)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getItemMedia`, async () => {
      expect (await client.wow [version].api.getItemMedia (19019)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.searchItems`, async () => {
      expect (await client.wow [version].api.searchItems ({ name: 'Thunderfury' })).toHaveProperty ('results');
    });

    test (`client.wow.${version}.api.searchMedia`, async () => {
      expect (await client.wow [version].api.searchMedia ({ tags: 'item' })).toHaveProperty ('results');
    });

    test (`client.wow.${version}.api.getPlayableClassesIndex`, async () => {
      expect (await client.wow [version].api.getPlayableClassesIndex ()).toHaveProperty ('classes');
    });

    test (`client.wow.${version}.api.getPlayableClass`, async () => {
      expect (await client.wow [version].api.getPlayableClass (7)).toHaveProperty ('id');
    });
    
    test (`client.wow.${version}.api.getPlayableClassMedia`, async () => {
      expect (await client.wow [version].api.getPlayableClassMedia (7)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getPlayableRacesIndex`, async () => {
      expect (await client.wow [version].api.getPlayableRacesIndex ()).toHaveProperty ('races');
    });

    test (`client.wow.${version}.api.getPlayableRace`, async () => {
      expect (await client.wow [version].api.getPlayableRace (2)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getPowerTypesIndex`, async () => {
      expect (await client.wow [version].api.getPowerTypesIndex ()).toHaveProperty ('power_types');
    });

    test (`client.wow.${version}.api.getRealmsIndex`, async () => {
      expect (await client.wow [version].api.getRealmsIndex ()).toHaveProperty ('realms');
    });

    test (`client.wow.${version}.api.getRealm`, async () => {
      expect (await client.wow [version].api.getRealm (version === 'classic' ? 'westfall' : 'tichondrius')).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.searchRealms`, async () => {
      expect (await client.wow [version].api.searchRealms ({ timezone: 'America/New_York' })).toHaveProperty ('results');
    });

    test (`client.wow.${version}.api.getRegionsIndex`, async () => {
      expect (await client.wow [version].api.getRegionsIndex ()).toHaveProperty ('regions');
    });

    test (`client.wow.${version}.api.getRegion`, async () => {
      expect (await client.wow [version].api.getRegion (version === 'classic' ? 41 : 1)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getWoWTokenIndex`, async () => {
      expect (await client.wow [version].api.getWoWTokenIndex ()).toHaveProperty ('price');
    });

    test (`client.wow.${version}.api.getPvPSeasonsIndex`, async () => {
      expect (await client.wow [version].api.getPvPSeasonsIndex ()).toHaveProperty ('seasons');
    });

    test (`client.wow.${version}.api.getPvPSeason`, async () => {
      expect (await client.wow [version].api.getPvPSeason (version === 'classic' ? 4 : 27)).toHaveProperty ('id');
    });
  }

  describe ('High-Level API', () => {
    describe ('Retail', () => {
      commonHighLevelAPIs ('retail');
    });

    describe ('Classic', () => {
      commonHighLevelAPIs ('classic');
    });
  });

  describe ('Low-Level API', () => {
    describe ('Retail', () => {
      commonLowLevelAPIs ('retail');

      test ('client.wow.retail.api.getAchievementCategoriesIndex', async () => {
        expect (await client.wow.retail.api.getAchievementCategoriesIndex ()).toHaveProperty ('categories');
      });

      test ('client.wow.retail.api.getAchievementCategory', async () => {
        expect (await client.wow.retail.api.getAchievementCategory (81)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getAchivementsIndex', async () => {
        expect (await client.wow.retail.api.getAchievementsIndex ()).toHaveProperty ('achievements');
      });

      test ('client.wow.retail.api.getAchievement', async () => {
        expect (await client.wow.retail.api.getAchievement (6)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getAchievementMedia', async () => {
        expect (await client.wow.retail.api.getAchievementMedia (6)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getAuctions', async () => {
        expect (await client.wow.retail.api.getAuctions (121)).toHaveProperty ('auctions');
      });

      test ('client.wow.retail.api.getAzeriteEssencesIndex', async () => {
        expect (await client.wow.retail.api.getAzeriteEssencesIndex (1146)).toHaveProperty ('azerite_essences');
      });

      test ('client.wow.retail.api.getAzeriteEssence', async () => {
        expect (await client.wow.retail.api.getAzeriteEssence (2)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.searchAzeriteEssences', async () => {
        expect (await client.wow.retail.api.searchAzeriteEssences ({ allowedSpecializations: 65 })).toHaveProperty ('results');
      });

      test ('client.wow.retail.api.getAzeriteEssenceMedia', async () => {
        expect (await client.wow.retail.api.getAzeriteEssenceMedia (2)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getCovenantsIndex', async () => {
        expect (await client.wow.retail.api.getCovenantsIndex ()).toHaveProperty ('covenants');
      });

      test ('client.wow.retail.api.getCovenant', async () => {
        expect (await client.wow.retail.api.getCovenant (1)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getCovenantMedia', async () => {
        expect (await client.wow.retail.api.getCovenantMedia (1)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getSoulbindsIndex', async () => {
        expect (await client.wow.retail.api.getSoulbindsIndex ()).toHaveProperty ('soulbinds');
      });

      test ('client.wow.retail.api.getSoulbind', async () => {
        expect (await client.wow.retail.api.getSoulbind (1)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getConduitsIndex', async () => {
        expect (await client.wow.retail.api.getConduitsIndex ()).toHaveProperty ('conduits');
      });

      test ('client.wow.retail.api.getConduit', async () => {
        expect (await client.wow.retail.api.getConduit (19)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getGuild', async () => {
        expect (await client.wow.retail.api.getGuild ('illidan', 'complexity-limit')).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getGuildActivity', async () => {
        expect (await client.wow.retail.api.getGuildActivity ('illidan', 'complexity-limit')).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getGuildAchievements', async () => {
        expect (await client.wow.retail.api.getGuildAchievements ('illidan', 'complexity-limit')).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getGuildRoster', async () => {
        expect (await client.wow.retail.api.getGuildRoster ('illidan', 'complexity-limit')).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getItemSetsIndex', async () => {
        expect (await client.wow.retail.api.getItemSetsIndex (1)).toHaveProperty ('item_sets');
      });

      test ('client.wow.retail.api.getItemSet', async () => {
        expect (await client.wow.retail.api.getItemSet (1)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getJournalExpansionsIndex', async () => {
        expect (await client.wow.retail.api.getJournalExpansionsIndex ()).toHaveProperty ('tiers');
      });

      test ('client.wow.retail.api.getJournalExpansion', async () => {
        expect (await client.wow.retail.api.getJournalExpansion (68)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getJournalEncountersIndex', async () => {
        expect (await client.wow.retail.api.getJournalEncountersIndex (1)).toHaveProperty ('encounters');
      });

      test ('client.wow.retail.api.getJournalEncounter', async () => {
        expect (await client.wow.retail.api.getJournalEncounter (89)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.searchJournalEncounters', async () => {
        expect (await client.wow.retail.api.searchJournalEncounters ({ instanceName: 'Deadmines' })).toHaveProperty ('results');
      });

      test ('client.wow.retail.api.getJournalInstancesIndex', async () => {
        expect (await client.wow.retail.api.getJournalInstancesIndex ()).toHaveProperty ('instances');
      });

      test ('client.wow.retail.api.getJournalInstance', async () => {
        expect (await client.wow.retail.api.getJournalInstance (63)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getJournalInstanceMedia', async () => {
        expect (await client.wow.retail.api.getJournalInstanceMedia (63)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getModifiedCraftingsIndex', async () => {
        expect (await client.wow.retail.api.getModifiedCraftingsIndex ()).toHaveProperty ('categories');
      });

      test ('client.wow.retail.api.getModifiedCraftingCategoriesIndex', async () => {
        expect (await client.wow.retail.api.getModifiedCraftingCategoriesIndex ()).toHaveProperty ('categories');
      });

      test ('client.wow.retail.api.getModifiedCraftingCategory', async () => {
        expect (await client.wow.retail.api.getModifiedCraftingCategory (1)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getModifiedCraftingReagentSlotTypeIndex', async () => {
        expect (await client.wow.retail.api.getModifiedCraftingReagentSlotTypeIndex (63)).toHaveProperty ('slot_types');
      });

      test ('client.wow.retail.api.getModifiedCraftingReagentSlotType', async () => {
        expect (await client.wow.retail.api.getModifiedCraftingReagentSlotType (16)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getMountsIndex', async () => {
        expect (await client.wow.retail.api.getMountsIndex ()).toHaveProperty ('mounts');
      });

      test ('client.wow.retail.api.getMount', async () => {
        expect (await client.wow.retail.api.getMount (6)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.searchMounts', async () => {
        expect (await client.wow.retail.api.searchMounts ({ name: 'Turtle' })).toHaveProperty ('results');
      });

      test ('client.wow.retail.api.getMythicKeystoneAffixesIndex', async () => {
        expect (await client.wow.retail.api.getMythicKeystoneAffixesIndex ()).toHaveProperty ('affixes');
      });

      test ('client.wow.retail.api.getMythicKeystoneAffix', async () => {
        expect (await client.wow.retail.api.getMythicKeystoneAffix (1)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getMythicKeystoneAffixMedia', async () => {
        expect (await client.wow.retail.api.getMythicKeystoneAffixMedia (1)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getMythicKeystoneDungeonsIndex', async () => {
        expect (await client.wow.retail.api.getMythicKeystoneDungeonsIndex ()).toHaveProperty ('dungeons');
      });

      test ('client.wow.retail.api.getMythicKeystoneDungeon', async () => {
        expect (await client.wow.retail.api.getMythicKeystoneDungeon (169)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getMythicKeystoneIndex', async () => {
        expect (await client.wow.retail.api.getMythicKeystoneIndex ()).toHaveProperty ('seasons');
      });

      test ('client.wow.retail.api.getMythicKeystonePeriodsIndex', async () => {
        expect (await client.wow.retail.api.getMythicKeystonePeriodsIndex ()).toHaveProperty ('periods');
      });

      test ('client.wow.retail.api.getMythicKeystonePeriod', async () => {
        expect (await client.wow.retail.api.getMythicKeystonePeriod (641)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getMythicKeystoneSeasonsIndex', async () => {
        expect (await client.wow.retail.api.getMythicKeystoneSeasonsIndex ()).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getMythicKeystoneSeason', async () => {
        expect (await client.wow.retail.api.getMythicKeystoneSeason (1)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getMythicKeystoneLeaderboardsIndex', async () => {
        expect (await client.wow.retail.api.getMythicKeystoneLeaderboardsIndex (11)).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getMythicKeystoneLeaderboard', async () => {
        expect (await client.wow.retail.api.getMythicKeystoneLeaderboard (11, 197, 641)).toHaveProperty ('period');
      });

      test ('client.wow.retail.api.getMythicRaidLeaderboard', async () => {
        expect (await client.wow.retail.api.getMythicRaidLeaderboard ('uldir', 'alliance')).toHaveProperty ('slug');
      });

      test ('client.wow.retail.api.getPetsIndex', async () => {
        expect (await client.wow.retail.api.getPetsIndex ()).toHaveProperty ('pets');
      });

      test ('client.wow.retail.api.getPet', async () => {
        expect (await client.wow.retail.api.getPet (39)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getPetMedia', async () => {
        expect (await client.wow.retail.api.getPetMedia (39)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getPetAbilitiesIndex', async () => {
        expect (await client.wow.retail.api.getPetAbilitiesIndex ()).toHaveProperty ('abilities');
      });

      test ('client.wow.retail.api.getPetAbility', async () => {
        expect (await client.wow.retail.api.getPetAbility (110)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getPetAbilityMedia', async () => {
        expect (await client.wow.retail.api.getPetAbilityMedia (110)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getPvPTalentSlots', async () => {
        expect (await client.wow.retail.api.getPvPTalentSlots (7)).toHaveProperty ('talent_slots');
      });

      test ('client.wow.retail.api.getPlayableSpecializationsIndex', async () => {
        expect (await client.wow.retail.api.getPlayableSpecializationsIndex ()).toHaveProperty ('character_specializations');
      });

      test ('client.wow.retail.api.getPlayableSpecialization', async () => {
        expect (await client.wow.retail.api.getPlayableSpecialization (262)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getPlayableSpecializationMedia', async () => {
        expect (await client.wow.retail.api.getPlayableSpecializationMedia (262)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getPowerTypesIndex', async () => {
        expect (await client.wow.retail.api.getPowerTypesIndex ()).toHaveProperty ('power_types');
      });

      test ('client.wow.retail.api.getPowerType', async () => {
        expect (await client.wow.retail.api.getPowerType (0)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getProfessionsIndex', async () => {
        expect (await client.wow.retail.api.getProfessionsIndex ()).toHaveProperty ('professions');
      });

      test ('client.wow.retail.api.getProfession', async () => {
        expect (await client.wow.retail.api.getProfession (164)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getProfessionMedia', async () => {
        expect (await client.wow.retail.api.getProfessionMedia (164)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getProfessionSkillTier', async () => {
        expect (await client.wow.retail.api.getProfessionSkillTier (164, 2477)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getRecipe', async () => {
        expect (await client.wow.retail.api.getRecipe (1631)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getRecipeMedia', async () => {
        expect (await client.wow.retail.api.getRecipeMedia (1631)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getPvPLeaderboardsIndex', async () => {
        expect (await client.wow.retail.api.getPvPLeaderboardsIndex (27)).toHaveProperty ('leaderboards');
      });

      test ('client.wow.retail.api.getPvPLeaderboard', async () => {
        expect (await client.wow.retail.api.getPvPLeaderboard (27, '3v3')).toHaveProperty ('entries');
      });

      test ('client.wow.retail.api.getPvPLeaderboard', async () => {
        expect (await client.wow.retail.api.getPvPRewardsIndex (27)).toHaveProperty ('rewards');
      });

      test ('client.wow.retail.api.getPvPTierMedia', async () => {
        expect (await client.wow.retail.api.getPvPTierMedia (1)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getPvPTiersIndex', async () => {
        expect (await client.wow.retail.api.getPvPTiersIndex ()).toHaveProperty ('tiers');
      });

      test ('client.wow.retail.api.getPvPTier', async () => {
        expect (await client.wow.retail.api.getPvPTier (1)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getQuestsIndex', async () => {
        expect (await client.wow.retail.api.getQuestsIndex ()).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getQuest', async () => {
        expect (await client.wow.retail.api.getQuest (2)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getQuestCategoriesIndex', async () => {
        expect (await client.wow.retail.api.getQuestCategoriesIndex ()).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getQuestCategory', async () => {
        expect (await client.wow.retail.api.getQuestCategory (1)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getQuestAreasIndex', async () => {
        expect (await client.wow.retail.api.getQuestAreasIndex ()).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getQuestArea', async () => {
        expect (await client.wow.retail.api.getQuestArea (1)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getQuestTypesIndex', async () => {
        expect (await client.wow.retail.api.getQuestTypesIndex ()).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getQuestType', async () => {
        expect (await client.wow.retail.api.getQuestType (1)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getReputationFactionsIndex', async () => {
        expect (await client.wow.retail.api.getReputationFactionsIndex (1)).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getReputationFaction', async () => {
        expect (await client.wow.retail.api.getReputationFaction (21)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getReputationTiersIndex', async () => {
        expect (await client.wow.retail.api.getReputationTiersIndex (1)).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getReputationTiers', async () => {
        expect (await client.wow.retail.api.getReputationTiers (2)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getSpell', async () => {
        expect (await client.wow.retail.api.getSpell (196607)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getSpellMedia', async () => {
        expect (await client.wow.retail.api.getSpellMedia (196607)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.searchSpells', async () => {
        expect (await client.wow.retail.api.searchSpells ({ name: 'Holy Shield' })).toHaveProperty ('results');
      });

      test ('client.wow.retail.api.getTalentsIndex', async () => {
        expect (await client.wow.retail.api.getTalentsIndex ()).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getTalent', async () => {
        expect (await client.wow.retail.api.getTalent (23106)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getPvPTalentsIndex', async () => {
        expect (await client.wow.retail.api.getPvPTalentsIndex ()).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getPvPTalent', async () => {
        expect (await client.wow.retail.api.getPvPTalent (40)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getTechTalentTreeIndex', async () => {
        expect (await client.wow.retail.api.getTechTalentTreeIndex ()).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getTechTalentTree', async () => {
        expect (await client.wow.retail.api.getTechTalentTree (275)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getTechTalentIndex', async () => {
        expect (await client.wow.retail.api.getTechTalentIndex (3)).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getTechTalent', async () => {
        expect (await client.wow.retail.api.getTechTalent (863)).toHaveProperty ('id');
      });

      test ('client.wow.retail.api.getTechTalentMedia', async () => {
        expect (await client.wow.retail.api.getTechTalentMedia (863)).toHaveProperty ('assets');
      });

      test ('client.wow.retail.api.getTitlesIndex', async () => {
        expect (await client.wow.retail.api.getTitlesIndex ()).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.getTitle', async () => {
        expect (await client.wow.retail.api.getTitle (1)).toHaveProperty ('id');
      });

      describe ('Profile', () => {  
        test ('client.wow.retail.api.getCharacterAchievementsSummary', async () => {
          expect (await client.wow.retail.api.getCharacterAchievementsSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterAchievementStatistics', async () => {
          expect (await client.wow.retail.api.getCharacterAchievementStatistics ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterAppearanceSummary', async () => {
          expect (await client.wow.retail.api.getCharacterAppearanceSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterCollectionsIndex', async () => {
          expect (await client.wow.retail.api.getCharacterCollectionsIndex ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterMountsCollectionSummary', async () => {
          expect (await client.wow.retail.api.getCharacterMountsCollectionSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterPetsCollectionSummary', async () => {
          expect (await client.wow.retail.api.getCharacterPetsCollectionSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterEncountersSummary', async () => {
          expect (await client.wow.retail.api.getCharacterEncountersSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterDungeons', async () => {
          expect (await client.wow.retail.api.getCharacterDungeons ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterRaids', async () => {
          expect (await client.wow.retail.api.getCharacterRaids ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterEquipmentSummary', async () => {
          expect (await client.wow.retail.api.getCharacterEquipmentSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterHunterPetsSummary', async () => {
          expect (await client.wow.retail.api.getCharacterHunterPetsSummary ('illidan', 'parsniproot')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterMediaSummary', async () => {
          expect (await client.wow.retail.api.getCharacterMediaSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterMythicKeystoneProfileIndex', async () => {
          expect (await client.wow.retail.api.getCharacterMythicKeystoneProfileIndex ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterMythicKeystoneSeasonDetails', async () => {
          expect (await client.wow.retail.api.getCharacterMythicKeystoneSeasonDetails ('illidan', 'cizzie', 1)).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterProfessionsSummary', async () => {
          expect (await client.wow.retail.api.getCharacterProfessionsSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterProfileSummary', async () => {
          expect (await client.wow.retail.api.getCharacterProfileSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterProfileStatus', async () => {
          expect (await client.wow.retail.api.getCharacterProfileStatus ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterPvPBracketStatistics', async () => {
          expect (await client.wow.retail.api.getCharacterPvPBracketStatistics ('illidan', 'kaifariik', '3v3')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterPvPSummary', async () => {
          expect (await client.wow.retail.api.getCharacterPvPSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterQuests', async () => {
          expect (await client.wow.retail.api.getCharacterCompletedQuests ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterReputationsSummary', async () => {
          expect (await client.wow.retail.api.getCharacterReputationsSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterSoulbinds', async () => {
          expect (await client.wow.retail.api.getCharacterSoulbinds ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterSpecializationsSummary', async () => {
          expect (await client.wow.retail.api.getCharacterSpecializationsSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterStatisticsSummary', async () => {
          expect (await client.wow.retail.api.getCharacterStatisticsSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });

        test ('client.wow.retail.api.getCharacterTitlesSummary', async () => {
          expect (await client.wow.retail.api.getCharacterTitlesSummary ('illidan', 'dragonberry')).toHaveProperty ('_links');
        });
      });
    });

    describe ('Classic', () => {  
      commonLowLevelAPIs ('classic');

      test ('client.wow.classic.api.getAuctionHouseIndex', async () => {
        expect (await client.wow.classic.api.getAuctionHousesIndex (4372)).toHaveProperty ('auctions');
      });

      test ('client.wow.classic.api.getAuctions', async () => {
        expect (await client.wow.classic.api.getAuctions (4372, 2)).toHaveProperty ('auctions');
      }, 60 * 10 * 1000);

      test ('client.wow.classic.api.getPvPRegionsIndex', async () => {
        expect (await client.wow.classic.api.getPvPRegionsIndex ()).toHaveProperty ('pvp_regions');
      });

      test ('client.wow.classic.api.getPvPRegionalSeasonsIndex', async () => {
        expect (await client.wow.classic.api.getPvPRegionalSeasonsIndex (1)).toHaveProperty ('seasons');
      });

      // Note: These endpoints are not working on develop.battle.net "Try it out" either.
      // test ('client.wow.classic.api.getPvPRegionalSeason', async () => {
      //   expect (await client.wow.classic.api.getPvPRegionalSeason (5, 5)).toHaveProperty ('id');
      // });

      // test ('client.wow.classic.api.getPvPLeaderboardsIndex', async () => {
      //   expect (await client.wow.classic.api.getPvPLeaderboardsIndex (5, 5)).toHaveProperty ('leaderboards');
      // });

      // test ('client.wow.classic.api.getPvPLeaderboard', async () => {
      //   expect (await client.wow.classic.api.getPvPLeaderboard (5, 5, '3v3')).toHaveProperty ('id');
      // });

      // test ('client.wow.classic.api.getPvPRewardsIndex', async () => {
      //   expect (await client.wow.classic.api.getPvPRewardsIndex (1, 1)).toHaveProperty ('pvp_rewards');
      // });
    });
  });
});