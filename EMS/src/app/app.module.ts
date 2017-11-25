import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http' // Dont forget ------
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmpopyeeTitlePipe } from './employee/employeeTitle.Pipe';
import { EmployeeCountComponent } from './employee/employeeCountComponent';
import { HomeComponent } from './Home/HomeComponent'
import { PageNotFoundComponent } from './Other/PageNotFoundComponent'
import { EmployeeService } from './employee/employee.service'
import { AddEmployeeComponent } from './employee/AddEmployee.Component'

import { TestComponent } from './Test/Test.Component'


const appRoute: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employee/:Id', component: EmployeeComponent },
    { path: 'AddEmployee', component: AddEmployeeComponent },
    { path: 'AddEmployee/:Id', component: AddEmployeeComponent },
    { path: 'test', component: TestComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];




//{useHash:true}
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoute)],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmpopyeeTitlePipe, EmployeeCountComponent, HomeComponent, PageNotFoundComponent, TestComponent, AddEmployeeComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})

export class AppModule { }
