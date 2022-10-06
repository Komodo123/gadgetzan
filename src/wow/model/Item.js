let url = require ('url');
let querystring = require ('querystring');
let Model = require ('../../Model');
let Price = require ('./Price');

class Item extends Model
{
  constructor (service, item)
  {
    super (service);

    this.id = item.id;
    this.name = item.name;
    this.quality = item.quality.name;
    this.level = item.level;
    this.class = item.item_class.name;
    this.subclass = item.item_subclass.name;
    this.requiredLevel = item.required_level;
    this.inventoryType = item.inventory_type.name;
    this.purchasePrice = new Price (item.purchase_price);
    this.sellPrice = new Price (item.sell_price);
    this.maxCount = item.max_count;
    this.isEquippable = item.is_equippable;
    this.isStackable = item.is_stackable;
    this.preview = item.preview_item;

    this.meta = {
      media: { id: item.media.id },
      class: { id: item.item_class.id },
      subclass: { id: item.item_subclass.id }
    };

    // Item links for media, itemClass and itemSubclass have a custom namespace
    // based on the patch (i.e. static-3.4.0_45264-classic-us)

    let parsed = url.parse (item._links.self.href);
    let qs = querystring.parse (parsed.query);

    this.namespace = qs.namespace;
  }

  async getIcon (options) {
    let media = await this.service.api.getItemMedia (this.id, options);
    return media.assets.find (asset => asset.key === 'icon').value;
  }
}

module.exports = Item;