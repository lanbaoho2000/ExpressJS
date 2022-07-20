const logger = (req, res, next) => {
  console.log("heeloo world");
  next();
};

module.exports = logger;
