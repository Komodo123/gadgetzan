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

  describe ('World of Warcraft', () => {
    describe ('Retail', () => {
      test ('client.wow.retail.api.account.getProfileSummary', async () => {
        expect (await client.wow.retail.api.account.getProfileSummary ()).toHaveProperty ('_links');
      });

      // test ('test client.wow.retail.api.account.getProtectedCharacterProfileSummary', async () => {
      //   let profileSummary = await client.wow.retail.api.account.getProfileSummary ();
      //   let character = profileSummary.wow_accounts [0].characters [0];

      //   expect (await client.wow.retail.api.profile.getProtectedCharacterProfileSummary (character.realm.id, character.id)).toHaveProperty ('_links');
      // });

      test ('client.wow.retail.api.account.getCollectionsIndex', async () => {
        expect (await client.wow.retail.api.account.getCollectionsIndex ()).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.account.getMountsCollectionSummary', async () => {
        expect (await client.wow.retail.api.account.getMountsCollectionSummary ()).toHaveProperty ('_links');
      });

      test ('client.wow.retail.api.account.getPetsCollectionSummary', async () => {
        expect (await client.wow.retail.api.account.getPetsCollectionSummary ()).toHaveProperty ('_links');
      });
    });
  });
});