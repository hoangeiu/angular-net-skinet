import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faMinusCircle,
  faPlusCircle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketItem } from '../../models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
})
export class BasketSummaryComponent implements OnInit {
  basket$: Observable<IBasket>;
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;
  faTrashAlt = faTrashAlt;
  @Input() isBasket = true;
  @Output() decrement: EventEmitter<IBasketItem> =
    new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> =
    new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  decrementItemQuantity(item: IBasketItem) {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.increment.emit(item);
  }

  removeBasketItem(item: IBasketItem) {
    this.remove.emit(item);
  }
}
