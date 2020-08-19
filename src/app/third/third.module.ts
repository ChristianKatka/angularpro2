import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// forms module need to be imported to app module and child modules to work!
import { FormsModule } from '@angular/forms';

import { ThirdContainer } from './third.container';

// My directives
import { TooltipDirective } from './tooltip/tooltip.directive';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { MyForDirective } from './my-for/my-for.directive';

//components
import { MyForComponent } from './my-for/my-for.component';

@NgModule({
  declarations: [
    ThirdContainer,
    TooltipDirective,
    CreditCardDirective,
    MyForDirective,
    MyForComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ThirdContainer,
    TooltipDirective,
    CreditCardDirective,
    MyForDirective,
    MyForComponent,
  ],
  providers: [],
})
export class ThirdModule {}
