class Service
{
  constructor (client, Api) {
    this.client = client;
    this.api = new Api (this.client);
  }

  getDefaultLocale () {
    return this.api.getDefaultLocale ();
  }
}

module.exports = Service;