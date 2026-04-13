function getCurrentWindowKey() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = `${now.getUTCMonth() + 1}`.padStart(2, '0');
  return `${year}-${month}`;
}

function createResponseRecorder() {
  let statusCode = 200;
  let body;

  return {
    status(code) {
      statusCode = code;
      return this;
    },
    send(value) {
      body = value;
      return this;
    },
    get statusCode() {
      return statusCode;
    },
    get body() {
      return body;
    },
  };
}

module.exports = {
  createResponseRecorder,
  getCurrentWindowKey,
};
