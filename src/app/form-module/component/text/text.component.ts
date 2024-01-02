import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms'
import { JsonformService } from '../../service/jsonform.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Output() dataToParent = new EventEmitter<object>();

  @Input() control!:FormControl
  @Input() formField: any;
  
  constructor(public jsonFormService:JsonformService) { }

  ngOnInit(): void {
  }

  onInputChange(event: any): void {
    const inputValue = event.target.value;

    console.log("data of text field:-",inputValue);
    // Create a JSON object with the data
   // const jsonData = { inputValue: inputValue };
   this.dataToParent.emit(inputValue);
  }

}
