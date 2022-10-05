let base = require ('../data');

module.exports = {
  ... base,

  namespaces: [
    'static-classic1x',   // Vanilla Static
    'dynamic-classic1x',  // Vanilla Dynamic
    'static-classic',     // WOTLK Static
    'dynamic-classic'     // WOTLK Dynamic
  ],

  auctionHouses: {
    'Horde Auction House': 'horde',
    'Alliance Auction House': 'alliance',
    'Blackwater Auction House': 'neutral'
  }
};