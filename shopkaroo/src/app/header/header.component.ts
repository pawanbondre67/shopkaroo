
import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/authservice/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private cartService : CartService , private authService : AuthService){}

  private _cart : Cart ={ items: []};
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = this._cart.items
    .map((item)=> item.quantity)
   .reduce((prev, current) => prev + current, 0);
  }

  getTotal(items : Array<CartItem>):number{
    return this.cartService.getTotal(items);

  }

  onClearCart(){
    this.cartService.clearCart();
  }

  logout(){
    this.authService.logout();
  }


}
