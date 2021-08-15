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
  SkillsForm: FormGroup| any;

  ngOnInit(): void {

    this.EmpployeeForm = new FormGroup({
      FullName: new FormControl(),
      Email: new FormControl()
    })

    // create skill form group
    this.SkillsForm = new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),

    })
  }



    OnSubmit(): void {

      console.log(this.EmpployeeForm.controls.FullName.touched);
      console.log(this.EmpployeeForm.get('FullName').value);

  }

}
