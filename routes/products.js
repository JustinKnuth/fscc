// Import mysterious Router
const { Router } = require("express")
const controllers = require("../controllers/products")
const restrict = require('../helpers/restrict')

// Instantiate the module
const router = Router()

// Define the routes
router.get("/", controllers.getProducts)
router.get("/:id", controllers.getProduct)
router.post("/", restrict, controllers.createProduct)
router.put("/:id", restrict, controllers.updateProduct)
router.delete("/:id", restrict, controllers.deleteProduct)

module.exports = router
