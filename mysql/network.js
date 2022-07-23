const express = require('express');

const response = require('../network/response');
const store = require('../store/mysql');

const router = express.Router();

// Routes
router.get('/:table', findAll);
router.get('/:table/:id', findById);
router.post('/:table', save);
router.put('/:table', update);

async function findAll(req, res, next) {
	const data = await store.findAll(req.params.table);
	response.success(req, res, data, 200);
}
async function findById(req, res, next) {
	const data = await store.findById(req.params.table, req.params.id);
	response.success(req, res, data, 200);
}

async function save(req, res, next) {
	const data = await store.save(req.params.table, req.body);
	response.success(req, res, data, 201);
}

async function update(req, res, next) {
	const data = await store.save(req.params.table, req.body);
	response.success(req, res, data, 201);
}

module.exports	= router;