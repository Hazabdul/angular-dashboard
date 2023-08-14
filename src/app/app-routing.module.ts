import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeadsComponent } from './leads/leads.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'gallery',component:GalleryComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'leads',component:LeadsComponent},
  {path:'contact',component:ContactComponent},



  


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
