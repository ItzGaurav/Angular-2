import { Component } from '@angular/core';
import { IEmployee } from './employee'
import { ActivatedRoute, Router } from '@angular/router'
import { EmployeeService } from './employee.service'
import { EmployeeInfo } from './EmployeeInfo'



@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})
export class EmployeeComponent {

    employee: EmployeeInfo;

    constructor(private _employeeService: EmployeeService, private _activateRoute: ActivatedRoute, private _router: Router) { }
    ngOnInit() {

        let empId: string = this._activateRoute.snapshot.params["Id"];

        this._employeeService.getEmployeeByCode(empId).subscribe(emp => this.employee = emp);

    }

    onbackButtonClick(): void {
        this._router.navigate(['/employees']);
    }

}