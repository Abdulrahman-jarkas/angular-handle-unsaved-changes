import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormCanDeactivated } from '../shared/guards/form-can-deactivate';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends FormCanDeactivated {
  @ViewChild('form') form!: NgForm;

  submit(value: any) {
    console.log(value);
  }
}
