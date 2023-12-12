const { Product } = require("../../db");

async function getAllProductsInactive(req, res) {
 
  try {   
      const products = await Product.findAll({
        where: {
          isActive: false,
        },
        attributes: [
          "id",
          "name",
          "description",
          "price",
          "images",
          "category",
          "isActive",
        ],      
      });
  
      return res
        .status(200)
        .json({ products });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
module.exports = {
  getAllProductsInactive,
};
