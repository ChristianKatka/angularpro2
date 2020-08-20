import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// forms module need to be imported to app module and child modules to work!
import { FormsModule } from '@angular/forms';

import { ThirdContainer } from './third.container';

// My directives
import { TooltipDirective } from './tooltip/tooltip.directive';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { MyForDirective } from './my-for/my-for.directive';

// Pipes
import { FileSizePipe } from './pipe/filesize.pipe';

//components
import { MyForComponent } from './my-for/my-for.component';
import { FilePipeComponent } from './filepipe/filepipe.component';

@NgModule({
  declarations: [
    ThirdContainer,
    TooltipDirective,
    CreditCardDirective,
    MyForDirective,
    MyForComponent,
    FileSizePipe,
    FilePipeComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ThirdContainer,
    TooltipDirective,
    CreditCardDirective,
    MyForDirective,
    MyForComponent,
    FileSizePipe,
    FilePipeComponent,
  ],
  providers: [],
})
export class ThirdModule {}
