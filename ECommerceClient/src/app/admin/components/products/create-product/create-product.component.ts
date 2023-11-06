import { Type } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/Product';
import { AlertifyPosition, AlertifyService, AlertifyType } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent extends BaseComponent implements OnInit {

  constructor(private productService: ProductService, spinner: NgxSpinnerService, private alertify: AlertifyService) { super(spinner) }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createProduct(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerType.ballScaleMultiple);
    const createProduct: Product = new Product();
    createProduct.name = name.value;
    createProduct.stock = parseInt(stock.value);
    createProduct.price = parseInt(price.value);

    if(!name.value) {
      this.alertify.message("Product name is required",{type:AlertifyType.Error,position:AlertifyPosition.BottomLeft});
      return;
    }
    if(parseInt(stock.value) <= 0) {
      this.alertify.message("Product stock must be greater than 0",{type:AlertifyType.Error,position:AlertifyPosition.BottomLeft});
      return;
    }
    if(parseInt(price.value) <= 0) {
      this.alertify.message("Product price must be greater than 0",{type:AlertifyType.Error,position:AlertifyPosition.BottomLeft});
      return;
    }

    this.productService.createProduct(createProduct, () => {
      this.hideSpinner(SpinnerType.ballScaleMultiple);
      this.alertify.message("Product created successfully", { type: AlertifyType.Success, position: AlertifyPosition.BottomCenter });
    }, (errorMessage: string) =>  {
      this.alertify.message(errorMessage,{type:AlertifyType.Error,position:AlertifyPosition.BottomLeft}); });
  }

}
