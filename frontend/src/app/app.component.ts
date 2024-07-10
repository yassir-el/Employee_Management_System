import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEmployeesComponent } from "./components/list-employees/list-employees.component";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListEmployeesComponent, AddEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
