var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  console.log(req);
  res.json({ status: 200, msg: "saved message" });
});

router.get("/status", async (req, res, next) => {
  res.json({ status: 200, msg: "success" });
});

module.exports = router;
