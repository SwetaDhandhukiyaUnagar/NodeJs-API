'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define('UserInfo', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  UserInfo.associate = function(models) {
    // associations can be defined here
  };
  return UserInfo;
};