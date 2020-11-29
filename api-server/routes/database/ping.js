const { Ping } = require("../../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

/**
 * Ping
 * senderIp - String
 * nickname - String Unique
 */

/* Update ping */
exports.UpdatePing = async (ip, info) => {
  let callback = {};
  await Ping.findOne({ where: { nickname: info } })
    .then((result) => {
      if (result) {
        /* If exist */
        Ping.update({ senderIp: ip }, { where: { nickname: info } });
        // console.log("Updated DDNS at " + info);
        // console.log("where: " + ip);
        callback["info"] = "Updated";
      } else {
        /* Not exist */
        Ping.create({ senderIp: ip, nickname: info });
        callback["info"] = "new Ping";
      }
    })
    .catch((e) => {
      callback["err"] = { status: 500, where: "PingDB", info: e };
    });
  return callback;
};

/* get Ping */
exports.GetPing = async () => {
  let callback = {};
  await Ping.findAll({ raw: true })
    .then((result) => {
      if (result) {
        callback["info"] = result;
      } else {
        callback["info"] = {};
      }
    })
    .catch((e) => {
      callback["err"] = { status: 500, where: "PingDB", info: e };
    });
  return callback;
};
