function logResReq(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Important: call next() to pass control to the next middleware
}

module.exports = logResReq; // Export just the function (no need for object)