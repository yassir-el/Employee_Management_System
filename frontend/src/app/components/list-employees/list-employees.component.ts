import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.scss'
})
export class ListEmployeesComponent {

  constructor(
    private employeesService: EmployeesService
  ) {}

  employees: any = [];

  ngOnInit() {
    this.loadUsers();
    this.employeesService.userAdded$.subscribe(() => {
      console.log('User added asdas ');
      setTimeout(() => {
        this.loadUsers();
      }
      , 500);
    });
  }
  loadUsers() {
    this.employeesService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number) {
    this.employeesService.deleteEmployee(id).subscribe(() => {
      this.loadUsers();
    });
  }
}
