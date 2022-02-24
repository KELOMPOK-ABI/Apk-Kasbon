'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kasbon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kasbon.belongsTo(models.User)
    }
  }
  Kasbon.init({
    Nomorkasbon: DataTypes.INTEGER,
    Bagian: DataTypes.STRING,
    Penerima: DataTypes.STRING,
    TanggalPersekot: DataTypes.INTEGER,
    Jumlah: DataTypes.INTEGER,
    Jumlahdibayar: DataTypes.INTEGER,
    Uraian: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kasbon',
  });
  return Kasbon;
};