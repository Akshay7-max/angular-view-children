import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  phonenumber:string = "8999798993";
  constructor() { }

  ngOnInit(): void {
  }

}
