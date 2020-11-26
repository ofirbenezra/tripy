var express = require('express');
var router = express.Router();
const controller = require('../controllers/auth.controller');
const _ = require('lodash');

router.post('/login', async function(req, res, next) {
    try {
        const vmUser = req.body;
        const { user, session } = await controller.login(vmUser);
        res.status(200).send({user, session});
    }
    catch (error) {
        const errMessage = _.get(error, 'message', 'error occurred');
        const errCode = _.get(error, 'status', 500);
        res.status(errCode).json({message: 'error occurred', error: errMessage});
    }

});

module.exports = router;