import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherComponentComponent } from './another-component/another-component.component';
import { FormComponent } from './form/form.component';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'another-component',
    component: AnotherComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
