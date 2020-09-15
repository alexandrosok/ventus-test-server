const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/auth.controller');
//message api


router.post('/login', AuthController.validations.Login, AuthController.actions.Login);
router.post('/register', AuthController.validations.Register, AuthController.actions.Register);

module.exports = router;
