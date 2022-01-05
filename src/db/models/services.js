const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Services.init(
    {
      port: DataTypes.INTEGER,
      host: DataTypes.STRING,
      path: DataTypes.STRING,
      token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Services'
    }
  );
  return Services;
};
