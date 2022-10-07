require ('dotenv/config');

let { Client } = require ('gadgetzan');

describe ('Diablo III', () => {
  let client;

  beforeAll (() => {
    client = new Client (
      process.env.BATTLE_NET_CLIENT_ID,
      process.env.BATTLE_NET_CLIENT_SECRET,

      {
        region: process.env.BATTLE_NET_REGION,
        cache: false,
        throttle: 25
      }
    );
  });

  afterEach (async () => {
    await client.cache.save ();
  });

  describe ('High-Level API', () => {
    
  });

  describe ('Low-Level API', () => {
    describe ('Community', () => {
      test ('client.d3.api.getActIndex', async () => {
        expect (await client.d3.api.getActIndex ()).toHaveProperty ('acts');
      });

      test ('client.d3.api.getAct', async () => {
        expect (await client.d3.api.getAct (1)).toHaveProperty ('name');
      });

      test ('client.d3.api.getArtisan', async () => {
        expect (await client.d3.api.getArtisan ('blacksmith')).toHaveProperty ('name');
      });

      test ('client.d3.api.getRecipe', async () => {
        expect (await client.d3.api.getRecipe ('blacksmith', 'apprentice-flamberge')).toHaveProperty ('name');
      });

      test ('client.d3.api.getFollower', async () => {
        expect (await client.d3.api.getFollower ('templar')).toHaveProperty ('name');
      });

      test ('client.d3.api.getCharacterClass', async () => {
        expect (await client.d3.api.getCharacterClass ('barbarian')).toHaveProperty ('name');
      });

      test ('client.d3.api.getApiSkill', async () => {
        expect (await client.d3.api.getCharacterClass ('barbarian', 'bash')).toHaveProperty ('icon');
      });

      test ('client.d3.api.getItemTypesIndex', async () => {
        let itemTypes = await client.d3.api.getItemTypesIndex ();
        
        for (let itemType of itemTypes) {
          expect (itemType).toHaveProperty ('name');
        }
      });

      test ('client.d3.api.getItemType', async () => {
        let itemTypes = await client.d3.api.getItemType ('sword2h');
        
        for (let itemType of itemTypes) {
          expect (itemType).toHaveProperty ('name');
        }
      });

      test ('client.d3.api.getItem', async () => {
        expect (await client.d3.api.getItem ('corrupted-ashbringer-Unique_Sword_2H_104_x1')).toHaveProperty ('id');
      });

      test ('client.d3.api.getApiAccount', async () => {
        expect (await client.d3.api.getApiAccount ('Nutnhoney#1641')).toHaveProperty ('battleTag');
      });

      test ('client.d3.api.getApiHero', async () => {
        expect (await client.d3.api.getApiHero ('Nutnhoney#1641', '143039388')).toHaveProperty ('id');
      });

      test ('client.d3.api.getApiDetailedHeroItems', async () => {
        expect (await client.d3.api.getApiDetailedHeroItems ('Nutnhoney#1641', '143039388')).toHaveProperty ('head');
      });

      test ('client.d3.api.getApiDetailedFollowerItems', async () => {
        expect (await client.d3.api.getApiDetailedFollowerItems ('Nutnhoney#1641', '143039388')).toHaveProperty ('templar');
      });
    });

    describe ('Game Data', () => {
      test ('client.d3.api.getSeasonIndex', async () => {
        expect (await client.d3.api.getSeasonIndex ()).toHaveProperty ('season');
      });

      test ('client.d3.api.getSeason', async () => {
        expect (await client.d3.api.getSeason (1)).toHaveProperty ('season_id');
      });

      test ('client.d3.api.getSeasonLeaderboard', async () => {
        expect (await client.d3.api.getSeasonLeaderboard (1, 'achievement-points')).toHaveProperty ('achievement_points');
      });

      test ('client.d3.api.getEraIndex', async () => {
        expect (await client.d3.api.getEraIndex ()).toHaveProperty ('era');
      });

      test ('client.d3.api.getEra', async () => {
        expect (await client.d3.api.getEra (1)).toHaveProperty ('leaderboard');
      });

      test ('client.d3.api.getEraLeaderboard', async () => {
        expect (await client.d3.api.getEraLeaderboard (1, 'rift-barbarian')).toHaveProperty ('row');
      });
    });
  });
});