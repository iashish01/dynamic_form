import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './component/email/email.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { FileComponent } from './component/file/file.component';
import { HiddenComponent } from './component/hidden/hidden.component';
import { PasswordComponent } from './component/password/password.component';
import { RadioComponent } from './component/radio/radio.component';
import { RangeComponent } from './component/range/range.component';
import { ResetComponent } from './component/reset/reset.component';
import { TextComponent } from './component/text/text.component';
import { DateComponent } from './component/date/date.component';
import { FormRenderComponent } from './render/form-render/form-render.component';
import { FormFieldsComponent } from './render/form-fields/form-fields.component';



@NgModule({
  declarations: [
    EmailComponent,
    CheckboxComponent,
    FileComponent,
    HiddenComponent,
    PasswordComponent,
    RadioComponent,
    RangeComponent,
    ResetComponent,
    TextComponent,
    DateComponent,
    FormRenderComponent,
    FormFieldsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmailComponent,
    CheckboxComponent,
    FileComponent,
    HiddenComponent,
    PasswordComponent,
    RadioComponent,
    RangeComponent,
    ResetComponent,
    TextComponent,
    DateComponent,
    FormRenderComponent,
    FormFieldsComponent
  ]
})
export class FormModuleModule { }