import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { EditComponent } from './edit/edit.component';
import { BudgetGuard } from './guards/budget.guard';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'homes', children:[
    {path: '', component:EditComponent},
    {path: 'homes/:id', component:CreateBudgetComponent},
  ]},
  // {path:'budget-app', component:CreateBudgetComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'signin', component:SigninComponent},
  // {path: 'budge', component:BudgetListComponent},
  {path:'details',children:[
    {path:'',component:BudgetViewComponent},
    {path:'details/:id',component:BudgetListComponent}
  ],canActivate:[BudgetGuard]},
  {path:'budgets',children:[
    {path:'', component:BudgetListComponent},
    {path:':id', component:ViewComponent} 
  ],canActivate:[BudgetGuard]},
  {path:"**", component:NotfoundComponent}
];
// canActivate:[BudgetGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
