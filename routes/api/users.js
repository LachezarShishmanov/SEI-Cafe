const express = require('express')

const router = express.Router()
const usersCtrl = require('../../controllers/api/users');


// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);



router.post('/', usersCtrl.create)
router.post('/login', usersCtrl.login)

module.exports = router;