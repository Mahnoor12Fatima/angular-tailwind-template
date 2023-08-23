import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  //foodList=[{n:'M'},{n:'M'},{n:'M'}];
   colors = ['#00308F','#71797E','#088F8F', '#B4C424', '#FFD700','#8b8589','#FFC000','#6CB4EE','#009E60','#811331'];

  constructor(private dataService:ServiceService) { }

  foodList:any;
  ngOnInit(): void {
    // When page is initiaized then following function would be called

    this.getFoodList()
  }

  // Function to get all Food List

  getFoodList(){
    this.foodList =this.dataService.getList()
  }
   // Function to add Food to Today  
  
  addToToday(data:any,index :number){
    this.dataService.addToTodayList(data)
    
    this.foodList.splice(index, 1);
  }
  

}