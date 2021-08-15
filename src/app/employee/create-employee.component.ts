import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  EmpployeeForm: FormGroup | any;
  SkillsForm: FormGroup | any;

  ngOnInit(): void {


    // create EmpployeeF form group
    this.EmpployeeForm = this.fb.group({
      FullName:[''],
      Email: [''],

      // create skill form group
      Skills: this.fb.group({

        skillName:[''],
        experienceInYears: [''],
        proficiency: ['beginner'],

      })
    })


  }



  OnSubmit(): void {

    console.log(this.EmpployeeForm.controls.FullName.touched);
    console.log(this.EmpployeeForm.get('FullName').value);

  }

  LoadDataClick(): void {

    this.EmpployeeForm.patchValue({

      FullName: 'Fáusio Luis Matsinhe',
      Email: 'FausioLuis@gmail.com',

      // Skills:{
      //   skillName: '.Net',
      //   experienceInYears: 6,
      //   proficiency: 'advanced'
      // }
    })
  }

}
