let debug = require ('debug') ('gadgetzan:test');
let http = require ('http');
let https = require ('https');
let url = require ('url');
let crypto = require ('crypto');
let open = require ('open');

function getOAuthAccessToken () {
  return new Promise ((resolve, reject) => {
    let state = crypto.randomBytes (20).toString ('hex');

    try {
      let server = http.createServer ((req, res) => {
        let { pathname, query } = url.parse (req.url);

        if (pathname !== '/oauth/callback') {
          res.writeHead (404);
          res.end ();
        }

        query = new URLSearchParams (query);

        if (state !== query.get ('state')) {
          res.writeHead (401);
          res.end ();
        }

        let params = new URLSearchParams ();

        params.set ('redirect_uri', 'http://localhost:8080/oauth/callback');
        params.set ('scope', 'wow.profile sc2.profile d3.profile openid');
        params.set ('grant_type', 'authorization_code');
        params.set ('code', query.get ('code'));

        let options = {
          hostname: 'oauth.battle.net',
          port: 443,
          path: `/token?${params.toString ()}`,
          method: 'POST',
          auth: process.env.BATTLE_NET_CLIENT_ID + ':' + process.env.BATTLE_NET_CLIENT_SECRET
        };

        let request = https.request (options, (response) => {
          let data = '';

          response.on ('data', (chunk) => {
            data += chunk.toString ();
          });

          response.on ('end', () => {
            data = JSON.parse (data);

            debug (data);

            if (data.error) {
              reject ();
            }
            
            resolve (data);

            res.writeHead (200);
            res.end (`Access token: ${data.access_token} received. Continuing tests.`);

            server.close ();
          });
        });

        request.on ('error', (err) => {
          debug (err);
          reject ();
        });

        request.end ();
      });
      
      server.listen (8080);

      debug ('Server listening on http://localhost:8080. Waiting for OAuth client credentials code.');
    
      let qs = new URLSearchParams ();

      qs.set ('client_id', process.env.BATTLE_NET_CLIENT_ID);
      qs.set ('scope', 'wow.profile sc2.profile d3.profile openid');
      qs.set ('state', state);
      qs.set ('redirect_uri', 'http://localhost:8080/oauth/callback');
      qs.set ('response_type', 'code');

      open ('https://oauth.battle.net/authorize?' + qs.toString ());
    } catch (e) {
      debug ('Failed to listen on http://localhost:8080.');
      debug (e);
      reject ();
    }
  });
}

module.exports = {
  getOAuthAccessToken
};