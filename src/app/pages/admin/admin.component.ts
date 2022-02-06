import { Component } from '@angular/core';

@Component({
  selector: 'main-admin',
  template: `
    <app-admin *axLazyElement="elementUrl" ></app-admin>`
})
export class AdminComponent {

  elementUrl = "http://127.0.0.1:5500/admin.js"

}
