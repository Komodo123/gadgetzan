let fs = require ('fs');
let path = require ('path');
let debug = require ('debug') ('battle.net:cache');

class Cache
{
  constructor (path) {
    this.path = path;
    this.data = {};

    this.load ();

    process.on ('exit', this.save.bind (this));
  }

  get (key) {
    if (! (this.has (key))) {
      return null;
    }

    let entry = this.data [key];

    if (entry.rolling) {
      entry.ts = Date.now ();
    }

    // debug ('hit: %s', key);
    return entry.value;
  }

  set (key, value, ttl, rolling) {
    this.data [key] = {
      ts: Date.now (),
      ttl: (ttl || 60 * 5) * 1000,
      rolling: !!rolling,
      value
    };

    return true;
  }

  update (key, value) {
    if (! (this.has (key))) {
      return false;
    }

    this.data [key].value = value;
    return true;
  }

  delete (key) {
    delete this.data [key];
    return true;
  }

  has (key) {
    if (! (key in this.data)) {
      return false;
    }

    let entry = this.data [key];

    if (Date.now () > entry.ts + entry.ttl) {
      this.delete (key);
      return null;
    }

    return true;
  }

  load () {
    try {
      if (!fs.existsSync (this.path)) {
        fs.writeFileSync (this.path, '{}');
      }
    } catch (e) {
      debug (e);
      return false;
    }

    let buffer;

    try {
      buffer = fs.readFileSync (this.path);
      buffer = buffer.toString ();

      this.data = JSON.parse (buffer);
    } catch (e) {
      debug (e);
      return false;
    }

    return true;
  }

  save () {
    try {
      fs.writeFileSync (this.path, JSON.stringify (this.data));
    } catch (e) {
      debug (e);
      return false;
    }

    return true;
  }
}

module.exports = Cache;