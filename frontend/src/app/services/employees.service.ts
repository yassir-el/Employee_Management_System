import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, first } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}
  private userAddedSource = new BehaviorSubject<void>(undefined);
  userAdded$ = this.userAddedSource.asObservable();

  notifyUserAdded() {
    this.userAddedSource.next();
  }

  apiURL = 'http://localhost:5097/api/employees';

  getEmployees() {
    return this.http.get(this.apiURL);
  }

  addEmployee(employee: Employee) {
    return this.http.post(this.apiURL, {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      position: employee.position,
      department: employee.department
    });
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  updateEmployee(employee: any) {
    return this.http.put(`${this.apiURL}/${employee.id}`, employee);
  }
}
