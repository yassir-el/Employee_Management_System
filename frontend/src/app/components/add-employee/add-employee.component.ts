import { Employee, EmployeeClass } from './../../models/employee.model';
import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})

export class AddEmployeeComponent {
  public employee : Employee = new EmployeeClass();

  constructor(
    private employeesService: EmployeesService
  ) {}

  addEmployee() {
    this.employeesService.addEmployee(this.employee).subscribe((data: any) => {
      this.employeesService.notifyUserAdded();
      this.employee = new EmployeeClass();
    });
  }
}
