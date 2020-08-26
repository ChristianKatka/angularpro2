import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { Product } from '../models/product.model';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.container.html',
  styleUrls: ['./stock-inventory.container.scss'],
})
export class StockInventoryContainer implements OnInit {
  products: Product[] = [
    { id: 1, price: 2800, name: 'MacBook Pro' },
    { id: 2, price: 50, name: 'USB-C Adaptor' },
    { id: 3, price: 400, name: 'iPod' },
    { id: 4, price: 900, name: 'iPhone' },
    { id: 5, price: 600, name: 'Apple Watch' },
  ];

  form = new FormGroup({
    // managing which branch and which manager has order the stock
    store: new FormGroup({
      // string parameter = default value
      branch: new FormControl(''),
      code: new FormControl(''),
    }),
    // drop down menu with quantity control
    selector: this.createStock({}),
    // collection of the stock we have added
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 }),
    ]),
  });

  onSubmit() {
    console.log(this.form.value);
  }

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10),
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  constructor() {}

  ngOnInit() {}
}
