import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonformService } from '../../service/jsonform.service'; 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.css']
})
export class FormRenderComponent implements OnInit {

  form!:FormGroup;
  @Input() jsonConfig: any;
  jsonData: any;
  fieldValue: any;
  jsonFileData: any;

  control!: FormControl;

  constructor(private jsonFormService: JsonformService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
      // console.log("form group is here",this.form.value);
      // console.log(this.jsonData.fields.type,"jsonData form field Type");
      // if (this.jsonData.fields.type === 'group') {
      //   const childForm = this.formBuilder.group({});
      //   this.jsonData.fields.fields-forloop{
      //   childForm.addControl(element.name,Validators.required);
      //   }
      //   this.form.addControl(this.jsonData.fields.name,childForm);
        
      //   }  else {
      //     // Default form structure if no matching fields.type is found
      //     this.form.formBuilder.addControl('',Validators.required);
      //   }
      // } 
      // else {
      //   // Default form structure if fields.type is not 'group'
      //   this.form = this.formBuilder.group({
      //     firstName: [''],
      //     email: [''],
      //     date: ['']
      //   });
      // }
      // console.log(this.jsonData, "this is json data");
      // console.log(this.form.value, "form group");
    
  }

  async buildForm(){
    this.form = this.formBuilder.group({});
    const response = await this.jsonFormService.getData().pipe(take(1)).toPromise();
    this.jsonData = response;
    for (const field of this.jsonData.fields) {
      if (field.type === 'group') {
        // console.log(field, "field group Type");
        const nestedGroup = this.formBuilder.group({});
        for (const subField of field.fields) {
          nestedGroup.addControl(subField.name, this.formBuilder.control('', Validators.required));
        }
        this.form.addControl(field.name, nestedGroup);
      } 
      else {
        this.form.addControl(field.name, this.formBuilder.control('', Validators.required));
      }
    }
    //console.log("----------------------------",this.form);
  }

  onDataReceived(data: { key: string, value: any }): void {
    this.fieldValue = data.value;
    //console.log(this.fieldValue,"000000000000000000000000");
    //this.form.controls[this.fieldValue.key].value=this.fieldValue.key
    //this.form.controls[this.fieldValue.key].setValue(this.fieldValue.value);
    // data.value.forEach((element: { key: string | number; value: any; }) => {
    //   this.form.[element.key].setValue(element.value)
    //   console.log(this.form,"+++++++++++++++++++++++++++",this.form);
      
    // });
    //this.form.controls[data.key].setValue(data.value);
    //console.log(this.form,"===========================",data.value);
    // console.log("field value in render component:", this.fieldValue);
  }

  /* onDataReceived(data: { key: string, value: any }): void {
    const control = this.form.get(data.key);
    console.log(this.form.get(data.value),"control");
    if (control) {
      console.log("inside the controler condition");
      control.setValue(data.value);
    }    
  } */
  onSubmit(): void {
    // for(const value in this.fieldValue.size){
    //   if (this.fieldValue.hasOwnProperty(value)) {
    //     const fieldValue = this.fieldValue[value];
    //     console.log("Field Name:", value, "Field Value:", fieldValue);
    //     // Do something with fieldName and fieldValue
    //   }
    // }
    // console.log("submit method is calling",this.fieldValue,"form data");
    console.log("form Value",this.form.value,"form Value");
    /* this.jsonFormService.getData().subscribe((data)=>{
      this.jsonFileData=data;
    }) */
    //this.redirectURL();
  }

  onCancel(): void {
    alert("onCancel is calling");
    this.form.reset();
  }

  redirectURL(): void {
    const fieldValueString = JSON.stringify(this.fieldValue);
    sessionStorage.setItem('formData', fieldValueString);
    // console.log("field Value is:-", this.fieldValue);
    this.router.navigate(['employee']).then(() => {
      this.router.navigate([this.router.url]).then(() => {
        window.location.href=this.router.url;
      });
    });
  }
}
