import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MailComponent } from './mail/mail.component';
import { FlipkartfakeComponent } from './flipkartfake/flipkartfake.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { StudentsComponent } from './students/students.component';
import { VehiclessComponent } from './vehicless/vehicless.component';
import { BankComponent } from './bank/bank.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { AuthGuard } from './auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [ 
  //default routing
  {path:'login', component:LoginComponent},

  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard],  children:[
     // child routing
    {path:'home', component:HomeComponent},
     //{path:'gallery', component:GalleryComponent},
     {path:'welcome', component:WelcomeComponent},
     {path:'databinding', component:DataBindingComponent},
     {path:'calculator', component:CalculatorComponent},
     {path:'rectangle', component:RectangleComponent},
     {path:'circle', component:CircleComponent},
     {path:'bmi', component:BMIComponent},
     {path:'directives', component:DirectivesComponent},
     {path:'employee', component:EmployeeComponent},
      {path:'flipkart', component:FlipkartComponent},
       {path:'vehicles', component:VehiclesComponent},
       {path:'mail', component:MailComponent},
       {path:'flipkartfake', component:FlipkartfakeComponent},
       {path:'pinterest', component:PinterestComponent},
       {path:'createvehicle', component:CreatevehicleComponent},
       {path:'students', component:StudentsComponent},
       {path:'vehicless', component:VehiclessComponent},
       {path:'bank', component:BankComponent},
       {path:'account-details/:id', component:AccountDetailsComponent},
       {path:'create-bank', component:CreateBankComponent},
       {path:'edit-bank/:id', component:CreateBankComponent},
     {path:'weather', component:WeatherComponent},
     {path:'create-vehicle', component:CreateVehicleComponent},
     {path:'edit-vehicle/:id', component:CreateVehicleComponent},
      {path:'vehicle-details/:id', component:VehicleDetailsComponent},
      {path:'create-user', component:CreateUserComponent},
      {path:'task', component:TaskComponent},




     {path:'', component:HomeComponent }

    //  {path:'logout', component:lo},
  ]}, //parent routing
  {path:'', component:LoginComponent },

  {path:'**', component:ErrorComponent}, //wildcard/error routing, If we give anything below error routing it won't display
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
