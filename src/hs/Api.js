let Base = require ('../api');

class Api extends Base
{
  async searchCards ({ attack, classSlug, collectible, gameMode, health, keyword, manaCost, minionType, order, page, pageSize, rarity, set, sort, spellSchool, textFilter, type }, options) {
    return this.get ({
      ... options,
      path: `/hearthstone/cards`,
      params: {
        ... options?.params,
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
      ... options,
      path: `/hearthstone/cards`,
      params: {
        ... options?.params,
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
      ... options,
      path: `/hearthstone/cards`,
      params: {
        ... options?.params,
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
      ... options,
      path: `/hearthstone/cards/${encodeURIComponent (idOrSlug)}`,
      params
    });
  }

  async searchCardbacks ({ cardBackCategory, order, page, pageSize, sort, textFilter }, options) {
    return this.get ({
      ... options,
      path: `/hearthstone/cardbacks`,
      params: {
        ... options?.params,
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
      ... options,
      path: `/hearthstone/cardbacks/${encodeURIComponent (idOrSlug)}`,
      params
    });
  }

  async getDeckByCode ({ code, ids, hero }, options) {
    return this.get ({
      ... options,
      path: `/hearthstone/deck`,
      params: {
        ... options?.params,
        code,
        ids,
        hero
      }
    });
  }

  async getAllMetadata (options) {
    return this.get ({
      ... options,
      path: `/hearthstone/metadata`,
      params: options?.params
    });
  }

  async getSpecificMetadata (type, options) {
    return this.get ({
      ... options,
      path: `/hearthstone/metadata/${encodeURIComponent (type)}`,
      params: options?.params
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