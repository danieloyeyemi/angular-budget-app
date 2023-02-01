import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  constructor(public actRoute:ActivatedRoute) { }

  public budget_array:any = [];
  public goods = "";
  public message = '';
  public pgoods = '';
  public pprice:any = '';
  public pquantity:any = '';
  public ind : any ;
  public messages = '';
  public quantity = "";
  public price = "";
  public title:any = '';
  public date:any = '';
  public total:any ;
  public remain:any = '';
  public spent:number = 0;
  public style :any = {color:'white!important'};
  public mark :any = '';
  public id:number = 0;
  
  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id']
    this.id = id;
    // console.log(id)
    // console.log(this.actRoute.snapshot)
    let getBudgetArray =JSON.parse(localStorage.getItem("budget_array") !); 
    this.budget_array = getBudgetArray;
    this.title = this.budget_array[this.id-1].title
    this.date = this.budget_array[this.id-1].date
    this.total= this.budget_array[this.id-1].amount
    this.remain = this.budget_array[this.id-1].remain
    this.spent = this.budget_array[this.id-1].spent
    if (this.remain<=((10/100)*this.total)) {
      this.style ={color:'darkred!important'}
      this.mark = '!'
    }

  }

  createbudget () {
    let budgetObj = {
      goods: this.goods,
      quantity: this.quantity,
      price: this.price,
      status: false,
    }
    this.budget_array[this.id-1].items.push(budgetObj)
    localStorage.setItem('budget_array', JSON.stringify(this.budget_array))
    this.message = 'Budget Added Successfully Click on view budget to view your budget'
    console.log(this.budget_array);
  }

  toCheck(id:any){
    let index = id
    let obj = this.budget_array[this.id-1] 
    if (this.remain<(obj.items[index].quantity*obj.items[index].price)&&obj.items[index].status===false) {
      this.messages='insufficient fund'
      
    }
    else if (obj.items[index].status === false){
      obj.items[index].status=true
      obj.spent = this.spent+(obj.items[index].quantity*obj.items[index].price)
      this.spent= obj.spent
      obj.remain = this.remain-(obj.items[index].quantity*obj.items[index].price)
      this.remain= obj.remain
      localStorage.setItem('budget_array', JSON.stringify(this.budget_array))
    }
    else if(obj.items[index].status === true){
      obj.items[index].status=false
      obj.spent = this.spent-(obj.items[index].quantity*obj.items[index].price)
      this.spent= obj.spent
      obj.remain = this.remain+(obj.items[index].quantity*obj.items[index].price)
      this.remain= obj.remain
      localStorage.setItem('budget_array', JSON.stringify(this.budget_array))
    }
  }

  edit(id:any) {
    let object = this.budget_array[this.id-1].items[id]
    this.ind = id;    
    this.pgoods = object.goods;
    this.pprice = object.price;
    this.pquantity = object.quantity
  }
  
  update () {
    
    let gets = this.budget_array[this.id-1]
    let objs = gets.items[this.ind]
    console.log(objs)
     objs.goods = this.pgoods;
     objs.quantity = this.pquantity;
     objs.price = this.pprice; 
    // gets.items.map((obj:any, index:any)=>{
    //   console.log(obj);
    //     // obj.goods = this.pgoods;
    //     // obj.quantity = this.pquantity;
    //     // obj.price = this.pprice;
    //   })
    localStorage.setItem('budget_array', JSON.stringify(this.budget_array))
  }
  delete (id:any) {
  if (this.budget_array[this.id-1].items[id].status===true) {
    alert('you have purchase this unpurchase to delete')
  }else{
    let check = confirm('are you sure you wants to delete this item')
    if (check == true) {
      let filtered = this.budget_array[this.id-1].items.filter((obj:any, index:any)=>(index!=id))
      this.budget_array[this.id-1].items = filtered
      console.log(filtered)
      localStorage.setItem('budget_array',JSON.stringify(this.budget_array))
    }
  }
  }

}

// let filtered = this.budget_array[this.id-1].items.filter((obj:any, index:any)=>(index!=id))
// this.budget_array[this.id-1].items = filtered
// console.log(filtered)
// localStorage.setItem('budget_array',JSON.stringify(this.budget_array))
