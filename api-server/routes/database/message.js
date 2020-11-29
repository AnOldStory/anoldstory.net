const { Message } = require("../../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

/**
 * Message
 * sender - string
 * info - string
 * type - string
 */

/* Update Message */
exports.UpdateMessage = async (sender, info, type) => {
  let callback = {};
  await Message.create({
    sender,
    info: decodeURIComponent(info).replace(/\+/gi, " "),
    type,
  }).catch((e) => {
    callback["err"] = { status: 500, where: "MessageDB", info: e };
  });
  callback["info"] = "updated";
  return callback;
};

/* get Message */
exports.GetMessage = async () => {
  let callback = {};
  await Message.findAll({ limit: 5, order: [["createdAt", "DESC"]], raw: true })
    .then((result) => {
      if (result) {
        callback["info"] = result;
      } else {
        callback["info"] = {};
      }
    })
    .catch((e) => {
      callback["err"] = { status: 500, where: "MessageDB", info: e };
    });
  return callback;
};
