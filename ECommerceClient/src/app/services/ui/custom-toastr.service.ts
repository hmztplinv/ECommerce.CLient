import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr:ToastrService) { }

  // message(message:string,title:string,type:ToastrType,position:ToastrPosition,delay:number=5) {
  //   this.toastr[type](message,title,{
  //     positionClass:position,
  //     timeOut:delay*1000
  //   });
  // }

  message(message:string,title:string,options:Partial<ToastrOptions>) {
    this.toastr[options.type!](message,title,{
      positionClass:options.position,
      timeOut:options.delay!*1000
    });
  }
}

export class ToastrOptions {
  public type: ToastrType= ToastrType.Info;
  public position: ToastrPosition= ToastrPosition.TopRight;
  public delay: number= 5;
}

export enum ToastrType {
  Success= 'success',
  Error= 'error',
  Warning= 'warning',
  Info= 'info'
}

export enum ToastrPosition {
  TopLeft= 'toast-top-left',
  TopRight= 'toast-top-right',
  TopCenter= 'toast-top-center',
  BottomLeft= 'toast-bottom-left',
  BottomRight= 'toast-bottom-right',
  BottomCenter= 'toast-bottom-center',
  FullWidthTop= 'toast-top-full-width',
  FullWidthBottom= 'toast-bottom-full-width',
}