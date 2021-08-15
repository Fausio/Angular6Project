import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  EmpployeeForm : FormGroup| any;

  ngOnInit(): void {

    this.EmpployeeForm = new FormGroup({

      FullName: new FormControl(),
      Gender: new FormControl

    })
  }

}
