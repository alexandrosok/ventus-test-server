const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');
const AuthValidations = require('../validations/auth.validations');
const validations = {
    Register: AuthValidations.Register,
    Login: AuthValidations.Login
};

/**
 * Login
 * @param req
 * @param res
 * @returns {Json | any | Promise<any>}
 */

const Login = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) {
        return res.status(401).json({errors: errors, success: false, type: 'validation'});
    }
    let {username, password} = req.body;

    UserModel.findOne({where: {username, password}}).then(user => {
        if (user) {
            const token = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET);

            res.cookie('jwt', token, {maxAge: 9000000000, httpOnly: false});
            res.send({
                status: "success",
                logged: true,
                user: {
                    username: user.username,
                    role: user.role
                },
                token
            });
        } else {
            errors.push({params: "auth", msg: "Login failed, please check the credentials !",});
            res.status(403).json({errors: errors, success: false, type: 'auth'});
        }
    }).catch(err => console.error(err));
};
/**
 * Register
 * @param req
 * @param res
 * @returns {Chai.Assertion}
 * @constructor
 */
const Register = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) {
        return res.status(401).json({errors: errors, success: false, type: 'validation'});
    }

    let {username, password, role} = req.body;

    UserModel.create({
        username,
        password,
        role
    }).then(user => {
        res.status(200).send({
            user,
            auth: true,
        }).end();
    }).catch(err => console.error(err));
};

module.exports = {validations, actions: {Register, Login}};
