let Base = require ('../Service');
let Api = require ('./Api');
let data = require ('./data');

class Service extends Base
{
  constructor (client) {
    super (client, Api);
    this.data = data;
  }
}

module.exports = Service;