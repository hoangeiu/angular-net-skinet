import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';

@NgModule({
  declarations: [PagingHeaderComponent, PagerComponent],
  imports: [CommonModule, FontAwesomeModule, PaginationModule.forRoot()],
  exports: [
    CommonModule,
    FontAwesomeModule,
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
  ],
})
export class SharedModule {}
