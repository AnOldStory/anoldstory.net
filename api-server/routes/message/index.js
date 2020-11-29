var express = require("express");
var router = express.Router();

const MessageDB = require("../database/message");

router.get("/", (req, res, next) => {
  console.log(req);
  // let {info, err} await MessageDB.UpdatedMessage(sender,info,type);
  // if (err) next(err);
  res.json({ status: 200, msg: "saved message" });
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  if (!req.body) next({ status: 400, where: "Message", info: "bad request" }); // body check
  let { info, err } = await MessageDB.UpdateMessage(
    req.body.sender,
    req.body.info,
    req.body.type
  );
  if (err) next(err);
  res.json({ status: 200, msg: "saved message", result: info });
});

router.get("/status", async (req, res, next) => {
  let { info, err } = await MessageDB.GetMessage();
  if (err) next(err);
  res.json({ status: 200, msg: "success", result: info });
});

module.exports = router;
