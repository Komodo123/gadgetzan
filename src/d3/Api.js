let Base = require ('../api');

class Api extends Base
{
  // Community APIs

  async getActIndex (options) {
    return this.get ({
      ... options,
      path: `/d3/data/act`,
      params: options?.params
    });
  }

  async getAct (actId, options) {
    return this.get ({
      ... options,
      path: `/d3/data/act/${encodeURIComponent (actId)}`,
      params: options?.params
    });
  }

  async getArtisan (artisanSlug, options) {
    return this.get ({
      ... options,
      path: `/d3/data/artisan/${encodeURIComponent (artisanSlug)}`,
      params: options?.params
    });
  }

  async getRecipe (artisanSlug, recipeSlug, options) {
    return this.get ({
      ... options,
      path: `/d3/data/artisan/${encodeURIComponent (artisanSlug)}/recipe/${encodeURIComponent (recipeSlug)}`,
      params: options?.params
    });
  }

  async getFollower (followerSlug, options) {
    return this.get ({
      ... options,
      path: `/d3/data/artisan/${encodeURIComponent (followerSlug)}`,
      params: options?.params
    });
  }

  async getCharacterClass (classSlug, options) {
    return this.get ({
      ... options,
      path: `/d3/data/hero/${encodeURIComponent (classSlug)}`,
      params: options?.params
    });
  }

  async getApiSkill (classSlug, skillSlug, options) {
    return this.get ({
      ... options,
      path: `/d3/data/artisan/${encodeURIComponent (classSlug)}/skill/${encodeURIComponent (skillSlug)}`,
      params: options?.params
    });
  }

  async getItemTypeIndex (options) {
    return this.get ({
      ... options,
      path: `/d3/data/item-type`,
      params: options?.params
    });
  }

  async getItemType (itemTypeSlug, options) {
    return this.get ({
      ... options,
      path: `/d3/data/artisan/${encodeURIComponent (itemTypeSlug)}`,
      params: options?.params
    });
  }

  async getItem (itemSlugAndId, options) {
    return this.get ({
      ... options,
      path: `/d3/data/item/${encodeURIComponent (itemSlugAndId)}`,
      params: options?.params
    })
  }

  async getApiAccount (battleTag, options) {
    return this.get ({
      ... options,
      path: `/d3/profile/${encodeURIComponent (battleTag)}`,
      params: options?.params
    });
  }

  async getApiHero (battleTag, heroId, options) {
    return this.get ({
      ... options,
      path: `/d3/profile/${encodeURIComponent (battleTag)}/hero/${encodeURIComponent (heroId)}`,
      params: options?.params
    });
  }

  async getApiDetailedHeroItems (battleTag, options) {
    return this.get ({
      ... options,
      path: `/d3/profile/${encodeURIComponent (battleTag)}/hero/${encodeURIComponent (heroId)}/items`,
      params: options?.params
    });
  }

  async getApiDetailedFollowerItems (battleTag, options) {
    return this.get ({
      ... options,
      path: `/d3/profile/${encodeURIComponent (battleTag)}/hero/${encodeURIComponent (heroId)}/follower-items`,
      params: options?.params
    });
  }

  // Game Data APIs

  async getSeasonIndex (options) {
    return this.get ({
      ... options,
      path: `/data/d3/season`,
      params: options?.params
    });
  }

  async getSeason (seasonId, options) {
    return this.get ({
      ... options,
      path: `/data/d3/season/${encodeURIComponent (seasonId)}`,
      params: options?.params
    });
  }

  async getSeasonLeaderboard (seasonId, leaderboardId, options) {
    return this.get ({
      ... options,
      path: `/data/d3/season/${encodeURIComponent (seasonId)}/leaderboard/${encodeURIComponent (leaderboardId)}`,
      params: options?.params
    });
  }

  async getEraIndex (options) {
    return this.get ({
      ... options,
      path: `/data/d3/era`,
      params: options?.params
    });
  }

  async getEra (eraId, options) {
    return this.get ({
      ... options,
      path: `/data/d3/era/${encodeURIComponent (eraId)}`,
      params: options?.params
    });
  }

  async getEraLeaderboard (eraId, leaderboardId, options) {
    return this.get ({
      ... options,
      path: `/data/d3/era/${encodeURIComponent (eraId)}/leaderboard/${encodeURIComponent (leaderboardId)}`,
      params: options?.params
    });
  }
}

module.exports = Api;