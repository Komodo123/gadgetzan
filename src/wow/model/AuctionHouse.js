let Model = require ('../../Model');

class AuctionHouse extends Model
{
  constructor (service, { connectedRealmId, id, name }) {
    super (service);

    this.id = id;
    this.name = name;
    this.faction = service.data.auctionHouses [name];
    this.factionId = service.data.factions [this.faction];
    this.connectedRealmId = connectedRealmId;
  }

  async getAuctions () {
    let response = await this.service.api.getAuctions (this.connectedRealmId, this.id);
    return response.auctions;
  }
}

module.exports = AuctionHouse;