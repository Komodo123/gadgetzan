require ('dotenv/config');

let { Client } = require ('gadgetzan');
let { getOAuthAccessToken } = require ('./util');

describe ('Client Credentials Flow', () => {
  let client;

  beforeAll (async () => {
    client = new Client (
      process.env.BATTLE_NET_CLIENT_ID,
      process.env.BATTLE_NET_CLIENT_SECRET,

      {
        region: process.env.BATTLE_NET_REGION,
        cache: false,
        throttle: 25
      }
    );

    let accessToken = await getOAuthAccessToken ();

    client.setAccessToken (accessToken);
  }, 60 * 1000 * 10);

  describe ('StarCraft II', () => {
    describe ('High-Level API', () => {
      
    });
  
    describe ('Low-Level API', () => {
      describe ('Community', () => {
        describe ('Legacy', () => {
          test ('test', () => {});
        });
      });
    });
  });
});