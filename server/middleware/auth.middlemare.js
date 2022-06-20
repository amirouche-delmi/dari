const jwt = require('jsonwebtoken');
const { models } = require('mongoose');
const ParticulierModel = require('../models/particulier.model');

module.exports.checkParticulier = (req, res ,next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                res.locals.particulier = null;
                //res.cookie('jwt', '', { maxAge: 1});
                next();
            } else {
                let particulier = await ParticulierModel.findById(decodedToken.id);
                res.locals.particulier = particulier;
                next();
            }
        });
    } else {
        res.locals.particulier = null;
        next();
    }
}

module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err);
            } else {
                console.log(decodedToken.id);
                next()
            }
        });
    } else {
        console.log('No token');
    }
}