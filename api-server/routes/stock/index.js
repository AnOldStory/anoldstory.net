var express = require("express");
var router = express.Router();

const StockDB = require("../database/stock");

router.get("/", (req, res, next) => {
  console.log(req);
  // let {info, err} await StockDB.UpdatedStock(sender,info,type);
  // if (err) next(err);
  res.json({ status: 200, msg: "saved Stock" });
});

router.post("/update", async (req, res, next) => {
  if (!req.body) next({ status: 400, where: "Stock", info: "bad request" }); // body check
  if (!req.body.symbol)
    next({ status: 400, where: "Stock", info: "symbol is null" });
  let { info, err } = await StockDB.UpdateStock(
    req.body.symbol,
    req.body.alias || req.body.symbol
  );
  if (err) next(err);
  res.json({ status: 200, msg: "saved Stock", result: info });
});

router.post("/delete", async (req, res, next) => {
  if (!req.body) next({ status: 400, where: "Stock", info: "bad request" }); // body check
  let { info, err } = await StockDB.DeleteStock(req.body.symbol);
  if (err) next(err);
  res.json({ status: 200, msg: "deleted Stock", result: info });
});

router.get("/status", async (req, res, next) => {
  let { info, err } = await StockDB.GetStock();
  if (err) next(err);
  res.json({ status: 200, msg: "success", result: info });
});

module.exports = router;
