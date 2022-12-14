let Base = require ('../Api');
let Account = require ('./Account');

class Api extends Base
{
  constructor (client) {
    super (client);

    this.account = new Account (client);
  }

  // Game Data APIs

  async getAchievementCategoriesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/achievement-category/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getAchievementCategory (achievementCategoryId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/achievement-category/${encodeURIComponent (achievementCategoryId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getAchievementsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/achievement/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getAchievement (achievementId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/achievement/${encodeURIComponent (achievementId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getAchievementMedia (achievementId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/achievement/${encodeURIComponent (achievementId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getAuctions (connectedRealmId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/connected-realm/${encodeURIComponent (connectedRealmId)}/auctions`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getAzeriteEssencesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/azerite-essence/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getAzeriteEssence (azeriteEssenceId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/azerite-essence/${encodeURIComponent (azeriteEssenceId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async searchAzeriteEssences ({ allowedSpecializations, orderBy, page }, options) {
    return this.get ({
      ... options,
      path: `/data/wow/search/azerite-essence`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params,
        'allowed_specializations.id': allowedSpecializations,
        orderby: orderBy,
        _page: page
      }
    });
  }

  async getAzeriteEssenceMedia (azeriteEssenceId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/azerite-essence/${encodeURIComponent (azeriteEssenceId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getCovenantsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/covenant/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getCovenant (covenantId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/covenant/${encodeURIComponent (covenantId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getCovenantMedia (covenantId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/covenant/${encodeURIComponent (covenantId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getSoulbindsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/covenant/soulbind/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getSoulbind (soulbindId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/covenant/soulbind/${encodeURIComponent (soulbindId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getConduitsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/covenant/conduit/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getConduit (conduitId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/covenant/conduit/${encodeURIComponent (conduitId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getGuild (realmSlug, characterName, options) {
    return this.get ({
      path: `/data/wow/guild/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options
      }
    });
  }

  async getGuildActivity (realmSlug, characterName, options) {
    return this.get ({
      path: `/data/wow/guild/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/activity`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options
      }
    });
  }

  async getGuildAchievements (realmSlug, characterName, options) {
    return this.get ({
      path: `/data/wow/guild/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/achievements`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options
      }
    });
  }

  async getGuildRoster (realmSlug, characterName, options) {
    return this.get ({
      path: `/data/wow/guild/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/roster`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options
      }
    });
  }

  async getItemSetsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/item-set/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getItemSet (itemSetId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/item-set/${encodeURIComponent (itemSetId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getJournalExpansionsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/journal-expansion/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getJournalExpansion (journalExpansionId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/journal-expansion/${encodeURIComponent (journalExpansionId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getJournalEncountersIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/journal-encounter/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getJournalEncounter (journalEncounterId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/journal-encounter/${encodeURIComponent (journalEncounterId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async searchJournalEncounters ({ instanceName, orderBy, page }, options) {
    return this.get ({
      ... options,
      path: `/data/wow/search/journal-encounter`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params,
        [ `instance.name.${options?.locale ?? this.getDefaultLocale ()}` ]: instanceName,
        orderby: orderBy,
        _page: page
      }
    });
  }

  async getJournalInstancesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/journal-instance/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getJournalInstance (journalInstanceId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/journal-instance/${encodeURIComponent (journalInstanceId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getJournalInstanceMedia (journalInstanceId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/journal-instance/${encodeURIComponent (journalInstanceId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getModifiedCraftingsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/modified-crafting/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getModifiedCraftingCategoriesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/modified-crafting/category/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getModifiedCraftingCategory (categoryId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/modified-crafting/category/${encodeURIComponent (categoryId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getModifiedCraftingReagentSlotTypeIndex (categoryId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/modified-crafting/reagent-slot-type/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getModifiedCraftingReagentSlotType (slotTypeId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/modified-crafting/reagent-slot-type/${encodeURIComponent (slotTypeId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getMountsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/mount/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getMount (mountId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/mount/${encodeURIComponent (mountId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async searchMounts ({ name, orderBy, page }, options) {
    return this.get ({
      ... options,
      path: `/data/wow/search/mount`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params,
        [ `name.${options?.locale ?? this.getDefaultLocale ()}` ]: name,
        orderby: orderBy,
        _page: page
      }
    });
  }

  async getMythicKeystoneAffixesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/keystone-affix/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getMythicKeystoneAffix (keystoneAffixId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/keystone-affix/${encodeURIComponent (keystoneAffixId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getMythicKeystoneAffixMedia (keystoneAffixId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/keystone-affix/${encodeURIComponent (keystoneAffixId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getMythicKeystoneDungeonsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/mythic-keystone/dungeon/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getMythicKeystoneDungeon (dungeonId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/mythic-keystone/dungeon/${encodeURIComponent (dungeonId)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getMythicKeystoneIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/mythic-keystone/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getMythicKeystonePeriodsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/mythic-keystone/period/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getMythicKeystonePeriod (periodId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/mythic-keystone/period/${encodeURIComponent (periodId)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getMythicKeystoneSeasonsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/mythic-keystone/season/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getMythicKeystoneSeason (seasonId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/mythic-keystone/season/${encodeURIComponent (seasonId)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getMythicKeystoneLeaderboardsIndex (connectedRealmId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/connected-realm/${encodeURIComponent (connectedRealmId)}/mythic-leaderboard/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getMythicKeystoneLeaderboard (connectedRealmId, dungeonId, period, options) {
    return this.get ({
      ... options,
      path: `/data/wow/connected-realm/${encodeURIComponent (connectedRealmId)}/mythic-leaderboard/${encodeURIComponent (dungeonId)}/period/${encodeURIComponent (period)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getMythicRaidLeaderboard (raid, faction, options) {
    return this.get ({
      ... options,
      path: `/data/wow/leaderboard/hall-of-fame/${encodeURIComponent (raid)}/${encodeURIComponent (faction)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getPetsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/pet/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPet (petId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pet/${encodeURIComponent (petId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPetMedia (petId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/pet/${encodeURIComponent (petId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPetAbilitiesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/pet-ability/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPetAbility (petAbilityId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pet-ability/${encodeURIComponent (petAbilityId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPetAbilityMedia (petAbilityId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/pet-ability/${encodeURIComponent (petAbilityId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPvPTalentSlots (classId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/playable-class/${encodeURIComponent (classId)}/pvp-talent-slots`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPlayableSpecializationsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/playable-specialization/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPlayableSpecialization (specId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/playable-specialization/${encodeURIComponent (specId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPlayableSpecializationMedia (specId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/playable-specialization/${encodeURIComponent (specId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getProfessionsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/profession/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getProfession (professionId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/profession/${encodeURIComponent (professionId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getProfessionMedia (professionId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/profession/${encodeURIComponent (professionId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getProfessionSkillTier (professionId, skillTierId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/profession/${encodeURIComponent (professionId)}/skill-tier/${encodeURIComponent (skillTierId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getRecipe (recipeId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/recipe/${encodeURIComponent (recipeId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getRecipeMedia (recipeId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/recipe/${encodeURIComponent (recipeId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPvPLeaderboardsIndex (pvpSeasonId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-season/${encodeURIComponent (pvpSeasonId)}/pvp-leaderboard/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getPvPLeaderboard (pvpSeasonId, pvpBracket, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-season/${encodeURIComponent (pvpSeasonId)}/pvp-leaderboard/${encodeURIComponent (pvpBracket)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getPvPRewardsIndex (pvpSeasonId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-season/${encodeURIComponent (pvpSeasonId)}/pvp-reward/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getPvPTierMedia (pvpTierId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/pvp-tier/${encodeURIComponent (pvpTierId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPvPTiersIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-tier/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPvPTier (pvpTierId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-tier/${encodeURIComponent (pvpTierId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getQuestsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/quest/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getQuest (questId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/quest/${encodeURIComponent (questId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getQuestCategoriesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/quest/category/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getQuestCategory (questCategoryId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/quest/category/${encodeURIComponent (questCategoryId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getQuestAreasIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/quest/area/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getQuestArea (questAreaId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/quest/area/${encodeURIComponent (questAreaId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getQuestTypesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/quest/type/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getQuestType (questTypeId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/quest/type/${encodeURIComponent (questTypeId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getReputationFactionsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/reputation-faction/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getReputationFaction (reputationFactionId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/reputation-faction/${encodeURIComponent (reputationFactionId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getReputationTiersIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/reputation-tiers/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getReputationTiers (reputationTiersId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/reputation-tiers/${encodeURIComponent (reputationTiersId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getSpell (spellId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/spell/${encodeURIComponent (spellId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getSpellMedia (spellId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/spell/${encodeURIComponent (spellId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async searchSpells ({ name, orderBy, page }, options) {
    return this.get ({
      ... options,
      path: `/data/wow/search/spell`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params,
        [ `name.${options?.locale ?? this.getDefaultLocale ()}` ]: name,
        orderby: orderBy,
        _page: page
      }
    });
  }

  async getSpellMedia (spellId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/spell/${encodeURIComponent (spellId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getTalentsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/talent/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getTalent (talentId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/talent/${encodeURIComponent (talentId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPvPTalentsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-talent/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPvPTalent (pvpTalentId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-talent/${encodeURIComponent (pvpTalentId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getTechTalentTreeIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/tech-talent-tree/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getTechTalentTree (techTalentTreeId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/tech-talent-tree/${encodeURIComponent (techTalentTreeId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getTechTalentIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/tech-talent/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getTechTalent (techTalentId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/tech-talent/${encodeURIComponent (techTalentId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getTechTalentMedia (techTalentId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/tech-talent/${encodeURIComponent (techTalentId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getTitlesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/title/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getTitle (titleId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/title/${encodeURIComponent (titleId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  // Profile APIs

  async getCharacterAchievementsSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/achievements`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterAchievementStatistics (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/achievements/statistics`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterAppearanceSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/appearance`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterCollectionsIndex (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/collections`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterMountsCollectionSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/collections/mounts`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterPetsCollectionSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/collections/pets`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterEncountersSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/encounters`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterDungeons (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/encounters/dungeons`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterRaids (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/encounters/raids`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterEquipmentSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/equipment`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterHunterPetsSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/hunter-pets`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterMediaSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/character-media`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterMythicKeystoneProfileIndex (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/mythic-keystone-profile`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterMythicKeystoneSeasonDetails (realmSlug, characterName, seasonId, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/mythic-keystone-profile/season/${encodeURIComponent (seasonId)}`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterProfessionsSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/professions`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterProfileSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterProfileStatus (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/status`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterPvPBracketStatistics (realmSlug, characterName, pvpBracket, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/pvp-bracket/${encodeURIComponent (pvpBracket)}`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterPvPSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/pvp-summary`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterQuests (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/quests`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterCompletedQuests (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/quests/completed`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterReputationsSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/reputations`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterSoulbinds (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/soulbinds`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterSpecializationsSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/specializations`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterStatisticsSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/statistics`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCharacterTitlesSummary (realmSlug, characterName, options) {
    return this.get ({
      ... options,
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/titles`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }
}

module.exports = Api;