export class User {
  id: string;
  firstName: string;
  lastName: string;
  phone?: string;
  email?: string;

  constructor(id: string, firstName: string, lastName: string, phone: string, email?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }
}
