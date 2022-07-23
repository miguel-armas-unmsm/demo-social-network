const express = require('express');

const response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

// Routes
router.get('/', findAll);

// functions
function findAll(req, res, next) {
	controller.findAll()
		.then(data => response.success(req, res, data, 200))
		.catch(next);
}

module.exports = router;