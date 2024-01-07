const { Router } = require("express");
const { getAllProducts } = require("../controllers/Product/GET/getAllProducts");
const { getProductId } = require("../controllers/Product/GET/getProductId");
const { postProduct } = require("../controllers/Product/POST/postProduct");
const { putProduct } = require("../controllers/Product/PUT/putProduct");
const { deleteProduct } = require("../controllers/Product/DELETE/deleteProduct");
const { getAllProductsInactive } = require("../controllers/Product/GET/getAllProductsInactive");
const { postUser } = require("../controllers/User/postUser");
const { getAllUsers } = require("../controllers/User/getAllUsers");
const { getUser } = require("../controllers/User/getUser");
const { updateUser } = require("../controllers/User/putUser");
const { login } = require("../controllers/User/login");
const { createCheckoutSession } = require("../controllers/Payment/create-checkout-session");
const { success } = require("../controllers/Payment/success");
const { cancel } = require("../controllers/Payment/cancel");
const { loginGoogle } = require("../controllers/User/loginGoogle");
const { createReview } = require("../controllers/Reviews/postReview");
const { postReviewProduct } = require("../controllers/Reviews/postReviewProduct");

const router = Router();
// Ruta /
router.get("/", function (req, res) {
  res.send("Backend Productos Angular");
});
// Products
router.post("/product", postProduct);
router.get("/product", getAllProducts);
router.get("/productinactive", getAllProductsInactive);
router.get("/product/:id", getProductId);
router.put("/product/:id", putProduct);
router.delete("/product/:id", deleteProduct);

// User

router.post("/user", postUser);
router.get("/user", getAllUsers);
router.put("/user/:id", updateUser);
router.get("/username", getUser);
router.post("/user/login", login)
router.post("/user/login-google", loginGoogle)

// Payment

router.post("/payment/create-checkout-session", createCheckoutSession)
router.get("/payment/success", success)
router.get("/payment/cancel", cancel)



// Reviews

router.post("/review/create", createReview)
router.post("/review-product", postReviewProduct)


module.exports = router;






