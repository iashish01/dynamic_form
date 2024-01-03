import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  @Output() dataToParent = new EventEmitter<{ key: string, value: any }>();

  @Input() formField: any;

  @Input() control!:FormControl;

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
