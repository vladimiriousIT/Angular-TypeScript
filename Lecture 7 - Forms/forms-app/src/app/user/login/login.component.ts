import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('f', {static: false}) form: NgForm;
  defaultPassword = 123;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.form.valueChanges.subscribe(console.log);
  }

  loginHandler(formData){
    console.log(this.form);
    console.log(formData);
  }

}
