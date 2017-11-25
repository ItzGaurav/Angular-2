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
var EmployeeInfo_1 = require("./EmployeeInfo");
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(_employeeService, _activateRoute, _router) {
        this._employeeService = _employeeService;
        this._activateRoute = _activateRoute;
        this._router = _router;
        this.model = new EmployeeInfo_1.EmployeeInfo();
        this.button = 'Submit';
        this.isShowLoader = false;
        this.loaderImagePath = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/09b24e31234507.564a1d23c07b4.gif';
        this.languages = ['English', 'Spanish', 'Hindi', 'Others'];
        this.hasPrimaryLanguageError = false;
    }
    AddEmployeeComponent.prototype.submitForm = function (form) {
        this.validatePrimaryLanguage(this.model.primaryLanguage);
        if (this.hasPrimaryLanguageError) {
            return;
        }
        // console.log(form.value);
        // console.log(this.model);
        this._employeeService.saveEmployeeData(this.model)
            .subscribe(function (data) { return console.log('Success' + data); }, function (err) { return console.log('Error' + err); });
        this._router.navigate(['/employees']);
        //  alert('Employee Data Saved Successfully');
    };
    AddEmployeeComponent.prototype.validatePrimaryLanguage = function (value) {
        if (value == 'default') {
            this.hasPrimaryLanguageError = true;
        }
        else
            this.hasPrimaryLanguageError = false;
    };
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isShowLoader = true;
        var empId = this._activateRoute.snapshot.params["Id"];
        if (typeof empId !== 'undefined') {
            this.button = 'Update';
            this._employeeService.getEmployeeByCode(empId).subscribe(function (emp) { return _this.model = emp; });
        }
        this.isShowLoader = false;
    };
    return AddEmployeeComponent;
}());
AddEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-AddEmployee',
        templateUrl: './AddEmployee.Component.html'
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute, router_1.Router])
], AddEmployeeComponent);
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=AddEmployee.Component.js.map