

export interface Employee{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    position: string;
    department: string;
}

export class EmployeeClass {
    public id = ''
    public firstName = ''
    public lastName = ''
    public email = ''
    public phoneNumber = ''
    public position = ''
    public department = ''

    constructor(employee?: Employee) {
        if (employee) {
            this.id = employee.id;
            this.firstName = employee.firstName;
            this.lastName = employee.lastName;
            this.email = employee.email;
            this.phoneNumber = employee.phoneNumber;
            this.position = employee.position;
            this.department = employee.department;
        }
    }
  }