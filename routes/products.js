// Import mysterious Router
const { Router } = require("express")
const controllers = require("../controllers/products")

// Instantiate the module
const router = Router()

// Define the routes
router.get("/", controllers.getProducts)
router.get("/:id", controllers.getProduct)
router.post("/", controllers.createProduct)
router.put("/:id", controllers.updateProduct)
router.delete("/:id", controllers.deleteProduct)

module.exports = router
