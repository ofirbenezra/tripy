export class User {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  phone?: string;
  email?: string;

  constructor(id: string, userName: string, firstName: string, lastName: string, password: string, phone: string, email?: string) {
    this.id = id;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.phone = phone;
    this.email = email;
  }
}
