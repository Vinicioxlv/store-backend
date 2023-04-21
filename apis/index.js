const express = require('express')
const router = express.Router()

const userRouter = require('./users')
const authRouter = require('./auth')
const authMiddleware = require('../middleware/authorization') 
const registerRouter = require('./register')

const productsRouter = require('./products')

router.use('/auth', authRouter)
router.use('/register', registerRouter)

router.use(authMiddleware)
router.use('/user', userRouter)

router.use('/products', productsRouter)

module.exports = router