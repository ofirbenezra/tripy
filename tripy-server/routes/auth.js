var express = require('express');
const BeUser = require('../view-models/users');
var router = express.Router();
const { User } = require('../sequelize')
const { v4: uuidv4 } = require('uuid')

router.post('/login', function(req, res, next) {
    const vmUser = req.body;
    const user = new BeUser(uuidv4(),vmUser.userName, vmUser.firstName, vmUser.lastName, vmUser.email, vmUser.password, vmUser.phone);
    User.create(user).then(data => {
        res.send(user);
    })
});

module.exports = router;