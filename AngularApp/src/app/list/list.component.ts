import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {EmployeeService } from '../shared/employee.service'
import {Employee } from '../shared/employee.model'
declare var M: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[EmployeeService]
})
export class ListComponent implements OnInit {
data:any;
  constructor(
    public employeeService:EmployeeService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.refreshEmployeeList()
  }
  refreshEmployeeList(){
    this.employeeService.getProductList().subscribe((res)=>{
     this.employeeService.employees = res['data'];

    })
  }
}


