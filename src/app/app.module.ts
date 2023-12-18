import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamicformComponent } from './jsonform/dynamicform/dynamicform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormRenderComponent } from './form-module/render/form-render/form-render.component';
import { FormFieldsComponent } from './form-module/render/form-fields/form-fields.component';
import { CheckboxComponent } from './form-module/component/checkbox/checkbox.component';
import { DateComponent } from './form-module/component/date/date.component';
import { EmailComponent } from './form-module/component/email/email.component';
import { FileComponent } from './form-module/component/file/file.component';
import { HiddenComponent } from './form-module/component/hidden/hidden.component';
import { PasswordComponent } from './form-module/component/password/password.component';
import { RadioComponent } from './form-module/component/radio/radio.component';
import { RangeComponent } from './form-module/component/range/range.component';
import { ResetComponent } from './form-module/component/reset/reset.component';
import { TextComponent } from './form-module/component/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicformComponent,
    FormRenderComponent,
    FormFieldsComponent,
    CheckboxComponent,
    DateComponent,
    EmailComponent,
    FileComponent,
    HiddenComponent,
    PasswordComponent,
    RadioComponent,
    RangeComponent,
    ResetComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
