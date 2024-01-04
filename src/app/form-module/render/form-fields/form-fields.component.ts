import { Component, Input, OnInit, EventEmitter,Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormRenderComponent } from '../form-render/form-render.component';
import {HttpClient } from '@angular/common/http'
import { FormArray, FormBuilder, FormControl,FormGroup,FormGroupDirective,ReactiveFormsModule,ValidatorFn, Validators} from '@angular/forms';
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
import { JsonformService } from '../../service/jsonform.service';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.css']
})
export class FormFieldsComponent implements OnInit {

  @Input() formFields: any;

  @Output () parantData = new EventEmitter<{ key: string, value: any }>();

  @Input() formGroup! :FormGroup 

  @ViewChild(TextComponent) textComponent!: TextComponent;

  formField: string[] = [];

  private emittedData: { key: string, value: any }[] = [];

  constructor(private formBuilder:FormBuilder,public form:JsonformService) { }

  ngOnInit(): void {
    //console.log("form Render Successfully",this.formFields);
    // this.textComponent.dataToParent.subscribe((data)=>{
    //   console.log("text component is rendered:-",data);
    // })
  }
  receivedData: any;
  onDataReceived(data: { key: string, value: any }): void {
    // You can process the data as needed
    this.emittedData.push(data);
    const fieldValue: string = "fieldValue";
    this.parantData.emit({ key: fieldValue, value: this.emittedData });
    // console.log(this.emittedData,"form Field array");
  }
 
}
