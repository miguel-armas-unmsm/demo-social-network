const db = {
  'users': [
    { id: '1', name: 'Miguel' },
  ]
}

async function findAll(table) {
  return db[table] || [];
}

async function findById(table, id) {
  let collection = await findAll(table);
  return collection.filter(item => item.id === id)[0] || null;
}

async function save(table, data) {
  if(!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
}

async function deleteById(table, id) {
  let index = db[table].findIndex(item => item.id === id);
  if(index > 0) {
    db[table].splice(index, 1);
  }
  return true;
}

async function query(table, actualQuery) {
  let collection = await findAll(table);
  let key = Object.keys(actualQuery)[0];

  return collection.filter(item => item[key] === actualQuery[key])[0] || null;
}

module.exports = {
  findAll,
  findById,
  save,
  deleteById,
  query,
}