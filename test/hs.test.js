require ('dotenv/config');

let { Client } = require ('gadgetzan');

describe ('Hearthstone', () => {
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
    test ('', () => {});
  });
});