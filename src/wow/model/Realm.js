let Model = require ('../../Model');

class Realm extends Model
{
  constructor (service, connectedRealmId, { id, region, name, category, locale, timezone, type, is_tournament, slug })
  {
    super (service);

    this.id = id;
    this.region = region;
    this.connectedRealmId = connectedRealmId;
    this.name = name;
    this.category = category;
    this.locale = locale;
    this.type = type.name;
    this.isTournament = is_tournament;
    this.slug = slug;
  }
}

module.exports = Realm;