'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Feature.associate = function(models) {
    Feature.belongsTo(models.Application, { foreignKey: { allowNull : false } })
  }; // 'appId'
  return Feature;
};