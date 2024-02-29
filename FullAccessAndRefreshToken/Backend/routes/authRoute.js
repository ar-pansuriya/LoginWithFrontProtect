const express = require('express');
const { PostSignup, PostLogin, RefreshToken } = require('../controller/authController');
const router = express.Router();

router.post('/signup',PostSignup);
router.post('/login',PostLogin);
router.get('/refresh',RefreshToken);



module.exports = router;