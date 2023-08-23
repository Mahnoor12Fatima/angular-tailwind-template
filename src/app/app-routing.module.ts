import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { EmployeeComponent } from './employees/employee.component';
import{FoodListComponent} from './food-list/food-list.component';
const routes: Routes = [
  {path: 'chart', component: ChartComponent },
  {path: 'foodList', component: FoodListComponent },
  {path: 'employee', component: EmployeeComponent },
  {path: '', component: EmployeeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
