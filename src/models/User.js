const { DataTypes } = require('sequelize');
const Review = require('./Review')

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: 'default'
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
       },
      fullname: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );


  return User;
};
