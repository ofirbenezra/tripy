const BeUser = class User {
    constructor(id, userName, status, firstName, lastName, email, password, phone, freeFrom, freeUntil) {
        this.id = id;
        this.user_name = userName;
        this.status = status;
        this.first_name = firstName;
        this.last_name = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.freeFrom = freeFrom;
        this.freeUntil = freeUntil;
    }
};
module.exports = BeUser;