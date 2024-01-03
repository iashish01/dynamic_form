import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl,FormControlName } from '@angular/forms'

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Output() dataToParent = new EventEmitter<{ key: string, value: any }>();

  @Input() control!:FormControl
  @Input() formField: any;  
    
  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any): void {
    const inputValue = event.target.value;
    //console.log("data of text field:-",inputValue);
    // Create a JSON object with the data
    // const jsonData = { inputValue: inputValue };
    const jsonData = { key: this.formField.name, value: inputValue };
    // console.log(jsonData);
    this.dataToParent.emit(jsonData);
  }

}
