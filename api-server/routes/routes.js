var path = require("path");
var apiRouter = require("./api");
var pingRouter = require("./ping");
var messageRouter = require("./message");
var stockRouter = require("./stock");

/* router  */
module.exports = (app) => {
  app.use("/api", apiRouter);

  app.use("/ping", pingRouter);

  app.use("/message", messageRouter);

  app.use("/stock", stockRouter);

  /* static file */
  app.use("*", (req, res, next) => {
    res.sendFile(
      path.join(__dirname, "..", "..", "frontend", "build", "index.html")
    );
  });

  // error handler
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    console.log(err);
    //{ status: 500, where: "PingDB", info: e }
    // render the error page
    res.set({ status: err.status });
    res.send(err);
  });
};
