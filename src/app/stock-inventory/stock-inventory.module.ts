import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// reactive for using forms in ts file
import { ReactiveFormsModule } from '@angular/forms';

// components
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';

// containers
import { StockInventoryContainer } from './containers/stock-inventory.container';

@NgModule({
  declarations: [
    StockInventoryContainer,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    StockInventoryContainer,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
  ],
})
export class StockInventoryModule {}
