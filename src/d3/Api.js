let Base = require ('../api');

class Api extends Base
{
  // Community APIs

  async getActIndex (options) {
    return this.get ({
      path: `/d3/data/act`,
      params: options
    });
  }

  async getAct (actId, options) {
    return this.get ({
      path: `/d3/data/act/${encodeURIComponent (actId)}`,
      params: options
    });
  }

  async getArtisan (artisanSlug, options) {
    return this.get ({
      path: `/d3/data/artisan/${encodeURIComponent (artisanSlug)}`,
      params: options
    });
  }

  async getRecipe (artisanSlug, recipeSlug, options) {
    return this.get ({
      path: `/d3/data/artisan/${encodeURIComponent (artisanSlug)}/recipe/${encodeURIComponent (recipeSlug)}`,
      params: options
    });
  }

  async getFollower (followerSlug, options) {
    return this.get ({
      path: `/d3/data/artisan/${encodeURIComponent (followerSlug)}`,
      params: options
    });
  }

  async getCharacterClass (classSlug, options) {
    return this.get ({
      path: `/d3/data/hero/${encodeURIComponent (classSlug)}`,
      params: options
    });
  }

  async getApiSkill (classSlug, skillSlug, options) {
    return this.get ({
      path: `/d3/data/artisan/${encodeURIComponent (classSlug)}/skill/${encodeURIComponent (skillSlug)}`,
      params: options
    });
  }

  async getItemTypeIndex (options) {
    return this.get ({
      path: `/d3/data/item-type`,
      params: options
    });
  }

  async getItemType (itemTypeSlug, options) {
    return this.get ({
      path: `/d3/data/artisan/${encodeURIComponent (itemTypeSlug)}`,
      params: options
    });
  }

  async getItem (itemSlugAndId, options) {
    return this.get ({
      path: `/d3/data/item/${encodeURIComponent (itemSlugAndId)}`,
      params: options
    })
  }

  async getApiAccount (battleTag, options) {
    return this.get ({
      path: `/d3/profile/${encodeURIComponent (battleTag)}`,
      params: options
    });
  }

  async getApiHero (battleTag, heroId, options) {
    return this.get ({
      path: `/d3/profile/${encodeURIComponent (battleTag)}/hero/${encodeURIComponent (heroId)}`,
      params: options
    });
  }

  async getApiDetailedHeroItems (battleTag, options) {
    return this.get ({
      path: `/d3/profile/${encodeURIComponent (battleTag)}/hero/${encodeURIComponent (heroId)}/items`,
      params: options
    });
  }

  async getApiDetailedFollowerItems (battleTag, options) {
    return this.get ({
      path: `/d3/profile/${encodeURIComponent (battleTag)}/hero/${encodeURIComponent (heroId)}/follower-items`,
      params: options
    });
  }

  // Game Data APIs

  async getSeasonIndex (options) {
    return this.get ({
      path: `/data/d3/season`,
      params: options
    });
  }

  async getSeason (seasonId, options) {
    return this.get ({
      path: `/data/d3/season/${encodeURIComponent (seasonId)}`,
      params: options
    });
  }

  async getSeasonLeaderboard (seasonId, leaderboardId, options) {
    return this.get ({
      path: `/data/d3/season/${encodeURIComponent (seasonId)}/leaderboard/${encodeURIComponent (leaderboardId)}`,
      params: options
    });
  }

  async getEraIndex (options) {
    return this.get ({
      path: `/data/d3/era`,
      params: options
    });
  }

  async getEra (eraId, options) {
    return this.get ({
      path: `/data/d3/era/${encodeURIComponent (eraId)}`,
      params: options
    });
  }

  async getEraLeaderboard (eraId, leaderboardId, options) {
    return this.get ({
      path: `/data/d3/era/${encodeURIComponent (eraId)}/leaderboard/${encodeURIComponent (leaderboardId)}`,
      params: options
    });
  }
}

module.exports = Api;