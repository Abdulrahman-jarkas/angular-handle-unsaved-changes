import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentCanDeactivated } from './component-can-deactivated';

@Component({ template: '' })
export abstract class FormCanDeactivated extends ComponentCanDeactivated {
  abstract get form(): NgForm;

  canDeactivate(): boolean {
    return this.form?.submitted || !this.form?.dirty;
  }
}
