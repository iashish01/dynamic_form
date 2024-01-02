import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class JsonformService {

  private _formGroup!: FormGroup;
  url = '/assets/form.json';
  jsonData: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this._formGroup = this.formBuilder.group({});
  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }
  
  getData(): Observable<any> {
    console.log("jsons service is calling");
    return this.http.get(this.url);
  }

  createFromJson(jsonData: any): FormGroup {
    const formGroup = new FormGroup({});
    console.log("jsonData:-",jsonData);
    console.log("jsons service createFormJson is calling");
    if (jsonData.fields) {
      jsonData.fields.forEach((field: any) => {
        formGroup.addControl(field.name, new FormControl(field.value || '', this.getValidators(field)));
      });
    }
    console.log("create form json",formGroup.value);
    return formGroup;
  }

  private getValidators(field:any){
    const validators=[];
    if (field.required) {
      console.log("jsons service condition is calling");
      validators.push(Validators.required);
    }
    return validators;
  }
}
