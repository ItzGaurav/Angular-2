import { Component, OnInit, Output } from '@angular/core';

@Component({
    selector: 'my-test',
    templateUrl:'./Test.Component.html',

})
export class TestComponent {


    pageHeader: string = 'Testing';
    imagePath: string = 'https://www.marlabs.com/wp-content/uploads/2017/09/marlabs_logo.png';

    isDisabled: boolean = true;
    badHtml: string = 'hello <script>alert("hacked")</script> World';
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';

    getfullName(): string {
        return this.firstName + ' ' + this.lastName;

    }


    age: string = '20';
    city: string = 'London';
    columSpan: number = 2; // expample attribute binging -- Angular recomand Property  Binding

    showDetails: boolean = false;

    toggeleDetails(): void {
        this.showDetails = !this.showDetails;
    }

    name: string = 'Tom';

    //Exapmles

    classToApply: string = 'italic bold';  // How to apply CSS class
    isBold: boolean = true;  // How to apply CSS class
    fontSize: number = 50;

    onClick(): void {
        alert('Clicked');
    }






    employeeList: any[] = [
        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 55200, dateOfBirth: '2/6/1988' },
        { code: 'emp102', name: 'Jim', gender: 'Male', annualSalary: 55500, dateOfBirth: '2/6/1989' },
        { code: 'emp103', name: 'Sarah', gender: 'Female', annualSalary: 55600, dateOfBirth: '2/6/1990' },
        { code: 'emp104', name: 'Timmy', gender: 'Male', annualSalary: 55900, dateOfBirth: '4/6/1991' }
    ];

    //constructor() {

    //    this.employeeList = [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 55200, dateOfBirth: '25/6/1988' },
    //        { code: 'emp102', name: 'Jim', gender: 'Male', annualSalary: 55500, dateOfBirth: '26/6/1989' },
    //        { code: 'emp103', name: 'Sarah', gender: 'Female', annualSalary: 55600, dateOfBirth: '20/6/1990' },
    //        { code: 'emp104', name: 'Timmy', gender: 'Male', annualSalary: 55900, dateOfBirth: '14/6/1991' }
    //    ];
    //}

    getEmployeeList(): void {
        this.employeeList = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 55200, dateOfBirth: '2/6/1988' },
            { code: 'emp102', name: 'Jim', gender: 'Male', annualSalary: 55500, dateOfBirth: '2/6/1989' },
            { code: 'emp103', name: 'Sarah', gender: 'Female', annualSalary: 55600, dateOfBirth: '2/6/1990' },
            { code: 'emp104', name: 'Timmy', gender: 'Male', annualSalary: 55900, dateOfBirth: '1/6/1991' },
            { code: 'emp105', name: 'Tony', gender: 'Male', annualSalary: 85900, dateOfBirth: '1/6/1981' }
        ];

    }

    trackByEmpCode(index: number, employeeList: any): string {
        return employeeList.code;
    }
}