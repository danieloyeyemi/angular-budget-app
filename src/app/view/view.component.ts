import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(public actRoute:ActivatedRoute) { }
  public budget_array:any = []; 
  public title:any = '';
  public total:any = '';
  public goods = "";
  public spent :any = '';
  public price = "";
  public id:number = 0;
  public remain:any = '';
  public style :any = {color:'white!important'};
  public mark :any = '';
  public quantity = "";

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id']
    this.id = id;
    console.log(id)
    console.log(this.actRoute.snapshot)
    let getBudgetArray =JSON.parse(localStorage.getItem("budget") !); 
    this.budget_array = getBudgetArray;
    this.title = this.budget_array[this.id-1].title
    this.price = this.budget_array[this.id-1].price
    this.total= this.budget_array[this.id-1].amount
    this.spent = this.budget_array[this.id-1].spent
    this.quantity = this.budget_array[this.id-1].quantity
    this.goods = this.budget_array[this.id-1].goods
    this.remain = this.budget_array[this.id-1].remain
    if (this.remain<=((10/100)*this.total)) {
      this.style ={color:'darkred!important'}
      this.mark = '!'
    }
    
    // this.title = this.budget_array[this.id-1].title
    // // this.date = this.budget_array[this.id-1].date
    // this.total= this.budget_array[this.id-1].amount
    // this.spent = this.budget_array[this.id-1].spent

  }

}
