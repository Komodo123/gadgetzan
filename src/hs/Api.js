let Base = require ('../api');

class Api extends Base
{
  async searchCards ({ attack, classSlug, collectible, gameMode, health, keyword, manaCost, minionType, order, page, pageSize, rarity, set, sort, spellSchool, textFilter, type }, options) {
    return this.get ({
      path: `/hearthstone/cards`,
      params: {
        ... options,
        attack,
        class: classSlug,
        collectible,
        gameMode,
        health,
        keyword,
        manaCost,
        minionType,
        page,
        pageSize,
        rarity,
        set,
        spellSchool,
        sort: this._getSortString (sort, order),
        textFilter,
        type
      }
    });
  }

  async searchBattlegroundCards ({ attack, gameMode, health, keyword, minionType, order, page, pageSize, sort, textFilter, tier }, options) {
    return this.get ({
      path: `/hearthstone/cards`,
      params: {
        ... options,
        attack,
        gameMode,
        health,
        keyword,
        minionType,
        page,
        pageSize,
        sort: this._getSortString (sort, order),
        textFilter,
        tier
      }
    });
  }

  async searchMercenaryCards ({ attack, defaultMercenary, gameMode, health, minionType, mercenaryId, mercenaryRole, order, page, pageSize, sort, textFilter }, options) {
    return this.get ({
      path: `/hearthstone/cards`,
      params: {
        ... options,
        attack,
        defaultMercenary,
        gameMode,
        health,
        minionType,
        mercenaryId,
        mercenaryRole,
        page,
        pageSize,
        sort: this._getSortString (sort, order),
        textFilter
      }
    });
  }

  async getCard (idOrSlug, options) {
    return this.get ({
      path: `/hearthstone/cards/${encodeURIComponent (idOrSlug)}`,
      params
    });
  }

  async searchCardbacks ({ cardBackCategory, order, page, pageSize, sort, textFilter }, options) {
    return this.get ({
      path: `/hearthstone/cardbacks`,
      params: {
        ... options,
        cardBackCategory,
        sort: this._getSortString (sort, order),
        page,
        pageSize,
        textFilter
      }
    });
  }

  async getCardback (idOrSlug, options) {
    return this.get ({
      path: `/hearthstone/cardbacks/${encodeURIComponent (idOrSlug)}`,
      params
    });
  }

  async getDeckByCode ({ code, ids, hero }, options) {
    return this.get ({
      path: `/hearthstone/deck`,
      params: {
        ... options,
        code,
        ids,
        hero
      }
    });
  }

  async getAllMetadata (options) {
    return this.get ({
      path: `/hearthstone/metadata`,
      params: options
    });
  }

  async getSpecificMetadata (type, options) {
    return this.get ({
      path: `/hearthstone/metadata/${encodeURIComponent (type)}`,
      params: options
    });
  }

  _getSortString (sort, order) {
    if (sort && order) {
      return `${sort}:${order}`;
    } else if (sort) {
      return sort;
    } else {
      return null;
    }
  }
}

module.exports = Api;