import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../service/Products/products.service';
import { getallproducts } from '../interface/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];
  cartProducts: any[] = [];
  products: getallproducts[] = [];

  constructor(
    private router: Router,
    private productservice: ProductsService
  ) {}
  ngOnInit() {
    // this.displayAllItems();
    this.loadCart();
  }
  //FETCH ALL PRODUCTS
  fetchAllProducts() {
    this.productservice.fetchAllProducts()?.subscribe((response: any) => {
      this.products = response;
      console.log(this.products);
    });
  }
  loadCart() {
    const cartString = localStorage.getItem('cart');
    this.cartItems = cartString ? JSON.parse(cartString) : [];
    // this.updateCartCount();
  }

  // displayAllItems() {
  //   this.cartItems = localStorage.getItem('cart');
  //   console.log(this.cartItems);
  // }
}
