let Base = require ('../Service');
let Region = require ('./model/Region');
let ConnectedRealm = require ('./model/ConnectedRealm');
let Item = require ('./model/Item');

class Service extends Base
{
  async getConnectedRealms (options) {
    let connectedRealmsIndex = await this.api.getConnectedRealmsIndex (options);
    let connectedRealms = [];

    await this.client.concurrent (connectedRealmsIndex.connected_realms, async connectedRealmLink => {
      let details = await this.api.get ({
        path: connectedRealmLink.href
      });

      connectedRealms.push (new ConnectedRealm (this, details));
    });

    return connectedRealms;
  }

  async getItem (name, options) {
    let items = this.getItems (name, options);

    for await (let item of items) {
      return item;
    }
  }

  async getItemById (itemId, options) {
    return new Item (this, await this.api.getItem (itemId, options));
  }

  async* getItems (name, options) {
    let items = this.api.getAll (this.api.searchItems, { name }, options);

    for await (let item of items) {
      yield await this.getItemById (item.data.id);
    }
  }

  async getRegions (options) {
    let regionsIndex = await this.api.getRegionsIndex (options);
    let regions = [];

    await this.client.concurrent (regionsIndex.regions, async regionLink => {
      let details = await this.api.get ({
        path: regionLink.href
      });

      regions.push (new Region (this, details));
    });

    return regions;
  }
}

module.exports = Service;