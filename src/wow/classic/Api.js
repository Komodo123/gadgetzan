let Base = require ('../Api');

class Api extends Base
{
  _getNamespace (type) {
    return `${type}-classic`
  }

  async getAuctionHouseIndex (connectedRealmId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/connected-realm/${encodeURIComponent (connectedRealmId)}/auctions/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      },
    });
  }

  async getAuctions (connectedRealmId, auctionHouseId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/connected-realm/${encodeURIComponent (connectedRealmId)}/auctions/${encodeURIComponent (auctionHouseId)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      },
      cache: false
    });
  }

  async getPvPRegionsIndex (options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-region/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getPvPRegionalSeasonsIndex (pvpRegionId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-region/${encodeURIComponent (pvpRegionId)}/pvp-season/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getPvPRegionalSeason (pvpRegionId, pvpSeasonId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-region/${encodeURIComponent (pvpRegionId)}/pvp-season/${encodeURIComponent (pvpSeasonId)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getPvPLeaderboardsIndex (pvpRegionId, pvpSeasonId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-region/${encodeURIComponent (pvpRegionId)}/pvp-season/${encodeURIComponent (pvpSeasonId)}/pvp-leaderboard/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getPvPLeaderboard (pvpRegionId, pvpSeasonId, pvpBracket, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-region/${encodeURIComponent (pvpRegionId)}/pvp-season/${encodeURIComponent (pvpSeasonId)}/pvp-leaderboard/${encodeURIComponent (pvpBracket)}`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }

  async getPvPLeaderboardsIndex (pvpRegionId, pvpSeasonId, options) {
    return this.get ({
      ... options,
      path: `/data/wow/pvp-region/${encodeURIComponent (pvpRegionId)}/pvp-season/${encodeURIComponent (pvpSeasonId)}/pvp-reward/index`,
      params: {
        namespace: this._getNamespace ('dynamic'),
        ... options?.params
      }
    });
  }
}

module.exports = Api;