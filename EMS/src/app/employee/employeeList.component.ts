import { Component, OnInit, Output } from '@angular/core';
import { IEmployee } from './employee'
import { EmployeeService } from './employee.service'
import { Http } from '@angular/http'
import { EmployeeInfo } from './EmployeeInfo'

import { ActivatedRoute, Router } from '@angular/router'


@Component({
    selector: 'my-employeeList',
    templateUrl: 'app/employee/employeeList.component.html',
    // providers: [EmployeeService]  //regsiter this in application root module for Singleton
})
export class EmployeeListComponent implements OnInit {

    //employeesa: any[] 
    employees: EmployeeInfo[];
    //  employees: IEmployee[] = [
    //    { code: "emp101", name: 'Tom', gender: 'Male', annualSalary: '55200', dateOfBirth: '25/6/1988'},
    //    { code: 'emp102', name: 'Jim', gender: 'Male', annualSalary: '55500', dateOfBirth: '26/6/1989' },
    //    { code: 'emp103', name: 'Sarah', gender: 'Female', annualSalary: '55600', dateOfBirth: '20/6/1990' },
    //    { code: 'emp104', name: 'Timmy', gender: 'Male', annualSalary: '55900', dateOfBirth: '14/6/1991' }
    //];



    statusMessage: string = 'Loading data. Please wait...';

    selectedEmployeeCountRadioButton: string = 'All';

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(x => x.gender == 'Male').length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(x => x.gender == 'Female').length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {

        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }


    constructor(private _employeeService: EmployeeService, private _activateRoute: ActivatedRoute, private _router: Router) { }

    //ngOnInit() {
    //    this.employees = this._employeeService.getEmployees();
    //}

    ngOnInit() {

        this._employeeService.getEmployees()
            .subscribe(employeeData => this.employees = employeeData,
            error => { console.error(error) });
        this.statusMessage = 'Problem with the service. Please try again after sometime';
    }




    addEmployeeButtonClick(): void {
        this._router.navigate(['/AddEmployee']);
    }



    deleteEmployeeButtonClick(empId: string): void {
        if (confirm('Are you sure you want to delete this employee?')) {
            this._employeeService.deleteEmployee(empId).subscribe(() =>this.deleted , Error => { alert('Some Error Occure, Please try after some time.') });
           
        }

    }

    deleted(): void {
        alert('Employee Deleted Successfuly');
        //window.location.reload();
        this._router.navigate(['/employees']);

    }


}