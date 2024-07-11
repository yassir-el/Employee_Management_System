import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule, NgFor } from '@angular/common';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [
    NgFor,
    CommonModule
  ],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.scss'
})
export class ListEmployeesComponent {
  @Output() editEmployee = new EventEmitter<Employee>();

  public searchBy = '';

  constructor(
    private employeesService: EmployeesService,
    private renderer: Renderer2
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

  editEmployeeFn(id: string) {
    this.renderer.addClass(document.body, 'modal-open');
    this.editEmployee.emit(this.employees.find((employee: Employee) => employee.id === id));
  }


  empSortBy(by: string, value: string) {
    this.employees.sort((a: any, b: any) => {
      console.log('a: ', a[by]);
      console.log('b: ', b[by]);
      if (a[by] < b[by]) {
        return -1;
      }
      if (a[by] > b[by]) {
        return 1;
      }
      return 0;
    });
    console.log('Sorted by: ', this.employees);
    this.searchBy = value;
  }
}
