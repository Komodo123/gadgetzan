let url = require ('url');
let querystring = require ('querystring');
let pThrottle = require ('p-throttle');
let debug = require ('debug') ('battle.net:api');
let axios = require ('axios');
let sha1 = require ('sha1');
let retry = require ('async-retry');
let meta = require ('../package.json');

class Api
{
  constructor (client) {
    this.client = client;

    this.throttle = pThrottle ({
      limit: 100,
      interval: 1000,
      strict: true
    });
  }

  getDefaultLocale () {
    return this.client.options.locale;
  }

  getDefaultRegion () {
    return this.client.options.region;
  }

  async get ({ path, params, timeout, retries, cache }) {
    params = params ?? {};
    timeout = timeout ?? this.client.options.timeout;
    retries = retries ?? this.client.options.retries;

    if (cache !== false) {
      cache = {
        ... this.client.options.cache,
        ... cache
      };
    }

    let request = await this.prepareAxiosRequest ({
      path,
      params,
      timeout
    });

    let cacheKey = sha1 (JSON.stringify (request));

    if (cache && cache.enabled) {
      if (this.client.cache.has (cacheKey)) {
        debug ('GET (cached) > %s', request.url);
        return this.client.cache.get (cacheKey);
      }
    }

    debug ('GET > %s', request.url);

    let response;

    let throttled = this.throttle (() => axios.request (request));

    try {
      await retry (
        async (bail) => {
          response = await throttled ();

          switch (response.status) {
            case 200: break;
            case 403: bail (); break;

            default:
              debug ('GET > %s Retrying request: %o.', request.url, request);
              throw null;
            break;
          }
        }, { retries, factor: 0 }
      );
    } catch (e) {
      debug ('GET > %s Request failed after %d retries: %o.', request.url, retries, request);
      debug (e);
      return null;
    }

    if (cache && cache.enabled) {
      this.client.cache.set (cacheKey, response.data, cache.ttl);
    }

    return response.data;
  }

  async* getAll (paginatedRequest, options) {
    let offset = 1;
    let response;

    do {
      response = await paginatedRequest.call (this, {
        ... options,
        id: `[${offset},]`,
        orderBy: 'id',
        pageSize: 100
      }, {
        cache: false,
        ... options
      });

      if (response.pageSize > 0) {
        offset = response.results [response.results.length - 1].data.id + 1;

        for (let result of response.results) {
          yield result;
        }
      }
    } while (response.pageSize > 0);
  }

  async prepareAxiosRequest ({ path, params, timeout }) {
    let token = await this.client.getAccessToken ();
    let region = params.region ?? this.client.options.region;
    let locale = params.locale ?? this.client.options.locale;
    let namespace = `${params.namespace}-${region}`;

    let parsed = url.parse (path);
    let host = url.parse (this.client.data.endpoints [region].host);

    let qs = {};

    if (parsed.query) {
      qs = querystring.parse (parsed.query);

      namespace = qs.namespace ?? namespace;
      region = qs.region ?? region;
    }

    return {
      url: url.format ({
        protocol: parsed.protocol ?? host.protocol,
        hostname: parsed.hostname ?? host.hostname,
        pathname: parsed.pathname
      }),

      headers: {
        'Content-Type': 'application/json',
        'User-Agent': `node.js/${process.versions.node} battle.net/${meta.version}`,
        Authorization: `Bearer ${token.access_token}`
      },

      params: {
        // region,
        locale,

        ... params,
        ... qs,

        namespace
      }
    };
  }
}

module.exports = Api;