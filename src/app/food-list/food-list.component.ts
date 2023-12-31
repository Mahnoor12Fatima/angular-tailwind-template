import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  
  constructor(private dataService:ServiceService) { }
  todayList:any;
  colors = ['#00308F','#71797E','#088F8F', '#B4C424', '#FFD700','#8b8589','#FFC000','#6CB4EE','#009E60','#811331'];
  originalList:any;
  ngOnInit(): void {
    this.getTodayList()
  }

  
  // Function to get today list by adding sum of each in last row
  getTodayList(){
    this.todayList=[]
    this.originalList = this.dataService.getTodayList()  //populated today list
    this.todayList = JSON.parse(JSON.stringify(this.dataService.getTodayList()))

    
    // Made an object which calculate sum of each elements
    var obj={
      "name":"Total",
      "quantity":this.sum(this.todayList , 'quantity'),
      "carbohydrates":this.sum(this.todayList , 'carbohydrates'),
      "calories":this.sum(this.todayList , 'calories'),
      "fats":this.sum(this.todayList , 'fats'),
      "protiens":this.sum(this.todayList , 'protiens'),
      "last": true
    }

    //Pushing this object to today list to display sums in last row
    if(this.todayList.length>0){
      this.todayList.push(obj)
    }
  }

  // Function to calculate sum of perticular element from array
  sum(items:any, prop:any) {
    return items.reduce((a:any, b:any) => {
      return a + b[prop];
    }, 0);
  }
  
  // Function to remove perticular element from today list
  remove(index:number){
    this.dataService.removeToday(index);
    this.getTodayList()
  }
}
