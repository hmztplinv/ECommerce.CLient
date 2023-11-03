import { Injectable } from '@angular/core';
declare var alertify: any;


@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  // message(message: string,type: AlertifyType,position:AlertifyPosition,delay:number=5) {
  //   alertify.set('notifier','delay',delay);
  //   alertify.set('notifier','position',position);
  //   alertify[type](message);
  // }

  message(message:string,options:Partial<AlertifyOptions>) {
    alertify.set('notifier','delay',options.delay);
    alertify.set('notifier','position',options.position);
    alertify[options.type!](message);
  }

  dismissAll() {
    alertify.dismissAll();
  }
}

export class AlertifyOptions {
  public type: AlertifyType= AlertifyType.Message;
  public position: AlertifyPosition= AlertifyPosition.BottomLeft;
  public delay: number= 5;
}

export enum AlertifyType {
  Success= 'success',
  Error= 'error',
  Warning= 'warning',
  Message= 'message',
  Notify= 'notify'
}

export enum AlertifyPosition {
  TopLeft= 'top-left',
  TopRight= 'top-right',
  TopCenter= 'top-center',
  BottomLeft= 'bottom-left',
  BottomRight= 'bottom-right',
  BottomCenter= 'bottom-center'
}
