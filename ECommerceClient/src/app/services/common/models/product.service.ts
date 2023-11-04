import { Injectable } from '@angular/core';
import { HttpclientService } from '../httpclient.service';
import { Product } from 'src/app/contracts/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpclientService) { }

  createProduct(product:Product,successCallback?:any,errorCallback?:any){
    return this.httpClientService.post({ controller: "products" }, product).subscribe((data => successCallback(data)),error=>errorCallback(error));
  }

  
}
