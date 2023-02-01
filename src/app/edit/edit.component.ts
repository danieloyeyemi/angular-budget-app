import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }
  public title = "";
  public amount = "";
  public remain:any = '';
  public price = '';
  public date = "";
  public message = '';
  public id:number = 0;
  public items:any= [];
  public budget_array: any = [];

  ngOnInit(): void {
    if (localStorage.getItem('budget_array')) {
      let getBudgetArray =JSON.parse(localStorage.getItem("budget_array") !)   
      this.budget_array = getBudgetArray   
    }
  }


  addcategory () {
    let date = new Date()
    let budgetObj = {
      title: this.title,
      amount: this.amount,
      spent: 0,
      remain : this.amount,

      date :`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
       items :[]
    }
    this.budget_array.push(budgetObj)
    localStorage.setItem('budget_array', JSON.stringify(this.budget_array))
    this.message = 'Budget-Title Added Successfully Click on view to view your budget-Category'
    console.log(this.budget_array);
  }
  
editBudget (id:any, budget:any){

}

  delete(id:any){
    
  }

}