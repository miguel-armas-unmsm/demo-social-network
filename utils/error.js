function sendError(message, code) {
  let actualError = new Error(message);
  if(code) {
      actualError.statusCode = code;
  }
  return actualError;
}

module.exports = sendError;