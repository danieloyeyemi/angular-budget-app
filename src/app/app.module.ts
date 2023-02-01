import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { ViewComponent } from './view/view.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { BudgetDirective } from './directives/budget.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBudgetComponent,
    HomeComponent,
    EditComponent,
    BudgetListComponent,
    BudgetViewComponent,
    ViewComponent,
    SignupComponent,
    SigninComponent,
    BudgetDirective,
    ParentComponent,
    ChildComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
