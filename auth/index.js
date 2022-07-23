const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error');
const secret = config.jwt.secret;

function sign(data) {
  return jwt.sign(data, secret);
}

const check = {
  own: function(req, owner) {
    const decoded = decodeHeader(req);
    if(decoded.id !== owner) {
      throw error('You do not have permissions to execute this action', 401);
    }
  },

  logged: function(req, owner) {
    decodeHeader(req);
  }
}

function decodeHeader(req) {
  const token = getToken(req.headers.authorization || '');
  const decoded = verifyToken(token);
  req.user = decoded;
  return decoded;
}

function getToken(authorization) {
  if(!authorization) {
    throw error('Not found bearer token', 401);
  }

  if(authorization.indexOf('Bearer ') === -1) {
    throw error('Invalid format', 401);
  }

  return authorization.replace( 'Bearer ', '' );
}

function verifyToken(token) {
  return jwt.verify(token, secret)
}

module.exports = {
  sign,
  check,
}