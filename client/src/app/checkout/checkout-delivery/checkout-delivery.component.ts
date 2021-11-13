import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDeliveryMethod } from 'src/app/shared/models/deliveryMethod';
import { CheckoutService } from '../checkout.service';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss'],
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm: FormGroup;
  deliveryMethods: IDeliveryMethod[];
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  constructor(
    private checkoutService: CheckoutService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethods().subscribe(
      (dm: IDeliveryMethod[]) => {
        this.deliveryMethods = dm;
      },
      (error) => console.log(error)
    );
  }

  setShippingPrice(deliveryMethod: IDeliveryMethod) {
    this.basketService.setShippingPrice(deliveryMethod);
  }
}
