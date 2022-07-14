const auth = require('../auth');
const TABLE = 'users';

module.exports = function(injectedStore) {
  if (!injectedStore) injectedStore = require('../../../store/mysql');
  
  function findAll() {
    return injectedStore.findAll(TABLE);
  } 

  function findById(id) {
    return injectedStore.findById(TABLE, id);
  } 

  async function save(body) {
    let user = {
      name: body.name,
      username: body.username,
    }

    if(body.id) {
      user.id = body.id;
    }

    // user.id = body.id ? body.id : '' + Math.floor((Math.random() * 10000) );
    
    if(body.password || body.username) {
      await auth.save({
        username: body.username,
        password: body.password,
      });
    }

    return injectedStore.save(TABLE, user);
  }

  function deleteById(id) {
    injectedStore.deleteById(TABLE, id);
  }

  return {
    findAll,
    findById,
    save,
    deleteById,  
  };
}

/*
module.exports = (injectedStore) => {
  if (!injectedStore) injectedStore = require('../../../store/dummy');

  return {
    findAll: () => injectedStore.findAll(TABLE),

    findById: id => injectedStore.findById(TABLE, id),

    save: (body) => {
      let user = {
        name: body.name,
        username: body.username,
      }

      if(body.id) {
        user.id = body.id;
      }
      
      if(body.password || body.username) {
        await save({
          id: user.id,
          username: user.username,
          password: user.password,
        });
      }

      return injectedStore.save(TABLE, user);
    },

    deleteById: id => injectedStore.deleteById(TABLE, id)
  };
}
*/