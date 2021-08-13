import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';

const routes: Routes = [
  
  { path: 'create', component: CreateEmployeeComponent } ,
  { path: 'list', component: ListEmployeesComponent } ,
  // ---------------------------Wildcard as a Catch-All Route-----------------------------------
  { path: '**', redirectTo: '/list' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
