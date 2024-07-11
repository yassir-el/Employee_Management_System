import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEmployeesComponent } from "./components/list-employees/list-employees.component";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { Employee, EmployeeClass } from './models/employee.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListEmployeesComponent, AddEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public showForm: boolean = false;
  public employee: Employee = new EmployeeClass();

  public changeShowForm(showForm: boolean) {
    this.employee = new EmployeeClass();
    this.showForm = showForm;
  }

  editEmployee(employee: Employee) {
    this.employee = new EmployeeClass(employee);
    this.showForm = true;
  }
}
