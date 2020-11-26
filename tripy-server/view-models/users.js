const BeUser = class User {
    constructor(id, userName, firstName, lastName, email, password, phone) {
        this.id = id;
        this.user_name = userName;
        this.first_name = firstName;
        this.last_name = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
};
module.exports = BeUser;