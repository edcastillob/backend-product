// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   sequelize.define(
//     "product",
//     {
//       id: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         primaryKey: true,
//         unique: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       description: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//       price: {
//         type: DataTypes.FLOAT,
//         allowNull: false,
//       },     
//       images: {
//         type: DataTypes.ARRAY(DataTypes.STRING),
//         allowNull: false,
//       },
//       isActive: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//       },
//     },
//     { timestamps: false }
//   );
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      category: {
        type: DataTypes.TEXT, // Nueva propiedad para la categoría
        allowNull: true, // Puedes ajustar esto según tus requerimientos
      },
    },
    { timestamps: false }
  );

  return Product;
};
