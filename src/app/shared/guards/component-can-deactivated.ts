import { Component, HostListener } from '@angular/core';

@Component({ template: '' })
export abstract class ComponentCanDeactivated {
  abstract canDeactivate(): boolean;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (!this.canDeactivate()) {
      $event.returnValue = true;
    }
  }
}
