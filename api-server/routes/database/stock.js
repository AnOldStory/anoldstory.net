const { Stock } = require("../../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

/**
 * Stock
 * symbol - String Unique NotNull
 * alias - String Unique NotNull
 */

/* Update Stock */
exports.UpdateStock = async (symbol, alias = symbol) => {
  let callback = {};
  await Stock.findOne({ where: { [Op.or]: [{ symbol }, { alias }] } })
    .then((result) => {
      if (result) {
        /* If exist */
        callback["info"] = "Updated";
      } else {
        /* Not exist */
        Stock.create({ symbol, alias });
        callback["info"] = "new Stock";
      }
    })
    .catch((e) => {
      callback["err"] = { status: 500, where: "StockDB", info: e };
    });
  return callback;
};

/* Delete Stock */
exports.DeleteStock = async (symbol, alias = symbol) => {
  let callback = {};
  await Stock.findOne({ where: { [Op.or]: [{ symbol }, { alias }] } })
    .then((result) => {
      if (result) {
        /* If exist */
        result.destroy();
        callback["info"] = "Deleted";
      } else {
        /* Not exist */
        callback["err"] = { status: 500, where: "StockDB", info: "not exist" };
      }
    })
    .catch((e) => {
      callback["err"] = { status: 500, where: "StockDB", info: e };
    });
  return callback;
};

/* get Stock */
exports.GetStock = async () => {
  let callback = {};
  await Stock.findAll({ raw: true })
    .then((result) => {
      if (result) {
        callback["info"] = result;
      } else {
        callback["info"] = {};
      }
    })
    .catch((e) => {
      callback["err"] = { status: 500, where: "StockDB", info: e };
    });
  return callback;
};
