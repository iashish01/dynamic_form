import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  formData: any;

  constructor() { }

  ngOnInit(): void {
    const formDataString = sessionStorage.getItem('formData');
    if (formDataString) {
      this.formData = JSON.parse(formDataString);
      // Use formData as needed
    }
  }
}
