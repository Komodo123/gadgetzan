let Base = require ('../api');

class Api extends Base
{
  async searchCards (filters, options) {
    return this.get ({
      ... options,
      path: `/hearthstone/cards`,
      params: {
        ... options?.params,
        attack: filters?.attack,
        class: filters?.classSlug,
        collectible: filters?.collectible,
        gameMode: filters?.gameMode,
        health: filters?.health,
        keyword: filters?.keyword,
        manaCost: filters?.manaCost,
        minionType: filters?.minionType,
        page: filters?.page,
        pageSize: filters?.pageSize,
        rarity: filters?.rarity,
        set: filters?.set,
        spellSchool: filters?.spellSchool,
        sort: this._getSortString (filters?.sort, filters?.order),
        textFilter: filters?.textFilter,
        type: filters?.type
      }
    });
  }

  async searchBattlegroundCards (filters, options) {
    return this.get ({
      ... options,
      path: `/hearthstone/cards`,
      params: {
        ... options?.params,
        attack: filters?.attack,
        gameMode: filters?.gameMode,
        health: filters?.health,
        keyword: filters?.keywords,
        minionType: filters?.minionType,
        page: filters?.page,
        pageSize: filters?.pageSize,
        sort: this._getSortString (filters?.sort, filters?.order),
        textFilter: filters?.textFilter,
        tier: filters?.tier
      }
    });
  }

  async searchMercenaryCards (filters, options) {
    return this.get ({
      ... options,
      path: `/hearthstone/cards`,
      params: {
        ... options?.params,
        attack: filters?.attack,
        defaultMercenary: filters?.defaultMercenary,
        gameMode: filters?.gameMode,
        health: filters?.health,
        minionType: filters?.minionType,
        mercenaryId: filters?.mercenaryId,
        mercenaryRole: filters?.mercenaryRole,
        page: filters?.page,
        pageSize: filters?.pageSize,
        sort: this._getSortString (filters?.sort, filters?.order),
        textFilter: filters?.textFilter
      }
    });
  }

  async getCard (idOrSlug, options) {
    return this.get ({
      ... options,
      path: `/hearthstone/cards/${encodeURIComponent (idOrSlug)}`
    });
  }

  async searchCardbacks (filters, options) {
    return this.get ({
      ... options,
      path: `/hearthstone/cardbacks`,
      params: {
        ... options?.params,
        cardBackCategory: filters?.cardBackCategory,
        sort: this._getSortString (filters?.sort, filters?.order),
        page: filters?.page,
        pageSize: filters?.pageSize,
        textFilter: filters?.textFilter
      }
    });
  }

  async getCardback (idOrSlug, options) {
    return this.get ({
      ... options,
      path: `/hearthstone/cardbacks/${encodeURIComponent (idOrSlug)}`
    });
  }

  async getDeck ({ code, ids, hero }, options) {
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

  async getMetadata (type, options) {
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