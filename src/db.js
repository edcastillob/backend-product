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

const ProductModel = require("./models/Product")(sequelize);
const UserModel = require("./models/User")(sequelize);
const PaymentModel = require("./models/Payment")(sequelize);
const ReviewModel = require('./models/Review')(sequelize);
const ProviderModel = require('./models/Provider')(sequelize);


module.exports = {
  Product: ProductModel,
  User: UserModel,
  Payment: PaymentModel,
  Review: ReviewModel,
  Provider: ProviderModel,
  sequelize,
};
