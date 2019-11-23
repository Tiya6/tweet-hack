const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')
const tweetsController = require('../controllers/tweets.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.get("/",tweetsController.index)

router.get("/users/new",usersController.new)
router.post("/users", usersController.create)

router.get('/login', usersController.login)
router.post('/login', usersController.doLogin)

router.post('/logout', usersController.logout)
router.post('/tweet', tweetsController.create)

module.exports = router