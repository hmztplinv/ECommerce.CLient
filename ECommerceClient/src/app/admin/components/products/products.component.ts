import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/Product';
import { HttpclientService } from 'src/app/services/common/httpclient.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpclientService) { super(spinner); }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.ballScaleMultiple);
    // this.httpClientService.get({ controller: "products" }).subscribe((data => console.log(data)));
    // this.httpClientService.post({ controller: "products" }, { name: "test",stock:10,price:100 }).subscribe((data => console.log(data)));
    // this.httpClientService.put({ controller: "products" }, {id:"653dcef8-6f39-4f1f-83db-8457010d5972", name: "test2",stock:20,price:200 }).subscribe()
    // this.httpClientService.delete({ controller: "products" },"653dcef8-6f39-4f1f-83db-8457010d5972").subscribe()

    // this.httpClientService.get({ controller: "posts",anotherBaseUrl:"https://jsonplaceholder.typicode.com" }).subscribe((data => console.log(data)));
    this.httpClientService.get<Product>({ controller: "products" }).subscribe((data => console.log(data)));
  }
}
