var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ statusCode: 200, msg: "hello" });
});

router.post("/", (req, res, next) => {
  console.log("hello");
  console.log(req.rawbody);
  console.log(req.body);
  res.json({ statusCode: 200, msg: "hello" });
});

module.exports = router;
