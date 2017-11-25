import { Component } from '@angular/core';

@Component({
    selector: 'my-app',

    template: ` <div class="container-fluid">
                        <ul class="nav nav-tabs">
                            <li routerLinkActive="active"><a routerLink="/home">Home</a></li>
                            <li routerLinkActive="active"><a routerLink="/employees">Employees</a></li>
                           <li routerLinkActive="active"><a routerLink="/test">Test</a></li>
                        </ul>
                        <br/>
                        <router-outlet></router-outlet>
                    </div>
<br/>`

})
export class AppComponent {

}
