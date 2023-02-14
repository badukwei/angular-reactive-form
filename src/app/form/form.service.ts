import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
    static emailValidator(control: AbstractControl): ValidationErrors | null {
      /** 電子信箱正則式規則 */
      const regex = new RegExp('@{1,1}');

      // empty email
      if (!control.value) {
        return { emailRequire: true };
      }
      // without @
      if (control.value.match(regex) === null) {
        return { emailInvalid: true };
      }
      return null;
    }
}
