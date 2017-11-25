import { Injectable } from '@angular/core'
import { IEmployee } from './employee'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { EmployeeInfo } from './EmployeeInfo'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/Observable/throw'

import 'rxjs/rx' //Reactive extension for JavaScript
import 'rxjs/add/operator/toPromise';



@Injectable()
export class EmployeeService {

    constructor(private _http: Http, private _router: Router) { }

    getEmployees(): Observable<EmployeeInfo[]> {
        
        return this._http.get("http://localhost:51880/api/Employee")
            .map((response: Response) => <EmployeeInfo[]>response.json())
            .catch(this.handleError);

    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }


    getEmployeeByCode(Id: string): Observable<EmployeeInfo> {
        debugger;
        return this._http.get("http://localhost:51880/Api/Employee/" + Id).delay(3000)
            .map((response: Response) => <EmployeeInfo>response.json()).catch(this.handleError);
    }


    saveEmployeeData(employee: EmployeeInfo): Observable<any> {

        let body = JSON.stringify(employee);
        let header = new Headers({ 'content-Type': 'application/json' });
        let option = new RequestOptions({ headers: header });

        return this._http.post('http://localhost:51880/Api/Employee', body, option)
            .map(this.extractData).catch(this.handelError);

        // this._router.navigate(['/employees']);

    }


    private extractData(res: Response) {
        if (res.ok) { alert('Employee Data Saved Successfully'); };
        // let body = res.json();
        // return body.data || {}; //returning empty object
       // this._router.navigate(['/employees']);
    }

    private handelError(error: any) {
        alert('error');
        console.log('post erroe: ', error);
        return Observable.throw(error.statusText);
    }


    deleteEmployee(Id: string): Observable<any> {
        return this._http.delete('http://localhost:60959/Api/Employee/' + Id);
    }
}
