'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    name: DataTypes.STRING
  }, {});
  Application.associate = function(models) {
    Application.hasMany(models.Feature, { onDelete: "cascade" })
  };
  return Application;
};