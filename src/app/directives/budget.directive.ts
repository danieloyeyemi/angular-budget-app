import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appBudget]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: BudgetDirective, multi: true}
  ]
})
export class BudgetDirective {

  constructor() { }
  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value) {
      if (!/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[A-Z]*[A-Z])(?=.*?[!@#\$&*~]).{8,30}$/.test(control.value)) {
        console.log(control.value);
        return {noCountryCode:true}
      }
    }
    return null
  }
}
