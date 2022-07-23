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

  function follow(from, to) {
    return injectedStore.save(TABLE + '_follows', {
      user_from: from,
      user_to: to,
    })
  }

  async function following(user) {
    const join = {};
    join[TABLE] = 'user_to'; // {user: user_to}
    const query = {user_from: user};
    return await injectedStore.query(TABLE + '_follows', query, join);
  }

  return {
    findAll,
    findById,
    save,
    deleteById,
    follow,
    following,
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