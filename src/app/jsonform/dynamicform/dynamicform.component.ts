import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormField } from '../form-field';
import { FormControl,FormGroup,ReactiveFormsModule,ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
  
  title='JSON Form';
   
  heading='Angular dynamic form'

  dynamicData:any;

  formFields!:FormField[];
  form=new FormGroup({});

  url='/assets/dForm.json'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get(this.url).subscribe(res => {
    //   this.dynamicData = res;
    //   console.log(res);
    // // this.http.get(FormField[]).subscribe((formFields)=>{
    // //   for(const formField of formFields){
    // //     this.form.addControl(formField.fieldName,new FormControl())
    // //   }
    // // })
    // });
      this.http.get<FormField[]>(this.url).subscribe((formFields) => {
        for (const formField of formFields) {
          this.form.addControl(formField.fieldName, new FormControl('',this.getValidator(formField)));
        }
        this.formFields = formFields;
        console.log('formField is this',formFields);
      });
  }

  onSubmit(): void {
    if (this.form.valid) {
      let value = this.form.value;
      console.log(value);
    }
  }

  private getValidator(formField: FormField): ValidatorFn {
    switch(formField.validator) {
    case 'email':
      return Validators.email;
    case 'required':
      return Validators.required;
    default:
      return Validators.nullValidator;;
    }
    }

}
