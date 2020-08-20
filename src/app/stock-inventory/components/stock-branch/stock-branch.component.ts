import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'stock-branch',
  templateUrl: './stock-branch.component.html',
  styleUrls: ['./stock-branch.component.scss'],
  
})
export class StockBranchComponent {
  // Pass data from parent to child with input binding
  @Input()
  parent: FormGroup;
}
