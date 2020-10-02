import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Employee } from './employee.model';
import { computeMsgId } from '@angular/compiler';

@Injectable(

)
export class EmployeeService {
selectedEmployee:Employee;
employees:Employee[]
readonly baseURL = 'http://localhost:3000/user';

  constructor(private http:HttpClient) { }

postItem(formData){
  return this.http.post(this.baseURL+'/productCreate',formData
  )
 }

  getProductList(){
    return this.http.get(this.baseURL+'/findAllProduct')
  }

}
