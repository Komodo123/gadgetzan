let Base = require ('../Service');
let Api = require ('./Api');
let data = require ('./data');
let AuctionHouse = require ('../model/AuctionHouse');

class Service extends Base
{
  constructor (client) {
    super (client, Api);
    this.data = data;
  }

  async getAuctionHouses (connectedRealmId, options) {
    let auctionHouses = await this.api.getAuctionHousesIndex (connectedRealmId, options);
    let auctionHousesIndex = [];

    for (let auctionHouse of auctionHouses.auctions) {
      auctionHousesIndex.push (new AuctionHouse (this, { connectedRealmId, ... auctionHouse }));
    }

    return auctionHousesIndex;
  }
}

module.exports = Service;