import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JsonformService } from '../../service/jsonform.service'; 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.css']
})
export class FormRenderComponent implements OnInit {

  // public form!: FormGroup;
  //form=new FormGroup({});

  @Input() jsonConfig: any;
  form!: FormGroup;

  //url = '/assets/form.json';
  
  jsonData:any;

  constructor(private formBuilder: FormBuilder,private jsonFormService:JsonformService,private router: Router) {}

  ngOnInit(): void {
      //   this.form=this.formBuilder.group({
      //   firstName:new FormControl(''),
      //   email:new FormControl(''),
      //   date:new FormControl('')
      // })
      this.jsonFormService.getData().subscribe((data)=>{
      this.jsonData=data;
      console.log(this.jsonData,"this is json data");
      this.form = this.jsonFormService.createFromJson(this.jsonData);

      // for (const formField of this.jsonData.fields) {
      //   console.log("for loop is running");
      //   this.form.addControl(formField.name, new FormControl('', Validators.required));
      // }
   })
  }

  fieldValue: any;

  onDataReceived(data: { key: string, value: any }): void {
  // You can process the data as needed
  // console.log("field data:", data.value);

  // Assuming data.value is not an observable, directly assign its value to fieldValue
  this.fieldValue = data.value;


  // console.log("field value in render component:", this.fieldValue);
}

  onSubmit(): void {

    // for(const value in this.fieldValue.size){
    //   if (this.fieldValue.hasOwnProperty(value)) {
    //     const fieldValue = this.fieldValue[value];
    //     console.log("Field Name:", value, "Field Value:", fieldValue);
    //     // Do something with fieldName and fieldValue
    //   }
    // }

    console.log("submit method is calling",this.fieldValue,"form data");

  }
}
