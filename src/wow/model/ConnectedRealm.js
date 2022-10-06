let Model = require ('../../Model');
let Realm = require ('./Realm');

class ConnectedRealm extends Model
{
  constructor (service, { id, has_queue, status, population, realms }) {
    super (service);

    this.id = id;
    this.hasQueue = has_queue;
    this.status = status.name;
    this.population = population.name;
    this.realms = realms.map (realm => new Realm (service, id, realm));
  }

  is (name) {
    return !!this.realms.find (realm => realm.name === name);
  }

  async getAuctions (options) {
    let auctionHouses = await this.service.getAuctionHouses (this.id, options);
    let auctions = {};

    for (let auctionHouse of auctionHouses) {
      auctions [auctionHouse.faction] = await auctionHouse.getAuctions ();
    }

    return auctions;
  }
}

module.exports = ConnectedRealm;