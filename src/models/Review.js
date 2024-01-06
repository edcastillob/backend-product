// models/Review.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Review = sequelize.define(
    'Review',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
      },      
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
       },
    },
    { timestamps: true }
  );

  return Review;
};
