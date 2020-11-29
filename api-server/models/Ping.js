module.exports = function (sequelize, Datatypes) {
  var Ping = sequelize.define("Ping", {
    senderIp: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Ping;
};
