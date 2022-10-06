let path = require ('path');
let axios = require ('axios');
let debug = require ('debug') ('gadgetzan:client');
let { default: PQueue } = require ('p-queue');
let Cache = require ('./Cache');
let data = require ('./data');
let d3 = require ('./d3');
let hs = require ('./hs');
let sc2 = require ('./sc2');
let wow = require ('./wow');

class Client
{
  constructor (clientId, clientSecret, options) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    this.options = {
      region: options.region ?? 'us',
      locale: options.locale ?? 'en_US',
      retries: options.retries ?? 3,
      timeout: options.timeout ?? 5000,
      concurrency: options.concurrency ?? 5,
      throttle: options.throttle ?? 100
    };

    this.options.cache = {
      enabled: options.cache?.enabled ?? true,
      ttl: options.cache?.ttl ?? 60 * 60 * 24,
      file: options.cache?.file ?? path.join (path.dirname (__dirname), '.cache')
    };

    if (options.cache === false) {
      this.options.cache.enabled = false;
    }

    this.cache = new Cache (this.options.cache.file);
    this.data = data;
    this.d3 = d3 (this);
    this.hs = hs (this);
    this.sc2 = sc2 (this);
    this.wow = wow (this);
  }

  async connect () {
    let res;

    if (this.cache.has ('token')) {
      return true;
    }

    try {
      res = await axios.post (`${this.data.endpoints.global.host}/oauth/token`, null, {
        params: {
          grant_type: 'client_credentials'
        },

        auth: {
          username: this.clientId,
          password: this.clientSecret
        }
      });
    } catch (e) {
      debug (e);
      return false;
    }

    if (!res) {
      debug ('Failed to fetch access token.');
      return false;
    }

    this.setAccessToken (res.data);
  }

  connected () {
    return this.cache.has ('token');
  }

  async getAccessToken () {
    if (!this.connected ()) {
      await this.connect ();
    }

    if (!this.connected ()) {
      debug ('Failed to reconnect.');
      return null;
    }

    return this.cache.get ('token');
  }

  setAccessToken (token) {
    this.cache.set ('token', {
      access_token: token.access_token,
      token_type: token.token_type,
      expires_in: token.expires_in,
      expires_at: token.expires_in * 1000 + Date.now ()
    }, token.expires_in);
  }

  async concurrent (items, handler) {
    let queue = new PQueue ({ concurrency: this.options.concurrency });

    for (let item of items) {
      queue.add (() => handler (item));
    }

    await queue.onIdle ();
  }
}

module.exports = Client;