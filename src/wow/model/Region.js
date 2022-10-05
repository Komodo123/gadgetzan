let Model = require ('../../Model');

class Region extends Model
{
  constructor (service, { id, name, tag }) {
    super (service);

    this.id = id;
    this.name = name;
    this.tag = tag;
  }
}

module.exports = Region;