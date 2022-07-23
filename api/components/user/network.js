const express = require('express');
const secure = require('./secure');
const response = require('../../../network/response');
const controller = require('./index');
const router = express.Router();
// router.use(express.json());

router.get('/', findAll);
router.post('/follow/:id', secure('follow'), follow);
router.get('/:id/following', following);
router.get('/:id', findById);
router.post('/', save);
router.put('/', secure('update'), save);
router.delete('/:id', deleteById);

/**
 * @param {*} next: Apunta al siguiente middleware definido en /api/index, en este caso el middleware de error.
 */
function findAll(req, res, next) {
  controller.findAll()
    .then(recoveredList => response.success(req, res, recoveredList, 200))
    .catch(next);  
}

function findById(req, res, next) {
  controller.findById(req.params.id)
    .then(userFound => response.success(req, res, userFound, 200))
    .catch(next);
}

function save(req, res, next) {
  controller.save(req.body)
    .then(user => response.success(req, res, user, 201))
    .catch(next);
}

function deleteById(req, res, next) {
  controller.deleteById(req.params.id)
    .then(() => response.success(req, res, 'Se eliminó correctamente.', 204))
    .catch(next);
}

function follow(req, res, next) {
  controller.follow(req.user.id, req.params.id)
    .then(data => response.success(req, res, data, 201))
    .catch(next);
}

function following(req, res, next) {
  return controller.following(req.params.id)
    .then(data => response.success(req, res, data, 200))
    .catch(next);
}

module.exports = router;