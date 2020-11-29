module.exports = function (sequelize, Datatypes) {
  var Message = sequelize.define("Message", {
    sender: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    info: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    type: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  });

  return Message;
};
