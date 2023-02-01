import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public budgetService : BudgetService, public router: Router) { }

  public email = ''
  public password = ''
  public budget_array:any = [];
  ngOnInit(): void {
  //  this.budget_array=this.budgetService.getUsers()
  //  console.log(this.budget_array);
   
  }

  signIn (){
     this.budget_array = this.budgetService.getUsers();
    let users = this.budget_array.find((users:any)=>users.email == this.email && users.password == this.password)
    console.log(users)
    if(users){
      localStorage.setItem('budgetUser',JSON.stringify(users))
      this.router.navigate(['/homes'])
    }else{
      this.router.navigate(['/signup'])
    }
  }

}