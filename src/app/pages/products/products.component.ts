import { Component } from '@angular/core';

@Component({
  selector: 'main-products',
  template: `
    <app-products *axLazyElement="elementUrl" ></app-products>
    <!-- <app-products></app-products> -->
  `
})
export class ProductsComponent {

  elementUrl = "http://127.0.0.1:5500/products.js"

}
