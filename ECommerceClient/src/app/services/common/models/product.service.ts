import { Injectable } from '@angular/core';
import { HttpclientService } from '../httpclient.service';
import { Product } from 'src/app/contracts/Product';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpclientService) { }

  createProduct(product: Product, successCallback?: any, errorCallback?: any)  {
     this.httpClientService.post({ controller: "products" }, product)
      .subscribe(result => {
        successCallback();
      }, (errorResponse: HttpErrorResponse) => {
        const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
        let message = "";
        _error.forEach((val, index) => {
          val.value.forEach((_val, _index) => {
            message += `${_val}`;
          });
        });
        if (errorCallback) {
          errorCallback(message);
        }
      });
  }


}
