import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  public getUsers (){
    return JSON.parse(localStorage['usersArray'])
  }
  public user (){
    return JSON.parse(localStorage['budgetUser'])
  }
  public getBudget (){
    return JSON.parse(localStorage['budget_array']);
  }
}
