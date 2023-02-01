import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.css']
})
export class BudgetViewComponent implements OnInit {

  constructor() { }
  public budget_array:any = [];
  public message = '';
  public title = "";
  public ptitle = "";
  public date:any= "";
  public pdate= "";
  public amount= "";
  public pamount:any= "";
  public ind :any;
  public id:number = 0;
  ngOnInit(): void {
    this.budget_array = JSON.parse(localStorage.getItem("budget_array") !);
    // console.log(this.budget_array);
  }


  edit( id:any , budget:any) {
    this.title = budget.title;
    this.date = budget.date;
    this.amount = budget.amount;
    this.ind = id;
    // this.id = id;
  }

//   this.budget_array.map((index:any,contact:any)=>{
//     index.title = this.ptitle;
//     index.date = this.pdate;
//     index.amount = this.pamount;
  
//   console.log(index.title)
// })
  
  update () {
    this.budget_array.map((obj:any,index:any)=>{
      if (index ===this.ind) {
        obj.title = this.title;
        obj.date = this.date;
        obj.amount = this.amount;
      }
      localStorage.setItem('budget_array', JSON.stringify(this.budget_array))
      this.message = 'Budget category added successfully'
      })
      
      // console.log(obj.title)
    
    this.ngOnInit()
  }
  delete (id:any) {
      
        let check = confirm('are you sure you wants to delete this category')
        if (check == true) {
          let filtered = this.budget_array.filter((obj:any, index:any)=>(index!==id))
          this.budget_array = filtered
          // console.log(filtered)
          localStorage.setItem('budget_array',JSON.stringify(this.budget_array))
        }
      

  //   let filteredArray = this.budget_array.filter((contact:any, index:number)=> index!=id);
  //  console.log(filteredArray);
  //  this.budget_array = filteredArray 
  }

}
