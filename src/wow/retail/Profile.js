let Api = require ('../../Api');

class Profile extends Api
{
  async getAccountProfileSummary (options) {
    return this.get ({
      path: `/profile/user/wow`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getProtectedCharacterProfileSummary (realmId, characterId, options) {
    return this.get ({
      path: `/profile/user/wow/protected-character/${encodeURIComponent (realmId)}-${encodeURIComponent (characterId)}`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getAccountCollectionsIndex (options) {
    return this.get ({
      path: `/profile/user/wow/collections`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getAccountMountsCollectionSummary (options) {
    return this.get ({
      path: `/profile/user/wow/collections/mounts`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getAccountPetsCollectionSummary (options) {
    return this.get ({
      path: `/profile/user/wow/collections/pets`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterAchievementsSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/achievements`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterAchievementStatistics (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/achievements/statistics`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterAppearanceSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/appearance`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterCollectionsIndex (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/collections`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterMountsCollectionSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/collections/mounts`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterPetsCollectionSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/collections/pets`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterEncountersSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/encounters`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterDungeons (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/encounters/dungeons`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterRaids (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/encounters/raids`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterEquipmentSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/equipment`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterHunterPetsSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/hunter-pets`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterMediaSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/character-media`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterMythicKeystoneProfileIndex (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/mythic-keystone-profile`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getMythicKeystoneSeasonDetails (realmSlug, characterName, seasonId, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/mythic-keystone-profile/season/${encodeURIComponent (seasonId)}`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterProfessionsSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/professions`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterProfileSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterProfileStatus (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/status`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterPvPBracketStatistics (realmSlug, characterName, pvpBracket, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/pvp-bracket/${encodeURIComponent (pvpBracket)}`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterPvPSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/pvp-summary`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterQuests (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/quests`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterCompletedQuests (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/quests/completed`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterReputationsSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/reputations`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterSoulbinds (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/soulbinds`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterSpecializationsSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/specializations`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterStatisticsSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/statistics`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getCharacterTitlesSummary (realmSlug, characterName, options) {
    return this.get ({
      path: `/profile/wow/character/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/titles`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getGuild (realmSlug, characterName, options) {
    return this.get ({
      path: `/data/wow/guild/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getGuildActivity (realmSlug, characterName, options) {
    return this.get ({
      path: `/data/wow/guild/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/activity`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getGuildAchievements (realmSlug, characterName, options) {
    return this.get ({
      path: `/data/wow/guild/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/achievements`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }

  async getGuildRoster (realmSlug, characterName, options) {
    return this.get ({
      path: `/data/wow/guild/${encodeURIComponent (realmSlug)}/${encodeURIComponent (characterName)}/roster`,
      params: {
        namespace: this.getNamespace ('profile'),
        ... options
      }
    });
  }
}

module.exports = Profile;