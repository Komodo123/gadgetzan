let Api = require ('../../Api');

class Account extends Api
{
  _getNamespace (type) {
    return type;
  }

  async getProfileSummary (options) {
    return this.get ({
      ... options,
      path: `/profile/user/wow`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getProtectedCharacterProfileSummary (realmId, characterId, options) {
    return this.get ({
      ... options,
      path: `/profile/user/wow/protected-character/${encodeURIComponent (realmId)}-${encodeURIComponent (characterId)}`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getCollectionsIndex (options) {
    return this.get ({
      ... options,
      path: `/profile/user/wow/collections`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getMountsCollectionSummary (options) {
    return this.get ({
      ... options,
      path: `/profile/user/wow/collections/mounts`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }

  async getPetsCollectionSummary (options) {
    return this.get ({
      ... options,
      path: `/profile/user/wow/collections/pets`,
      params: {
        namespace: this._getNamespace ('profile'),
        ... options?.params
      }
    });
  }
}

module.exports = Account;