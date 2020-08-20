import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.container.html',
  styleUrls: ['./stock-inventory.container.scss'],
})
export class StockInventoryContainer implements OnInit {
  form = new FormGroup({
    // managing which branch and which manager has order the stock
    store: new FormGroup({
      // string parameter = default value
      branch: new FormControl(''),
      code: new FormControl(''),
    }),
    // drop down menu with quantity control
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10),
    }),
    // collection of the stock we have added
    stock: new FormArray([]),
  });

  onSubmit() {
    console.log(this.form.value);
  }

  constructor() {}

  ngOnInit() {}
}
