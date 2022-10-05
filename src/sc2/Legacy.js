let Base = require ('../Api');

class Legacy extends Base
{
  async getProfile (regionId, realmId, profileId, options) {
    return this.get ({
      path: `/sc2/legacy/profile/${encodeURIComponent (regionId)}/${encodeURIComponent (realmId)}/${encodeURIComponent (profileId)}`,
      params: options
    });
  }

  async getLadders (regionId, realmId, profileId, options) {
    return this.get ({
      path: `/sc2/legacy/profile/${encodeURIComponent (regionId)}/${encodeURIComponent (realmId)}/${encodeURIComponent (profileId)}/ladder`,
      params: options
    });
  }

  async getMatchHistory (regionId, realmId, profileId, options) {
    return this.get ({
      path: `/sc2/legacy/profile/${encodeURIComponent (regionId)}/${encodeURIComponent (realmId)}/${encodeURIComponent (profileId)}/matches`,
      params: options
    });
  }

  async getLadder (regionId, ladderId, options) {
    return this.get ({
      path: `/sc2/legacy/ladder/${encodeURIComponent (regionId)}/${encodeURIComponent (ladderId)}`,
      params: options
    });
  }

  async getAchievements (regionId, options) {
    return this.get ({
      path: `/sc2/legacy/data/achievements/${encodeURIComponent (regionId)}`,
      params: options
    });
  }

  async getRewards (regionId, options) {
    return this.get ({
      path: `/sc2/legacy/data/rewards/${encodeURIComponent (regionId)}`,
      params: options
    });
  }
}

module.exports = Legacy;