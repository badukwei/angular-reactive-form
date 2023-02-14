import { FormService } from './form.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form = this. formBuilder.group({
    //validator
    name: this.formBuilder.control('', Validators.required),
    //custom validator
    email: this.formBuilder.control('', FormService.emailValidator),
    description: this.formBuilder.control(''),
    //multi validators
    password: this.formBuilder.control('', [Validators.required, Validators.minLength(10)]),
    tags: this.formBuilder.array([
      this.formBuilder.control('Angular'),
      this.formBuilder.control('TypeScript'),
      this.formBuilder.control('React'),
    ])
  })

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  submit(): void {
    if(this.form.invalid)
    return
    console.log(this.form.value)
  }

  addTag(tag: string): void {
    this.form.controls.tags.push(this.formBuilder.control(tag))
  }

  removeTag(index: number): void {
    this.form.controls.tags.removeAt(index)
  }
}
