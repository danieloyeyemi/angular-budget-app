import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public formBuilder:FormBuilder, public router: Router, public budgetService:BudgetService) { }
  public full_name = "";
  public email = "";
  public phone_no = "";
  public address = "";

  public userForm = this.formBuilder.group({
    full_name: ['',[Validators.required, Validators.minLength(10)]],
    phone_no: ['',this.validate],
    email: [''],
    address: ['',[Validators.required, Validators.minLength(7)]],
    password: ['',[Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[A-Z]*[A-Z])(?=.*?[!@#\$&*~]).{8,30}$/)]],
    
})
// /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
validate(control: AbstractControl): {[key: string]: any} | null {
  if (control.value) {
    if (control.value.indexOf("+234") == -1) {
      return {noCountryCode: true}
    }
  }
  // console.log(control.value.indexOf("+234"))
  return null
}


  // public userForm:any = this.formBuilder.group({
  //   first_name: ['', [Validators.required, Validators.minLength(5)]],
  //   last_name: [''],
  //   phone_no: ['', this.validate],
  //   email: [''],
  //   address : [''],
  // })


  public usersArray:any = [];
  public message = '';
  ngOnInit(): void {
  this.usersArray = this.budgetService.getUsers();
  if(!this.budgetService.getUsers()){
    this.usersArray = this.budgetService.getUsers();
  }else{
    this.usersArray = [];
  }
}

  signUp (){
    let checkExist = this.usersArray.findIndex((budget: any)=>budget.email == this.userForm.value['email'])
    if (checkExist == -1) {
      this.usersArray.push(this.userForm.value);
      localStorage.setItem("usersArray",JSON.stringify(this.usersArray));
      localStorage.setItem("budgetUser",JSON.stringify(this.userForm.value));
      this.router.navigate(['/homes']);
    }else{
      this.message = 'Invalid Email'
    }
  }


  // this.usersArray.push(this.userForm.value);
  // let checkExist = this.usersArray.findIndex((budget: any)=>budget.email == this.userForm.value['email'])
  // if (checkExist == -1) {
  //   localStorage.setItem("usersArray",JSON.stringify(this.usersArray));
  //   localStorage.setItem("budgetUser", JSON.stringify(this.userForm.value));
  //   this.router.navigate(['/homes']);
  // }else{
  //   this.message = 'Input details'
  // }


}
