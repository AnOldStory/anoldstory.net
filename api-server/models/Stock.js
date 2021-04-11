module.exports = function (sequelize, Datatypes) {
  var Stock = sequelize.define("Stock", {
    symbol: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
    alias: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Stock;
};
