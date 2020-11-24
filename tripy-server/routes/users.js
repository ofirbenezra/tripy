var express = require('express');
var router = express.Router();
const UserModel = require('../models/users')
const { User } = require('../sequelize')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then(data => {
    res.send(data);
  })
});

router.post('/', function(req, res, next) {
  const user = req.body;
  User.create(user).then(data => {
    res.send(user);
  })
});

router.put('/', function(req, res, next) {
  const user = req.body;
  User.update(user, { where: { id: user.id}}).then(data => {
    res.send(user);
  })
});

router.delete('/:id', function(req, res, next) {
  User.destroy({ where: { id: req.params.id}}).then(data => {
    res.sendStatus(200);
  })
});

module.exports = router;
