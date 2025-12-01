import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { MailComponent } from './mail/mail.component';
import { FlipkartfakeComponent } from './flipkartfake/flipkartfake.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { StudentsComponent } from './students/students.component';
import { VehiclessComponent } from './vehicless/vehicless.component';
import { BankComponent } from './bank/bank.component';
import { WeatherComponent } from './weather/weather.component';
import { StudentssComponent } from './studentss/studentss.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { TaskComponent } from './task/task.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TextareaComponent } from './textarea/textarea.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent,
    HomeComponent,
    GalleryComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DirectivesComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehiclesComponent,
    MailComponent,
    FlipkartfakeComponent,
    PinterestComponent,
    CreatevehicleComponent,
    StudentsComponent,
    VehiclessComponent,
    BankComponent,
    WeatherComponent,
    StudentssComponent,
    CreateVehicleComponent,
    VehicleDetailsComponent,
    AccountDetailsComponent,
    CreateBankComponent,
    CreateUserComponent,
    TaskComponent,
    ParentComponent,
    ChildComponent,
    TextareaComponent,
    HighlightComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
