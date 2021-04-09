const { Router } = require('express')
const controllers = require('../controllers/users')

const router = Router()

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verify)
router.put('/users/:id/add-to-cart/:productId', controllers.addToCart)
router.get('/users/:id/cart', controllers.getCart)

module.exports = router