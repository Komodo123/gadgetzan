let { Client } = require ('battle.net');

let AuctionHouse = require ('../src/wow/model/AuctionHouse');
let ConnectedRealm = require ('../src/wow/model/ConnectedRealm');
let Item = require ('../src/wow/model/Item');
let Realm = require ('../src/wow/model/Realm');
let Region = require ('../src/wow/model/Region');

describe ('World of Warcraft', () => {

  let client;

  beforeAll (() => {
    client = new Client (
      process.env.BATTLE_NET_CLIENT_ID,
      process.env.BATTLE_NET_CLIENT_SECRET,

      {
        region: process.env.BATTLE_NET_REGION,
        // cache: false
      }
    );
  });

  afterEach (async () => {
    await client.cache.save ();
  });

  describe ('High-Level API', () => {

    describe ('Retail', () => {

      test ('client.wow.retail.getConnectedRealms', async () => {
        let connectedRealms = await client.wow.retail.getConnectedRealms ();

        for (let connectedRealm of connectedRealms) {
          expect (connectedRealm).toBeInstanceOf (ConnectedRealm);
        }
      }, 60 * 10 * 1000);

      test ('client.wow.retail.getConnectedRealm', async () => {
        let connectedRealm = await client.wow.retail.getConnectedRealm ('Grobbulus');
        expect (connectedRealm).toBeNull ();

        connectedRealm = await client.wow.retail.getConnectedRealm ('Bladefist');
        expect (connectedRealm).toBeInstanceOf (ConnectedRealm);
      });

      test ('client.wow.retail.getItem', async () => {
        let item = await client.wow.retail.getItem ('Thunderfury');

        expect (item).toBeInstanceOf (Item);
        expect (item.name).toEqual ('Thunderfury, Blessed Blade of the Windseeker');

        item = await client.wow.retail.getItem ('D.N.E');

        expect (item).toBeNull ();
      });

      test ('client.wow.retail.getItemById', async () => {
        let item = await client.wow.retail.getItemById (25);

        expect (item).toBeInstanceOf (Item);
        expect (item.name).toEqual ('Worn Shortsword');

        item = await client.wow.retail.getItemById (1);

        expect (item).toBeNull ();
      });

      test ('client.wow.retail.getItems', async () => {
        let items = await client.wow.retail.getItems ('Thunderfury');

        for await (let item of items) {
          expect (item).toBeInstanceOf (Item);
        }
      });

      test ('client.wow.retail.getRegions', async () => {
        let regions = await client.wow.retail.getRegions ();

        for (let region of regions) {
          expect (region).toBeInstanceOf (Region);
        }

        regions = await client.wow.retail.getRegions ('eu');

        for (let region of regions) {
          expect (region).toBeInstanceOf (Region);
        }
      });

    });

    describe ('Classic', () => {

      test ('client.wow.classic.getConnectedRealms', async () => {
        let connectedRealms = await client.wow.classic.getConnectedRealms ();

        for (let connectedRealm of connectedRealms) {
          expect (connectedRealm).toBeInstanceOf (ConnectedRealm);
        }
      });

      test ('client.wow.classic.getConnectedRealm', async () => {
        let connectedRealm = await client.wow.classic.getConnectedRealm ('Grobbulus');

        expect (connectedRealm).toBeInstanceOf (ConnectedRealm);
      });

      test ('client.wow.classic.getItem', async () => {
        let item = await client.wow.classic.getItem ('Thunderfury');

        expect (item).toBeInstanceOf (Item);
        expect (item.name).toEqual ('Thunderfury, Blessed Blade of the Windseeker');

        item = await client.wow.classic.getItem ('D.N.E');

        expect (item).toBeNull ();
      });

      test ('client.wow.classic.getItemById', async () => {
        let item = await client.wow.classic.getItemById (25);

        expect (item).toBeInstanceOf (Item);
        expect (item.name).toEqual ('Worn Shortsword');

        item = await client.wow.classic.getItemById (1);

        expect (item).toBeNull ();
      });

      test ('client.wow.classic.getItems', async () => {
        let items = await client.wow.classic.getItems ('Thunderfury');

        for await (let item of items) {
          expect (item).toBeInstanceOf (Item);
        }
      });

      test ('client.wow.classic.getRegions', async () => {
        let regions = await client.wow.classic.getRegions ();

        for (let region of regions) {
          expect (region).toBeInstanceOf (Region);
        }

        regions = await client.wow.classic.getRegions ('eu');

        for (let region of regions) {
          expect (region).toBeInstanceOf (Region);
        }
      });

      test ('client.wow.classic.getAuctionHouses', async () => {
        let connectedRealm = await client.wow.classic.getConnectedRealm ('Grobbulus');
        let auctionHouses = await client.wow.classic.getAuctionHouses (connectedRealm.id);

        for (let auctionHouse of auctionHouses) {
          expect (auctionHouse).toBeInstanceOf (AuctionHouse);
        }
      });

    });

  });

  describe ('Low-Level API', () => {

    describe ('Retail', () => {

    });

    describe ('Retail Profile', () => {

    });

    describe ('Classic', () => {

    });

  });

});