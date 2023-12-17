const { Router } = require("express");
const { getAllProducts } = require("../controllers/GET/getAllProducts");
const { getProductId } = require("../controllers/GET/getProductId");
const { postProduct } = require("../controllers/POST/postProduct");
const { putProduct } = require("../controllers/PUT/putProduct");
const { deleteProduct } = require("../controllers/DELETE/deleteProduct");
const { getAllProductsInactive } = require("../controllers/GET/getAllProductsInactive");

const router = Router();

router.get("/", function (req, res) {
  res.send("Backend Productos Angular");
});

router.post("/product", postProduct);
router.get("/product", getAllProducts);
router.get("/productinactive", getAllProductsInactive);
router.get("/product/:id", getProductId);
router.put("/product/:id", putProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;






