let Base = require ('../Api');

class Api extends Base
{
  _getNamespace (type) {
    return type;
  }

  async getConnectedRealmsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/connected-realm/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getConnectedRealm (connectedRealmId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/connected-realm/${encodeURIComponent (connectedRealmId)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async searchConnectedRealms ({ status, timezone, orderBy, page }, options) {
    return this.get ({
      ... options,
      path: `/data/wow/search/connected-realm`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params,
        'status.type': status, // i.e. UP or DOWN
        'realms.timezone': timezone, // e.x. America/New_York
        'orderby': orderBy,
        '_page': page
      }
    })
  }

  async getCreatureFamiliesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/creature-family/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getCreatureFamily (creatureFamilyId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/creature-family/${encodeURIComponent (creatureFamilyId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getCreatureTypesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/creature-type/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getCreatureType (creatureTypeId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/creature-type/${encodeURIComponent (creatureTypeId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getCreature (creatureId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/creature/${encodeURIComponent (creatureId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async searchCreatures ({ name, orderBy, page }, options) {
    return this.get ({
      ... options,
      path: `/data/wow/search/creature`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params,
        [ `name.${options?.locale || this.getDefaultLocale ()}` ]: name,
        orderby: orderBy,
        _page: page
      }
    });
  }

  async getCreatureDisplayMedia (creatureDisplayId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/creature-display/${encodeURIComponent (creatureDisplayId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getCreatureFamilyMedia (creatureFamilyId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/creature-family/${encodeURIComponent (creatureFamilyId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getGuildCrestComponentsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/guild-crest/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getGuildCrestBorderMedia (borderId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/guild-crest/border/${encodeURIComponent (borderId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getGuildCrestEmblemMedia (emblemId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/guild-crest/emblem/${encodeURIComponent (emblemId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getItemClassesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/item-class/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getItemClass (itemClassId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/item-class/${encodeURIComponent (itemClassId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getItemSubclass (itemClassId, itemSubclassId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/item-class/${encodeURIComponent (itemClassId)}/item-subclass/${encodeURIComponent (itemSubclassId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getItem (itemId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/item/${encodeURIComponent (itemId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getItemMedia (itemId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/item/${encodeURIComponent (itemId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async searchItems ({ id, name, orderBy, page }, options) {
    return this.get ({
      ... options,
      path: `/data/wow/search/item`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params,
        id,
        [ `name.${options?.locale || this.getDefaultLocale ()}` ]: name,
        orderby: orderBy,
        _page: page
      }
    });
  }

  async searchMedia ({ tags, orderBy, page }, options) {
    return this.get ({
      ... options,
      path: `/data/wow/search/media`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params,
        tags,
        orderby: orderBy,
        _page: page
      }
    });
  }

  async getPlayableClassesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/playable-class/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPlayableClass (classId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/playable-class/${encodeURIComponent (classId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPlayableClassMedia (playableClassId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/media/playable-class/${encodeURIComponent (playableClassId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPlayableRacesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/playable-race/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPlayableRace (playableRaceId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/playable-race/${encodeURIComponent (playableRaceId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPowerTypesIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/power-type/index`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPowerType (powerTypeId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/power-type/${encodeURIComponent (powerTypeId)}`,
      params: {
        namespace: this._getNamespace ('static'),
        ... options?.params
      }
    });
  }

  async getPvPSeasonsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-season/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getPvPSeason (pvpSeasonId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-season/${encodeURIComponent (pvpSeasonId)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getRealmsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/realm/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getRealm (realmSlug, options) {
    return this.get ({
      ... options,
      path: `/data/wow/realm/${encodeURIComponent (realmSlug)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async searchRealms ({ timezone, orderBy, page }, options) {
    return this.get ({
      ... options,
      path: `/data/wow/search/realm`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params,
        timezone,
        orderby: orderBy,
        _page: page
      }
    });
  }

  async getRegion (regionId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/region/${encodeURIComponent (regionId)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getRegionsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/region/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getRegion (regionId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/region/${encodeURIComponent (regionId)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }
  
  async getWoWTokenIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/token/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params,
        region: 'cn'
      }
    });
  }
}

module.exports = Api;