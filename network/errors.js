const response = require('./response');

function errors(err, req, res, next) {
    console.error('[error]', err);
    response.error(req, res, err.message || 'Internal error', err.statusCode || 500);
}

module.exports = errors;