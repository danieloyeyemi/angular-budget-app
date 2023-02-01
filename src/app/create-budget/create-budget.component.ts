import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.css']
})
export class CreateBudgetComponent implements OnInit {

  constructor() { }
  public goods = "";
  public quantity = "";
  public price = "";
  public message = '';
  public remain = '';
  public spent:number = 0;
  public budget_array: any = [];

  ngOnInit(): void {
    this.budget_array = JSON.parse(localStorage.getItem("budget") !);
    // JSON.parse(this.budget_array);
    console.log(this.budget_array);
  }


  createbudget () {
    let budgetObj = {
      goods: this.goods,
      quantity: this.quantity,
      price: this.price,
      remain : this.price,
      spent : 0
    }
    this.budget_array.push(budgetObj)
    localStorage.setItem('budget', JSON.stringify(this.budget_array))
    this.message = 'Budget Added Successfully Click on view budget to view your budget'
    console.log(this.budget_array);
  }
  
editBudget (id:any, budget:any){

}

  delete(id:any){
    
  }
}
