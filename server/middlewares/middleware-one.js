const middleware1 = (req, res, next) => {
  console.log("This is a middleware,", req.url, req.method, req.body);
  next();
};
module.exports = { middleware1 };
