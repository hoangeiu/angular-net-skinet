import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';

@NgModule({
  declarations: [OrdersComponent, OrderDetailedComponent],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
