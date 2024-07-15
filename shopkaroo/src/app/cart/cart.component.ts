
import { CartService } from '../services/cart.service';
import { Cart, CartItem } from './../models/cart.model';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })


  }

  cart : Cart = {items:[
    {
    product: 'https://via.placeholder.com/150',
    name:'sneakers',
    price: 150,
    quantity: 1,
    id:11
  },
  {
    product: 'https://via.placeholder.com/150',
    name:'shoes',
    price: 150,
    quantity: 2,
    id:12
  },
  {
    product: 'https://via.placeholder.com/150',
    name:'joogers',
    price: 150,
    quantity: 1,
    id:13
  }
  ]};

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


}
