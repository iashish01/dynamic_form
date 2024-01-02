import { Component, Input, OnInit } from '@angular/core';
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
       console.log(this.form,"form group is calling");

      // for (const formField of this.jsonData.fields) {
      //   console.log("for loop is running");
      //   this.form.addControl(formField.name, new FormControl('', Validators.required));
      // }
   })
  }

  onSubmit(): void {

    console.log("submit method is calling",this.form.value,"form data");

  }
}
