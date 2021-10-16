const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products");

router.get("", ProductController.getProducts);
router.post("", ProductController.addProduct);
router.get("/disponibles", ProductController.getProductoDisponible);
router.get("/entire/:id", ProductController.getProductIdLazyLoading);
router.get("/:id", ProductController.getProductId);
router.put("/:id",ProductController.updateProduct);
router.delete("/:id",ProductController.deleteProduct);

module.exports = router;