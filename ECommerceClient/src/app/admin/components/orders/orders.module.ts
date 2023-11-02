import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ { path: '', component: OrdersComponent } ])
  ]
})
export class OrdersModule { }
