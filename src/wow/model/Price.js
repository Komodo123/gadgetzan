class Price
{
  constructor (copper) {
    copper = Math.floor (copper);

    this.gold = Math.floor (copper / (100 * 100));
    this.silver = Math.floor ((copper % (100 * 100)) / 100);
    this.copper = copper % 100;
  }
}

module.exports = Price;