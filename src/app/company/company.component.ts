import { Component,ViewChildren, QueryList } from '@angular/core';
import {EmployeeComponent} from "../employee/employee.component";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  companyname: string = "ABC Company";
  
  @ViewChildren(EmployeeComponent) emp!:QueryList<EmployeeComponent>;

  onClickMeClicked() {
    console.log(this.emp);
    var a = this.emp.toArray();
    for(var i=0; i<a.length; i++){
      a[i].empname = "Ram";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
