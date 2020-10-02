import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { NgForm,FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Ng2ImgMaxService } from 'ng2-img-max';
import {EmployeeService } from '../shared/employee.service'
import {Employee } from '../shared/employee.model'
import { from } from 'rxjs';
declare var M: any;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[EmployeeService],

})
export class AddComponent implements OnInit {
  public addActivityForm: FormGroup;
  ramPattern = '[0-9]';
  userName = '[a-zA-Z ]*'
  isValidFormSubmitted = null;
  validateEmail = true;
  ngForm:FormGroup;
  data:any;
  Name: any;
  RAM: number;
  Processor: any;
  Descrition: any;
  Type: any
  public employeeForm: FormGroup;
  constructor(
    public employeeService:EmployeeService,
    private activatedRoute: ActivatedRoute,
    private ng2ImgMaxService:Ng2ImgMaxService,
    ) {}

  ngOnInit(): void {
    this.resetForm()
  }
  resetForm(form?: NgForm) {
  let blank
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      Name: '',
      RAM: blank,
      Processor: '',
      Descrition: '',
      Type: ''
    }
  }
  onSubmit(form:NgForm){
        this.employeeService.postItem(form.value).subscribe((res)=>{
        if(res['responseCode']== 404){
         return M.toast({html:res['responseMessage'],classes:"rounded"});
        }else if(res['responseCode']== 500){
        return M.toast({html:res['responseMessage'],classes:"rounded"});
        }
        else if(res['responseCode']== 200){
          this.resetForm(form)
          window.location.href = "/list";
           M.toast({html:'Create User Successfully',classes:"rounded"});
        }
      }    
      )
  }
}
