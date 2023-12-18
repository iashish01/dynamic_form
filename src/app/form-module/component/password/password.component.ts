import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  @Input() control!:FormControl
  @Input() formField: any;

  constructor() { }

  ngOnInit(): void {
  }

}
