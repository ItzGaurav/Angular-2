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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/Observable/throw");
require("rxjs/rx"); //Reactive extension for JavaScript
require("rxjs/add/operator/toPromise");
var EmployeeService = (function () {
    function EmployeeService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get("http://localhost:51880/api/Employee")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    EmployeeService.prototype.getEmployeeByCode = function (Id) {
        debugger;
        return this._http.get("http://localhost:51880/Api/Employee/" + Id).delay(3000)
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    EmployeeService.prototype.saveEmployeeData = function (employee) {
        var body = JSON.stringify(employee);
        var header = new http_1.Headers({ 'content-Type': 'application/json' });
        var option = new http_1.RequestOptions({ headers: header });
        return this._http.post('http://localhost:51880/Api/Employee', body, option)
            .map(this.extractData).catch(this.handelError);
        // this._router.navigate(['/employees']);
    };
    EmployeeService.prototype.extractData = function (res) {
        if (res.ok) {
            alert('Employee Data Saved Successfully');
        }
        ;
        // let body = res.json();
        // return body.data || {}; //returning empty object
        // this._router.navigate(['/employees']);
    };
    EmployeeService.prototype.handelError = function (error) {
        alert('error');
        console.log('post erroe: ', error);
        return Observable_1.Observable.throw(error.statusText);
    };
    EmployeeService.prototype.deleteEmployee = function (Id) {
        return this._http.delete('http://localhost:60959/Api/Employee/' + Id);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map