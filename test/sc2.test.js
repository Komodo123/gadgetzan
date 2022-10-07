require ('dotenv/config');

let { Client } = require ('gadgetzan');

describe ('StarCraft II', () => {
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
      // test ('client.sc2.api.getStaticProfile', async () => {
      //   expect (await client.sc2.api.getStaticProfile (1)).toHaveProperty ('achievements');
      // }, 60 * 1000);

      // test ('client.sc2.api.getProfileMetaData', async () => {
      //   expect (await client.sc2.api.getProfileMetaData (1, 2, 3)).toHaveProperty ('achievements');
      // });

      // test ('client.sc2.api.getProfile', async () => {
      //   expect (await client.sc2.api.getProfile (1, 2, 3)).toHaveProperty ('achievements');
      // });

      // test ('client.sc2.api.getProfileLadderSummary', async () => {
      //   expect (await client.sc2.api.getProfileLadderSummary (1, 2, 3)).toHaveProperty ('achievements');
      // });

      // test ('client.sc2.api.getProfileLadder', async () => {
      //   expect (await client.sc2.api.getProfileLadderSummary (1, 2, 3)).toHaveProperty ('achievements');
      // });

      test ('client.sc2.api.getGrandmasterLeaderboard', async () => {
        expect (await client.sc2.api.getGrandmasterLeaderboard (1)).toHaveProperty ('ladderTeams');
      });

      test ('client.sc2.api.getSeason', async () => {
        expect (await client.sc2.api.getSeason (1)).toHaveProperty ('seasonId');
      });

      // test ('client.sc2.api.getPlayer', async () => {
      //   expect (await client.sc2.api.getPlayer (1)).toHaveProperty ('seqqqsonId');
      // });

      describe ('Legacy', () => {
        // test ('client.sc2.api.legacy.getProfile', async () => {
        //   expect (await client.sc2.api.legacy.getProfile (1, 2, 3)).toHaveProperty ('id');
        // });

        // test ('client.sc2.api.legacy.getLadders', async () => {
        //   expect (await client.sc2.api.legacy.getLadders (1, 2, 3)).toHaveProperty ('id');
        // });

        // test ('client.sc2.api.legacy.getMatchHistory', async () => {
        //   expect (await client.sc2.api.legacy.getMatchHistory (1, 2, 3)).toHaveProperty ('id');
        // });

        // test ('client.sc2.api.legacy.getLadder', async () => {
        //   expect (await client.sc2.api.legacy.getLadder (1, 2)).toHaveProperty ('id');
        // });

        test ('client.sc2.api.legacy.getAchievements', async () => {
          expect (await client.sc2.api.legacy.getAchievements (1, 2, 3)).toHaveProperty ('achievements');
        });

        test ('client.sc2.api.legacy.getRewards', async () => {
          expect (await client.sc2.api.legacy.getRewards (1)).toHaveProperty ('portraits');
        });
      });
    });

    describe ('Game Data', () => {

    // test ('client.sc2.api.getLeagueData', async () => {
    //   expect (await client.sc2.api.getLeagueData (37, 201, 0, 6)).toHaveProperty ('tier');
    // });

    });
  });
});