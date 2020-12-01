export class User {
  id: string;
  userName: string;
  status: string;
  firstName: string;
  lastName: string;
  password: string;
  phone?: string;
  email?: string;
  freeFrom?: Date;
  freeUntil?: Date;

  constructor(id: string, userName: string, status: string, firstName: string, lastName: string, phone: string,
              email?: string, freeFrom?: Date, freeUntil?: Date) {
    this.id = id;
    this.userName = userName;
    this.status = status;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.freeFrom = freeFrom;
    this.freeUntil = freeUntil;
  }
}
