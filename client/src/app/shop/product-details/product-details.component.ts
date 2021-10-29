import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: IProduct;
  productSub: Subscription;
  quantity = 1;

  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private backetService: BasketService
  ) {
    this.bcService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  addItemToBasket() {
    this.backetService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  loadProduct() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.productSub = this.shopService.getProduct(id).subscribe(
      (product) => {
        this.product = product;
        this.bcService.set('@productDetails', product.name);
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy(): void {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }
}
