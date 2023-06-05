import { Component, OnInit } from '@angular/core';
import { KPIService } from '../service/kpi.service';

@Component({
  selector: 'app-kpi-list',
  templateUrl: './kpi-list.component.html',
  styleUrls: ['./kpi-list.component.scss']
})
export class KpiListComponent implements OnInit {

  Employee:any = [];
  constructor(private apiService: KPIService) { 
    this.readEmployee();
  }
  ngOnInit() {}
  readEmployee(){
    this.apiService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }

}
