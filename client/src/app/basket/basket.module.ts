import { NgModule } from '@angular/core';
import { BacketRoutingModule } from './backet-routing.module';
import { BasketComponent } from './basket.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BasketComponent],
  imports: [SharedModule, BacketRoutingModule],
})
export class BasketModule {}
