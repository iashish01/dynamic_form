import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormControlName } from '@angular/forms'

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() control!:FormControl
  @Input() formField: any;  
    
  constructor() { }
  
  ngOnInit(): void {
  }

}
