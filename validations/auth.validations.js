const {body} = require('express-validator');

const AuthValidations = {
    Register: [
        body('username').isString(),
        body('password').isString(),
        body('role').isString(),
    ],
    Login: [
        body('username').isString(),
        body('password').isString()
    ],
};

module.exports = AuthValidations;

