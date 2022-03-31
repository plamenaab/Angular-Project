import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @ViewChild('fEl') registerForm!: NgForm;
  newGender="";
  defaultCountry = "United States";
  genders = ['male', 'female', 'Prefer not to respond'];
  fullFormData = {
    username:'',
    email:'',
    gender:'',
    newGender:'',
    country:''
  }
  formSubmited = false;
  constructor() { }

  ngOnInit(): void {
  }
  // onFormSubmit(formElement: HTMLFormElement){
  //   console.log(formElement);
  // }
  onFormSubmit(){
    this.formSubmited = true;
    this.fullFormData.country = this.registerForm.value.country;
    this.fullFormData.username = this.registerForm.value.staticUserData.username;
    this.fullFormData.email = this.registerForm.value.staticUserData.email;
    this.fullFormData.gender = this.registerForm.value.staticUserData.gender;
    this.fullFormData.newGender = this.registerForm.value.staticUserData.newGender;
    this.registerForm.reset();
  }
}


