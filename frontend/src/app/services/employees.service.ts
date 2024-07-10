import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

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

  addEmployee(employee: any) {
    return this.http.post(this.apiURL, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
