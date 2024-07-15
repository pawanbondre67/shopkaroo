import { StoreService } from './../services/store.service';
import { Product } from '../models/product.model';
import { CartService } from './../services/cart.service';
import { Component, OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit , OnDestroy{
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.productSubscription){
      this.productSubscription.unsubscribe();
    }
  }

  products : Array<Product> | undefined;
  sort : string = 'low to high';
  productSubscription : Subscription | undefined;


  constructor(private cartService : CartService , private storeService : StoreService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProducts();

  }

  getProducts(): void {
    this.productSubscription = this.storeService.getAllProducts(this.sort).subscribe((_products) => {
      this.products = _products;
    })
  }



onAddToCart(product: Product): void {

  this.cartService.addToCart({
    product : product.image,
    name : product.title,
    price : product.price,
    quantity : 1,
    id : product.id
  });



}


}
