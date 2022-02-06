import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'main-products',
  template: `<app-products *axLazyElement="elementUrl"></app-products>`
})
export class ProductsComponent {

  elementUrl = environment.mf_products;

}
