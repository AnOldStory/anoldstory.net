var express = require("express");
var router = express.Router();

const PingDB = require("../database/ping");

router.get("/", async (req, res, next) => {
  let ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);
  let { info, err } = await PingDB.UpdatePing(ip, req.headers["user-agent"]);
  if (err) next(err);
  res.json({ status: 200, msg: "Pong!" });
});

router.get("/status", async (req, res, next) => {
  let { info, err } = await PingDB.GetPing();
  console.log(info);
  if (err) next(err);
  res.json({ status: 200, msg: "success", result: info });
});

module.exports = router;
