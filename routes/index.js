// Table of contents for all routes
const { Router } = require('express')
const productsRouter = require('./products');
const usersRouter = require('./users');

const router = Router();

// define base route for api
router.get('/', (req, res) => res.send('This is the api root!'))

// any api that comes in with / directs to usersRouter
router.use('/', usersRouter);
// any api with /products directs to productsRouter
router.use('/products', productsRouter);

module.exports = router