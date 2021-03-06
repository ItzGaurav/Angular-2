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
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
var EmployeeComponent = (function () {
    function EmployeeComponent(_employeeService, _activateRoute, _router) {
        this._employeeService = _employeeService;
        this._activateRoute = _activateRoute;
        this._router = _router;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empId = this._activateRoute.snapshot.params["Id"];
        this._employeeService.getEmployeeByCode(empId).subscribe(function (emp) { return _this.employee = emp; });
    };
    EmployeeComponent.prototype.onbackButtonClick = function () {
        this._router.navigate(['/employees']);
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-employee',
        templateUrl: 'app/employee/employee.component.html'
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute, router_1.Router])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map