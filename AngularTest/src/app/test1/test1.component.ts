import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component implements OnInit{


  formData = {
    name: '',
    email: '',
    message: ''
  };

  formSubmitted = false;

  submitForm() {

    console.log('Form Submitted:', this.formData);
    this.formSubmitted = true;
  }
  constructor() {
  }

  ngOnInit() {
  }

}
