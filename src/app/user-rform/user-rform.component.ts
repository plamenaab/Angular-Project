import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-rform',
  templateUrl: './user-rform.component.html',
  styleUrls: ['./user-rform.component.css']
})
export class UserRformComponent implements OnInit {
  genders = ['male', 'female', 'Prefer not to respond'];
  userForm!:FormGroup;
  bannedUsernames = ['Admin', 'Administrator'];
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'staticUserData': new FormGroup({
        'username': new FormControl(null,[Validators.required, this.isUsernameBanned.bind(this)]),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'gender': new FormControl('Prefer not to respond'),        
      }),
      'country': new FormControl('United States'),
      'interests': new FormArray([]),
    })
  }
  onFormSubmit(){
    console.log(this.userForm);
  }
  isUsernameBanned(control: FormControl):{[s:string]:boolean}|null{
    if(this.bannedUsernames.indexOf(control.value) !== -1){
      return {'bannedUsername': true};
    }
    return null;
  }

  onAddInterest(){
    const control = new FormControl('',[Validators.required]);
    (<FormArray>this.userForm.get('interests')).push(control);
  }
  get interests() {
    return this.userForm.get('interests') as FormArray;
  }
  get username(){
    return this.userForm.get('staticUserData.username') as FormControl;
  }
}
