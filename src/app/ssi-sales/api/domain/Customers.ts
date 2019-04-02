export class Customers {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone:  0;
  email: string;
  comment: string;
}
export class CustomersDTO {

  constructor(id: string,
              firstName: string,
              lastName: string,
              address: string,
              phone:  0,
              email: string,
              comment: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.comment = comment;
  }

  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone:  0;
  email: string;
  comment: string;
}
