let Base = require ('../Service');
let Api = require ('./Api');

class Service extends Base
{
  constructor (client) {
    super (client, Api);
  }
}

module.exports = Service;