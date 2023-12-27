require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

const ProductModel = require("./models/product")(sequelize);
const UserModel = require("./models/User")(sequelize);

module.exports = {
  Product: ProductModel,
  User: UserModel,
  sequelize,
};
