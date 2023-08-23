import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { EmployeeComponent } from './employees/employee.component';
import { ChartComponent } from './chart/chart.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FoodListPipe } from './pipes/initial.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    EmployeeComponent,
    ChartComponent,
    FoodListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
