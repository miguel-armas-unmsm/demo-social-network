const bcrypt = require('bcrypt');
const auth = require('../../../auth');
const TABLE = 'auth';

module.exports = function(injectedStore) {
    let store = injectedStore;
    if(!store) {
        store = require('../../../store/dummy');
    }

    async function login(username, password) {
      const data = await store.query(TABLE, {username: username});

      return bcrypt.compare(password, data.password)
        .then(areEquals => {
            if(!areEquals) {
              throw new Error('Información inválida'); 
            }
            delete data.password;
            return auth.sign(data);
        });
    }

    async function save(data) {
        const authData = {
            id: data.id,
        };

        if(data.username) {
            authData.username = data.username;
        }

        if(data.password) {
            authData.password = await bcrypt.hash(data.password, 5);
        }

        return store.save(TABLE, authData);
    }

    return {
        save,
        login,
    };
}

/*
module.exports = (injectedStore) => {
    if (!injectedStore) injectedStore = require('../../../store/dummy');

    function save(authData) {
        const authData = {
            id: authData.id,
        }

        if(authData.username) {
            authData.username = authData.username;
        }

        if(authData.password) {
            authData.password = authData.password;
        }

        return injectedStore.save(TABLE, authData);
    }

    return {
        save,
    };
}
*/