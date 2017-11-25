import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html'
  
})
export class EmployeeCountComponent{
   @Input() all: number;
   @Input() male: number;
   @Input() female: number;


   selectedRadioButtonValue: string = "All";

   @Output()
   countRadioButtonSelectionChange: EventEmitter<string> = new EventEmitter<string>();

   onradioButonSelectionChange() {
       this.countRadioButtonSelectionChange.emit(this.selectedRadioButtonValue);
   }

}


