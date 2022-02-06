import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'main-admin',
  template: `<app-admin *axLazyElement="elementUrl"></app-admin>`
})
export class AdminComponent {
  elementUrl = environment.mf_admin;
}
