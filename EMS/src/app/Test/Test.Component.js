"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TestComponent = (function () {
    function TestComponent() {
        this.pageHeader = 'Testing';
        this.imagePath = 'https://www.marlabs.com/wp-content/uploads/2017/09/marlabs_logo.png';
        this.isDisabled = true;
        this.badHtml = 'hello <script>alert("hacked")</script> World';
        this.firstName = 'Tom';
        this.lastName = 'Hopkins';
        this.age = '20';
        this.city = 'London';
        this.columSpan = 2; // expample attribute binging -- Angular recomand Property  Binding
        this.showDetails = false;
        this.name = 'Tom';
        //Exapmles
        this.classToApply = 'italic bold'; // How to apply CSS class
        this.isBold = true; // How to apply CSS class
        this.fontSize = 50;
        this.employeeList = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 55200, dateOfBirth: '2/6/1988' },
            { code: 'emp102', name: 'Jim', gender: 'Male', annualSalary: 55500, dateOfBirth: '2/6/1989' },
            { code: 'emp103', name: 'Sarah', gender: 'Female', annualSalary: 55600, dateOfBirth: '2/6/1990' },
            { code: 'emp104', name: 'Timmy', gender: 'Male', annualSalary: 55900, dateOfBirth: '4/6/1991' }
        ];
    }
    TestComponent.prototype.getfullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    TestComponent.prototype.toggeleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    TestComponent.prototype.onClick = function () {
        alert('Clicked');
    };
    //constructor() {
    //    this.employeeList = [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 55200, dateOfBirth: '25/6/1988' },
    //        { code: 'emp102', name: 'Jim', gender: 'Male', annualSalary: 55500, dateOfBirth: '26/6/1989' },
    //        { code: 'emp103', name: 'Sarah', gender: 'Female', annualSalary: 55600, dateOfBirth: '20/6/1990' },
    //        { code: 'emp104', name: 'Timmy', gender: 'Male', annualSalary: 55900, dateOfBirth: '14/6/1991' }
    //    ];
    //}
    TestComponent.prototype.getEmployeeList = function () {
        this.employeeList = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 55200, dateOfBirth: '2/6/1988' },
            { code: 'emp102', name: 'Jim', gender: 'Male', annualSalary: 55500, dateOfBirth: '2/6/1989' },
            { code: 'emp103', name: 'Sarah', gender: 'Female', annualSalary: 55600, dateOfBirth: '2/6/1990' },
            { code: 'emp104', name: 'Timmy', gender: 'Male', annualSalary: 55900, dateOfBirth: '1/6/1991' },
            { code: 'emp105', name: 'Tony', gender: 'Male', annualSalary: 85900, dateOfBirth: '1/6/1981' }
        ];
    };
    TestComponent.prototype.trackByEmpCode = function (index, employeeList) {
        return employeeList.code;
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'my-test',
        templateUrl: './Test.Component.html',
    })
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=Test.Component.js.map