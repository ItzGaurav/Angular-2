"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http"); // Dont forget ------
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var employeeTitle_Pipe_1 = require("./employee/employeeTitle.Pipe");
var employeeCountComponent_1 = require("./employee/employeeCountComponent");
var HomeComponent_1 = require("./Home/HomeComponent");
var PageNotFoundComponent_1 = require("./Other/PageNotFoundComponent");
var employee_service_1 = require("./employee/employee.service");
var AddEmployee_Component_1 = require("./employee/AddEmployee.Component");
var Test_Component_1 = require("./Test/Test.Component");
var appRoute = [
    { path: 'home', component: HomeComponent_1.HomeComponent },
    { path: 'employees', component: employeeList_component_1.EmployeeListComponent },
    { path: 'employee/:Id', component: employee_component_1.EmployeeComponent },
    { path: 'AddEmployee', component: AddEmployee_Component_1.AddEmployeeComponent },
    { path: 'AddEmployee/:Id', component: AddEmployee_Component_1.AddEmployeeComponent },
    { path: 'test', component: Test_Component_1.TestComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent_1.PageNotFoundComponent }
];
//{useHash:true}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoute)],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, employeeList_component_1.EmployeeListComponent, employeeTitle_Pipe_1.EmpopyeeTitlePipe, employeeCountComponent_1.EmployeeCountComponent, HomeComponent_1.HomeComponent, PageNotFoundComponent_1.PageNotFoundComponent, Test_Component_1.TestComponent, AddEmployee_Component_1.AddEmployeeComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [employee_service_1.EmployeeService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map