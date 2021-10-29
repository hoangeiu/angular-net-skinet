import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';

@NgModule({
  declarations: [PagingHeaderComponent, PagerComponent, OrderTotalsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule,
    OrderTotalsComponent,
  ],
})
export class SharedModule {}
