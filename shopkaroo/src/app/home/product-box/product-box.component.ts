import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css'
})
export class ProductBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  @Input() product : Product | undefined;
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
   this.addToCart.emit(this.product);
  }

}
