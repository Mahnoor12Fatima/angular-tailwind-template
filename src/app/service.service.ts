import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  todayList:any=[
    {
      "name":"Apple",
      "quantity":1,
      "carbohydrates":4,
      "calories":30,
      "fats":8,
      "protiens":10,
      
    },
    {
      "name":"Egg",
      "quantity":4,
      "carbohydrates":8,
      "calories":50,
      "fats":3,
      "protiens":20,
      
    }
  ];
  data:any = [
    {
      "name":"Rebeca Bouch",
      "country":"USA",
      "province":"Sanfransisco",
      "city":"New Yark",
      "created":'2023-03-03',
      "company":'Hyatt Ltd'  
    },
    {
      "name":"Johan Sminth",
      "country":"USA",
      "province":"New Yark",
      "city":"Washington DC",
      "created":'2023-03-03',
      "company":'Systems Ltd'  
    },
    {
      "name":"Stev Tom",
      "country":"India",
      "province":"Sanfransisco",
      "city":"New Yark",
      "created":'2023-03-03',
      "company":'Hyatt Ltd'  
    },
    {
      "name":"Johan Sminth",
      "country":"Canada",
      "province":"New Yark",
      "city":"Washington DC",
      "created":'2023-03-03',
      "company":'Techverx'  
    },
    {
      "name":"Boby May",
      "country":"Pakistan",
      "province":"New Yark",
      "city":"Washington DC",
      "created":'2023-03-03',
      "company":'Techverx'  
    },
    {
      "name":"David Bouch",
      "country":"Australia",
      "province":"Sanfransisco",
      "city":"New Yark",
      "created":'2023-03-03',
      "company":'Hyatt Ltd'  
    },
    {
      "name":"Johan Sminth",
      "country":"Canada",
      "province":"New Yark",
      "city":"Washington DC",
      "created":'2023-03-03',
      "company":'Techverx'  
    },
    {
      "name":"Stev Tom",
      "country":"India",
      "province":"Sanfransisco",
      "city":"New Yark",
      "created":'2023-03-03',
      "company":'Hyatt Ltd'  
    },
    {
      "name":"Rebeca Bouch",
      "country":"USA",
      "province":"Sanfransisco",
      "city":"New Yark",
      "created":'2023-03-03',
      "company":'Hyatt Ltd'  
    },
  ]
  private Url="./data.json";
  constructor(private http:HttpClient) { }
  getList():Observable<any>{
    return this.data
  }
  addToTodayList(data:any){
    this.todayList.push(data);
  }
  getTodayList():Observable<any>{
    return this.todayList;
  }
  removeToday(index:any){
    this.todayList.splice(index, 1);
    console.log(this.todayList)
  }
}
