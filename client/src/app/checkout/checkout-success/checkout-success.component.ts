import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IOrder } from 'src/app/shared/models/order';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss'],
})
export class CheckoutSuccessComponent implements OnInit {
  faCheckCircle = faCheckCircle;
  order: IOrder;

  constructor(private router: Router) {
    const nagigation = this.router.getCurrentNavigation();
    const state = nagigation && nagigation.extras && nagigation.extras.state;
    if (state) {
      this.order = state as IOrder;
    }
  }

  ngOnInit(): void {}
}
