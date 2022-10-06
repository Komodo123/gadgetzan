require ('dotenv/config');

let { Client } = require ('gadgetzan');

let AuctionHouse = require ('../src/wow/model/AuctionHouse');
let ConnectedRealm = require ('../src/wow/model/ConnectedRealm');
let Item = require ('../src/wow/model/Item');
let Region = require ('../src/wow/model/Region');

describe ('World of Warcraft', () => {

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

  function commonHighLevelAPIs (version) {
    test (`client.wow.${version}.getConnectedRealms`, async () => {
      let connectedRealms = await client.wow [version].getConnectedRealms ();

      for (let connectedRealm of connectedRealms) {
        expect (connectedRealm).toBeInstanceOf (ConnectedRealm);
      }
    }, 60 * 10 * 1000);

    test (`client.wow.${version}.getConnectedRealm`, async () => {
      let connectedRealm = await client.wow [version].getConnectedRealm ('Grobbulus');
      if (version === 'classic') {
        expect (connectedRealm).toBeInstanceOf (ConnectedRealm);
      } else {
        expect (connectedRealm).toBeNull ();
      }

      connectedRealm = await client.wow [version].getConnectedRealm ('Bladefist');

      if (version === 'classic') {
        expect (connectedRealm).toBeNull ();
      } else {
        expect (connectedRealm).toBeInstanceOf (ConnectedRealm);
      }
    }, 60 * 10 * 1000);

    test (`client.wow.${version}.getItem`, async () => {
      let item = await client.wow [version].getItem ('Thunderfury');

      expect (item).toBeInstanceOf (Item);
      expect (item.name).toEqual ('Thunderfury, Blessed Blade of the Windseeker');

      item = await client.wow [version].getItem ('D.N.E');

      expect (item).toBeNull ();
    });

    test (`client.wow.${version}.getItemById`, async () => {
      let item = await client.wow [version].getItemById (25);

      expect (item).toBeInstanceOf (Item);
      expect (item.name).toEqual ('Worn Shortsword');

      item = await client.wow [version].getItemById (1);

      expect (item).toBeNull ();
    });

    test (`client.wow.${version}.getItems`, async () => {
      let items = await client.wow [version].getItems ('Thunderfury');

      for await (let item of items) {
        expect (item).toBeInstanceOf (Item);
      }
    });

    test (`client.wow.${version}.getRegions`, async () => {
      let regions = await client.wow [version].getRegions ();

      for (let region of regions) {
        expect (region).toBeInstanceOf (Region);
      }

      regions = await client.wow [version].getRegions ('eu');

      for (let region of regions) {
        expect (region).toBeInstanceOf (Region);
      }
    });
  }

  function commonLowLevelAPIs (version) {
    test (`client.wow.${version}.api.getConnectedRealmsIndex`, async () => {
      expect (await client.wow [version].api.getConnectedRealmsIndex ()).toHaveProperty ('connected_realms');
    });

    test (`client.wow.${version}.api.getConnectedRealm`, async () => {
      expect (await client.wow [version].api.getConnectedRealm (version === 'classic' ? 4408 : 11)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.searchConnectedRealms`, async () => {
      expect (await client.wow [version].api.searchConnectedRealms ({ timezone: 'America/New_York'})).toHaveProperty ('results');
    });

    test (`client.wow.${version}.api.getCreatureFamiliesIndex`, async () => {
      expect (await client.wow [version].api.getCreatureFamiliesIndex ()).toHaveProperty ('creature_families');
    });

    test (`client.wow.${version}.api.getCreatureFamily`, async () => {
      expect (await client.wow [version].api.getCreatureFamily (1)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getCreatureTypesIndex`, async () => {
      expect (await client.wow [version].api.getCreatureTypesIndex ()).toHaveProperty ('creature_types');
    });

    test (`client.wow.${version}.api.getCreatureType`, async () => {
      expect (await client.wow [version].api.getCreatureType (1)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getCreature`, async () => {
      expect (await client.wow [version].api.getCreature (26446)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.searchCreatures`, async () => {
      expect (await client.wow [version].api.searchCreatures ({ name: 'Crystalline Ice Elemental' })).toHaveProperty ('results');
    });

    test (`client.wow.${version}.api.getCreatureDisplayMedia`, async () => {
      expect (await client.wow [version].api.getCreatureDisplayMedia (16901)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getCreatureFamilyMedia`, async () => {
      expect (await client.wow [version].api.getCreatureFamilyMedia (27)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getGuildCrestComponentsIndex`, async () => {
      expect (await client.wow [version].api.getGuildCrestComponentsIndex ()).toHaveProperty ('borders');
    });

    test (`client.wow.${version}.api.getGuildCrestBorderMedia`, async () => {
      expect (await client.wow [version].api.getGuildCrestBorderMedia (0)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getGuildCrestEmblemMedia`, async () => {
      expect (await client.wow [version].api.getGuildCrestEmblemMedia (0)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getItemClassesIndex`, async () => {
      expect (await client.wow [version].api.getItemClassesIndex ()).toHaveProperty ('item_classes');
    });

    test (`client.wow.${version}.api.getItemClass`, async () => {
      expect (await client.wow [version].api.getItemClass (0)).toHaveProperty ('class_id');
    });

    test (`client.wow.${version}.api.getItemSubclass`, async () => {
      expect (await client.wow [version].api.getItemSubclass (0, 0)).toHaveProperty ('subclass_id');
    });

    test (`client.wow.${version}.api.getItem`, async () => {
      expect (await client.wow [version].api.getItem (19019)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getItemMedia`, async () => {
      expect (await client.wow [version].api.getItemMedia (19019)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.searchItems`, async () => {
      expect (await client.wow [version].api.searchItems ({ name: 'Thunderfury' })).toHaveProperty ('results');
    });

    test (`client.wow.${version}.api.searchMedia`, async () => {
      expect (await client.wow [version].api.searchMedia ({ tags: 'item' })).toHaveProperty ('results');
    });

    test (`client.wow.${version}.api.getPlayableClassesIndex`, async () => {
      expect (await client.wow [version].api.getPlayableClassesIndex ()).toHaveProperty ('classes');
    });

    test (`client.wow.${version}.api.getPlayableClass`, async () => {
      expect (await client.wow [version].api.getPlayableClass (7)).toHaveProperty ('id');
    });
    
    test (`client.wow.${version}.api.getPlayableClassMedia`, async () => {
      expect (await client.wow [version].api.getPlayableClassMedia (7)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getPlayableRacesIndex`, async () => {
      expect (await client.wow [version].api.getPlayableRacesIndex ()).toHaveProperty ('races');
    });

    test (`client.wow.${version}.api.getPlayableRace`, async () => {
      expect (await client.wow [version].api.getPlayableRace (2)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getPowerTypesIndex`, async () => {
      expect (await client.wow [version].api.getPowerTypesIndex ()).toHaveProperty ('power_types');
    });

    test (`client.wow.${version}.api.getRealmsIndex`, async () => {
      expect (await client.wow [version].api.getRealmsIndex ()).toHaveProperty ('realms');
    });

    test (`client.wow.${version}.api.getRealm`, async () => {
      expect (await client.wow [version].api.getRealm (version === 'classic' ? 'westfall' : 'tichondrius')).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.searchRealms`, async () => {
      expect (await client.wow [version].api.searchRealms ({ timezone: 'America/New_York' })).toHaveProperty ('results');
    });

    test (`client.wow.${version}.api.getRegionsIndex`, async () => {
      expect (await client.wow [version].api.getRegionsIndex ()).toHaveProperty ('regions');
    });

    test (`client.wow.${version}.api.getRegion`, async () => {
      expect (await client.wow [version].api.getRegion (version === 'classic' ? 41 : 1)).toHaveProperty ('id');
    });

    test (`client.wow.${version}.api.getWoWTokenIndex`, async () => {
      expect (await client.wow [version].api.getWoWTokenIndex ()).toHaveProperty ('price');
    });
  }

  describe ('High-Level API', () => {
    describe ('Retail', () => {
      commonHighLevelAPIs ('retail');
    });

    describe ('Classic', () => {
      commonHighLevelAPIs ('classic');
    });
  });

  describe ('Low-Level API', () => {
    describe ('Retail', () => {
      commonLowLevelAPIs ('retail');
    });

    describe ('Retail Profile', () => {

    });

    describe ('Classic', () => {  
      commonLowLevelAPIs ('classic');
    });
  });
});