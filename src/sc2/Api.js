let Base = require ('../Api');
let Legacy = require ('./Legacy');

class Api extends Base
{
  // Community APIs

  constructor (client) {
    super (client);

    this.legacy = new Legacy (client);
  }

  async getStaticProfile (regionId, options) {
    return this.get ({
      ... options,
      path: `/sc2/static/profile/${encodeURIComponent (regionId)}`,
      params: options?.params
    });
  }

  async getProfileMetaData (regionId, realmId, profileId, options) {
    return this.get ({
      ... options,
      path: `/sc2/metadata/profile/${encodeURIComponent (regionId)}/${encodeURIComponent (realmId)}/${encodeURIComponent (profileId)}`,
      params: options?.params
    });
  }

  async getProfile (regionId, realmId, profileId, options) {
    return this.get ({
      ... options,
      path: `/sc2/profile/${encodeURIComponent (regionId)}/${encodeURIComponent (realmId)}/${encodeURIComponent (profileId)}`,
      params: options?.params
    });
  }

  async getProfileLadderSummary (regionId, realmId, profileId, options) {
    return this.get ({
      ... options,
      path: `/sc2/profile/${encodeURIComponent (regionId)}/${encodeURIComponent (realmId)}/${encodeURIComponent (profileId)}/ladder/summary`,
      params: options?.params
    });
  }

  async getProfileLadder (regionId, realmId, profileId, ladderId, options) {
    return this.get ({
      ... options,
      path: `/sc2/profile/${encodeURIComponent (regionId)}/${encodeURIComponent (realmId)}/${encodeURIComponent (profileId)}/ladder/${encodeURIComponent (ladderId)}`,
      params: options?.params
    });
  }

  async getGrandmasterLeaderboard (regionId, options) {
    return this.get ({
      ... options,
      path: `/sc2/ladder/grandmaster/${encodeURIComponent (regionId)}`,
      params: options?.params
    });
  }

  async getSeason (regionId, options) {
    return this.get ({
      ... options,
      path: `/sc2/ladder/season/${encodeURIComponent (regionId)}`,
      params: options?.params
    });
  }

  async getPlayer (accountId, options) {
    return this.get ({
      ... options,
      path: `/sc2/player/${encodeURIComponent (accountId)}`,
      params: options?.params
    });
  }

  // Game Data APIs

  async getLeagueData (seasonId, queueId, teamType, leagueId, options) {
    return this.get ({
      ... options,
      path: `/data/sc2/league/${encodeURIComponent (seasonId)}/${encodeURIComponent (queueId)}/${encodeURIComponent (teamType)}/${encodeURIComponent (leagueId)}`,
      params: options?.params
    });
  }
}

module.exports = Api;