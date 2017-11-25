"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService, _activateRoute, _router) {
        this._employeeService = _employeeService;
        this._activateRoute = _activateRoute;
        this._router = _router;
        //  employees: IEmployee[] = [
        //    { code: "emp101", name: 'Tom', gender: 'Male', annualSalary: '55200', dateOfBirth: '25/6/1988'},
        //    { code: 'emp102', name: 'Jim', gender: 'Male', annualSalary: '55500', dateOfBirth: '26/6/1989' },
        //    { code: 'emp103', name: 'Sarah', gender: 'Female', annualSalary: '55600', dateOfBirth: '20/6/1990' },
        //    { code: 'emp104', name: 'Timmy', gender: 'Male', annualSalary: '55900', dateOfBirth: '14/6/1991' }
        //];
        this.statusMessage = 'Loading data. Please wait...';
        this.selectedEmployeeCountRadioButton = 'All';
    }
    EmployeeListComponent.prototype.getTotalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeeCount = function () {
        return this.employees.filter(function (x) { return x.gender == 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeeCount = function () {
        return this.employees.filter(function (x) { return x.gender == 'Female'; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    //ngOnInit() {
    //    this.employees = this._employeeService.getEmployees();
    //}
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) { console.error(error); });
        this.statusMessage = 'Problem with the service. Please try again after sometime';
    };
    EmployeeListComponent.prototype.addEmployeeButtonClick = function () {
        this._router.navigate(['/AddEmployee']);
    };
    EmployeeListComponent.prototype.deleteEmployeeButtonClick = function (empId) {
        var _this = this;
        if (confirm('Are you sure you want to delete this employee?')) {
            this._employeeService.deleteEmployee(empId).subscribe(function () { return _this.deleted; }, function (Error) { alert('Some Error Occure, Please try after some time.'); });
        }
    };
    EmployeeListComponent.prototype.deleted = function () {
        alert('Employee Deleted Successfuly');
        //window.location.reload();
        this._router.navigate(['/employees']);
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'my-employeeList',
        templateUrl: 'app/employee/employeeList.component.html',
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute, router_1.Router])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map