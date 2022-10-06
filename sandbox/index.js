require ('dotenv/config');

let { Client } = require ('gadgetzan');

let client = new Client (
  process.env.BATTLE_NET_CLIENT_ID,
  process.env.BATTLE_NET_CLIENT_SECRET,

  {
    region: process.env.BATTLE_NET_REGION
  }
);

async function main () {

  console.log (await client.getAccessToken ());

  let item = await client.wow.classic.getItem ('Jeeves');
  let icon = await item.getIcon ();

  console.log (icon);

  let realm = await client.wow.classic.getConnectedRealm ('Grobbulus');
  let auctions = await realm.getAuctions ();

  // console.log (auctions);

  // // High-level convenience wrapper around the lower-level direct API calls.
  // let realms = await client.wow.classic.getConnectedRealms ();

  // console.log (realms);

  // let item = await client.wow.classic.getItemById (25);
  // let icon = await item.getIcon ();

  // console.log (icon);

  // let regions = await client.wow.classic.getRegions ();

  // console.log (regions);

  /*

  for (let realm of realms) {
    let auctions = await realm.getAuctions ();

    // Now available: auctions.horde, auctions.alliance, auctions.neutral
  }

  */

  // let items = client.wow.classic.getItems ();

  // for await (let item of items) {
  //   console.log (item);
  // }


  // let regions = await client.wow.classic.getRegions ({ params: { region: 'eu' }});

  // console.log (regions);

  // // Low-level unmodified direct API calls.
  let region = await client.wow.classic.api.getRegion (43, { params: { region: 'eu' } });

  console.log (region);

}

main ();