import { Component } from '@angular/core';
import { EmployeeInfo } from './EmployeeInfo'
import { EmployeeService } from './employee.service'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'my-AddEmployee',

    templateUrl: './AddEmployee.Component.html'

})
export class AddEmployeeComponent {
    constructor(private _employeeService: EmployeeService, private _activateRoute: ActivatedRoute, private _router: Router) { }

    model = new EmployeeInfo();
    button: string = 'Submit';

    isShowLoader: boolean = false;
    loaderImagePath: string = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/09b24e31234507.564a1d23c07b4.gif';


    submitForm(form: NgForm): void {

        this.validatePrimaryLanguage(this.model.primaryLanguage);
        if (this.hasPrimaryLanguageError) { return; }

        // console.log(form.value);
        // console.log(this.model);
        this._employeeService.saveEmployeeData(this.model)
            .subscribe(data => console.log('Success' + data), err => console.log('Error' + err));

        this._router.navigate(['/employees']);
        //  alert('Employee Data Saved Successfully');
    }




    languages: any[] = ['English', 'Spanish', 'Hindi', 'Others'];

    hasPrimaryLanguageError: boolean = false;
    validatePrimaryLanguage(value: any) {
        if (value == 'default') {
            this.hasPrimaryLanguageError = true;
        }
        else
            this.hasPrimaryLanguageError = false;
    }




    ngOnInit() {
        this.isShowLoader = true;
        let empId: string = this._activateRoute.snapshot.params["Id"];

        if (typeof empId !== 'undefined') {
            this.button = 'Update';
            this._employeeService.getEmployeeByCode(empId).subscribe(emp => this.model = emp);
        }
        this.isShowLoader = false;

    }



}
