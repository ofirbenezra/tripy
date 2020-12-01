const cryptoService = require('../services/crypto/service');
const mailer = require('../services/mailer/service');
const { User } = require('../sequelize')
const BeUser = require('../view-models/users');
const { v4: uuidv4 } = require('uuid')

module.exports = {
    signup: signup
}

async function signup(vmUser) {
    const encryptedPassword = cryptoService.encrypt(vmUser.password);
    const status = 'ONLINE';
    const user = new BeUser(uuidv4(),vmUser.userName, status, vmUser.firstName, vmUser.lastName, vmUser.email, encryptedPassword, vmUser.phone);
    const data = await User.create(user);

    const clonedUser = {...data.dataValues};
    delete clonedUser.password;

    const toEncrypt = JSON.stringify({user: clonedUser, timestamp: new Date()});
    const session = cryptoService.encrypt(toEncrypt);

    mailer.sendEmail('a@a.com', 'b@b.com', '', '', '');
    return {user :clonedUser, session};
}