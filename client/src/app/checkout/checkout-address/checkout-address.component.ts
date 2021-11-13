import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss'],
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm: FormGroup;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  saveUserAddress() {
    this.accountService
      .updateUserAddress(this.checkoutForm.get('addressForm').value)
      .subscribe(
        () => this.toastr.success('Address saved'),
        (error) => {
          this.toastr.error(error.message);
        }
      );
  }
}
