const TABLE = 'posts';

module.exports = function (injectedStore) {
	let store = injectedStore;
	if (!store) {
		store = require('../../../store/mysql');
	}

	function findAll() {
		return store.findAll(TABLE);
	}

	return {
		findAll,
	};
}