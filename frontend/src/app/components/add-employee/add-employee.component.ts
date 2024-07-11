import { Employee, EmployeeClass } from './../../models/employee.model';
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})

export class AddEmployeeComponent {
  @Output() changeShowForm = new EventEmitter<boolean>();
  @Input() showForm: boolean = false;
  @Input() employee: Employee = new EmployeeClass();

  public cancleForm() {
    this.changeShowForm.emit(false);
    this.renderer.removeClass(document.body, 'modal-open');
  }

  public showFormFn() {
    this.renderer.addClass(document.body, 'modal-open');
    this.changeShowForm.emit(true);
  }

  constructor(
    private employeesService: EmployeesService,
    private renderer: Renderer2
  ) {}

  addEmployee(form: any) {
    console.log(form);
    if (form.invalid) {
      return;
    }
    this.employeesService.addEmployee(this.employee).subscribe((data: any) => {
      this.employeesService.notifyUserAdded();
      this.cancleForm();
    });
  }

  updateEmployee(form: any) {
    if (form.invalid) {
      return;
    }
    this.employeesService.updateEmployee(this.employee).subscribe((data: any) => {
      this.employeesService.notifyUserAdded();
      this.cancleForm();
    });
  }

  deleteEmployee() {
    this.employeesService.deleteEmployee(this.employee.id).subscribe((data: any) => {
      this.employeesService.notifyUserAdded();
      this.cancleForm();
    });
  }

}
