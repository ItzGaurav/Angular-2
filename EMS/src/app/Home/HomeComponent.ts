import { Component } from '@angular/core'

@Component({
    template: `<div class='container-fluid'>
                    <h2><code>Employee Management System</code></h2>
                    <img [src]='imagePath'/>
               </div>
    
    `

})
export class HomeComponent {
    // imagePath: string
    imagePath: string = 'http://shecoaches.org/wp-content/uploads/2017/05/Employee-Management-System.jpg';
}