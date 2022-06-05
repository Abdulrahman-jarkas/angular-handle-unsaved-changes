import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ComponentCanDeactivated } from './component-can-deactivated';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard
  implements CanDeactivate<ComponentCanDeactivated>
{
  canDeactivate(component: ComponentCanDeactivated): boolean {
    const res = component.canDeactivate();
    return res
      ? true
      : confirm('Are you want to leave without saving changes ?!!');
  }
}
