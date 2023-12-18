import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormRenderComponent } from '../form-render/form-render.component';
import {HttpClient } from '@angular/common/http'
import { FormArray, FormControl,FormGroup,FormGroupDirective,ReactiveFormsModule,ValidatorFn, Validators} from '@angular/forms';
import { FormField } from 'src/app/jsonform/form-field';
import { CheckboxComponent } from '../../component/checkbox/checkbox.component';
import { DateComponent } from '../../component/date/date.component';
import { EmailComponent } from '../../component/email/email.component';
import { FileComponent } from '../../component/file/file.component';
import { HiddenComponent } from '../../component/hidden/hidden.component';
import { PasswordComponent } from '../../component/password/password.component';
import { RadioComponent } from '../../component/radio/radio.component';
import { RangeComponent } from '../../component/range/range.component';
import { ResetComponent } from '../../component/reset/reset.component';
import { TextComponent } from '../../component/text/text.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.css']
})
export class FormFieldsComponent implements OnInit {

  @Input() formFields: any;
  formField: string[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("form Render Successfully",this.formFields);
    // if (this.formFields && this.isObservable(this.formFields.get)) {
    //   console.log("Form field is outside rendered:");
    //   this.formFields.get.subscribe((fields: string[]) => {
    //     this.formField = fields;
    //     console.log("Form field is rendered:", this.formField);
    //   });
    // } else {
    //   console.error('Invalid formFields or get property is not an Observable.');
    // }
  }
  
  // private isObservable(obj: any): obj is Observable<any> {
  //   return obj instanceof Observable;
  // }
}