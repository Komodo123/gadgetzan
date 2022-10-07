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
    test ('client.hs.api.searchCards', async () => {
      expect (await client.hs.api.searchCards ()).toHaveProperty ('cards');
    });

    test ('client.hs.api.searchCards (Filtered)', async () => {
      expect (await client.hs.api.searchCards ({
        set: 'rise-of-shadows',
        class: 'mage',
        manaCost: 10,
        attack: 4,
        health: 10,
        collectible: 1,
        rarity: 'legendary',
        type: 'minion',
        minionType: 'dragon',
        keyword: 'battlecry',
        textFilter: 'kalecgos',
        gameMode: 'constructed',
        page: 1,
        pageSize: 5,
        sort: 'name:asc'
      })).toHaveProperty ('cards');
    });

    test ('client.hs.api.searchBattlegroundCards', async () => {
      expect (await client.hs.api.searchBattlegroundCards ({
        gameMode: 'battlegrounds',
        tier: 'hero,3'
      })).toHaveProperty ('cards');
    });

    test ('client.hs.api.searchMercenaryCards', async () => {
      expect (await client.hs.api.searchMercenaryCards ({
        gameMode: 'mercenaries'
      })).toHaveProperty ('cards');
    });

    test ('client.hs.api.getCard', async () => {
      expect (await client.hs.api.getCard ('52119-arch-villain-rafaam')).toHaveProperty ('id');
    });

    test ('client.hs.api.searchCardbacks', async () => {
      expect (await client.hs.api.searchCardbacks ({ sort: 'dateAdded:desc' })).toHaveProperty ('cardBacks');
    });

    test ('client.hs.api.getCardback', async () => {
      expect (await client.hs.api.getCardback ('155-pizza-stone')).toHaveProperty ('id');
    });

    test ('client.hs.api.getDeck', async () => {
      expect (await client.hs.api.getDeck ({ code: 'AAECAQcG+wyd8AKS+AKggAOblAPanQMMS6IE/web8wLR9QKD+wKe+wKz/AL1gAOXlAOalAOSnwMA' })).toHaveProperty ('deckCode');
    });

    test ('client.hs.api.getDeck (List)', async () => {
      expect (await client.hs.api.getDeck ({ ids: '906,1099,1363,1367,46706,48099,48759,49184,50071,50278,51714,52109,52632,52715,53409,53413,53756,53969,54148,54425,54431,54874,54898,54917,55166,55245,55438,55441,55907,57416' })).toHaveProperty ('deckCode');
    });

    test ('client.hs.api.getAllMetadata', async () => {
      expect (await client.hs.api.getAllMetadata ()).toHaveProperty ('sets');
    });

    test ('client.hs.api.getMetadata', async () => {
      let metadata = await client.hs.api.getMetadata ('sets');

      for (let meta of metadata) {
        expect (meta).toHaveProperty ('id');
      }
    });
  });
});