import { on } from 'node:events';

import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { Cart, CartItem } from './../models/cart.model';
import { Component,OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { stripe_publishable_key } from '../environment/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  constructor(private cartService : CartService, private http : HttpClient) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })


  }

  cart : Cart = {items:[ ]};

   getTotal(items : Array<CartItem>):number{
     return this.cartService.getTotal(items);

}


onAddQuantity(item: CartItem): void {
  this.cartService.addToCart(item);
}


onRemoveFromCart(item: CartItem): void {
  this.cartService.removeFromCart(item);
}

onRemoveQuantity(item: CartItem): void {
  this.cartService.removeQuantity(item);
}

onCheckout(): void {
  this.http.post('https://shopkaroo-backend.onrender.com/checkout',
  { items: this.cart.items})
    .subscribe(async (res:any) => {
    let stripe = await loadStripe(stripe_publishable_key);
  });
}
}
