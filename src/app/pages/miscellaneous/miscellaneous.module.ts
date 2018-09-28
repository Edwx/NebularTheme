
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../theme/theme.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const EXTRA_COMPONENTS = [
  MiscellaneousComponent,
  NotFoundComponent,
];


@NgModule({
  imports: [
    ThemeModule,
    MiscellaneousRoutingModule,
  ],
  declarations: [
    ...EXTRA_COMPONENTS,
  ],
})
export class MiscellaneousModule { }
