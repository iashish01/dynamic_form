import { Component, OnInit } from '@angular/core';
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

  form!: FormGroup;

  url = '/assets/form.json';
  formGroup: FormGroup;

  jsonData:any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,private jsonFormService:JsonformService,private router: Router) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
   this.jsonFormService.getData().subscribe((data)=>{
    this.jsonData=data;
    console.log(this.jsonData);
   })
  }

  onSubmit(): void {
    console.log("submit method is calling",this.form); 
    // if (this.form) {
    //   // Handle the form submission here
    //   console.log('Form submitted with values:', this.form);
    // } else {
    //   // Handle form validation errors or display a message
    //   console.log('Form is invalid. Please check the fields.');
    // }
  }


}
