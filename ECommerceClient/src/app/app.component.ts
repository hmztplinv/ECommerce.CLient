import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrPosition, ToastrType } from './services/ui/custom-toastr.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private customToastr: CustomToastrService) 
  {
    // customToastr.message('Hello world!', 'Toastr fun!', ToastrType.Info, ToastrPosition.TopRight, 5);

    customToastr.message('Hello world!', 'Toastr fun!', {
      type: ToastrType.Success,
      position: ToastrPosition.TopRight,
      delay: 5
    });
  }
}

