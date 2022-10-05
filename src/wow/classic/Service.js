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

  async getAuctionHousesIndex (connectedRealmId) {
    let auctionHouses = await this.api.getAuctionHouseIndex (connectedRealmId, options);
    let auctionHousesIndex = [];

    for (let auctionHouse of auctionHouses.auctions) {
      auctionHousesIndex.push (new AuctionHouse (this, { connectedRealmId, ... auctionHouse }));
    }

    return auctionHousesIndex;
  }
}

module.exports = Service;