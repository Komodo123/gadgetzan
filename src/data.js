let regions = {
  us: 'us',
  eu: 'eu',
  kr: 'kr',
  tw: 'tw',
  cn: 'cn'
};

let locales = {
  en_US: 'en_US',
  es_MX: 'es_MX',
  pt_BR: 'pt_BR',
  en_GB: 'en_GB',
  es_ES: 'es_ES',
  fr_FR: 'fr_FR',
  ru_RU: 'ru_RU',
  de_DE: 'de_DE',
  pt_PT: 'pt_PT',
  it_IT: 'it_IT',
  ko_KR: 'ko_KR',
  zh_TW: 'zh_TW',
  zh_CN: 'zh_CN'
};

let hosts = {
  global: 'https://us.battle.net',

  us: 'https://us.api.blizzard.com',
  eu: 'https://eu.api.blizzard.com',
  kr: 'https://kr.api.blizzard.com',
  tw: 'https://tw.api.blizzard.com',
  cn: 'https://gateway.battlenet.com.cn'
};

module.exports = {
  regions,
  locales,
  hosts,

  endpoints: {
    global: {
      host: hosts.global
    },

    us: {
      region: 'North America',
      host: hosts.us,
      locales: [
        locales.en_US,
        locales.es_MX,
        locales.pt_BR
      ]
    },

    eu: {
      region: 'Europe',
      host: hosts.eu,
      locales: [
        locales.en_GB,
        locales.es_ES,
        locales.fr_FR,
        locales.ru_RU,
        locales.de_DE,
        locales.pt_PT,
        locales.it_IT
      ]
    },

    kr: {
      region: 'Korea',
      host: hosts.kr,
      locales: [
        locales.ko_KR
      ]
    },

    tw: {
      region: 'Taiwan',
      host: hosts.tw,
      locales: [
        locales.zh_TW
      ]
    },

    cn: {
      region: 'China',
      host: hosts.cn,
      locales: [
        locales.zh_CN
      ]
    }
  }
};