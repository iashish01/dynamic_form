import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms'
import { JsonformService } from '../../service/jsonform.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Output() dataToParent = new EventEmitter<{ key: string, value: any }>();

  @Input() formField: any;

  @Input() form!:FormGroup;

  fieldName!:string;

  constructor() { }

  ngOnInit(): void {
    console.log("11111111111111111111111:-",this.form);
    // console.log("text field is rendering:-",this.formField);
    this.fieldName=this.formField.name;
    //console.log(this.formField,"=============================");
  }

  onInputChange(event: any): void {
    const inputValue = event.target.value;
    const jsonData = { key: this.formField.name, value: inputValue };
    this.dataToParent.emit(jsonData);
    this.form.controls[this.formField.name].setValue(inputValue);
  }

}
