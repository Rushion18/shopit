import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getallproducts } from '../interface/products';
import { ProductsService } from '../service/Products/products.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css'],
})
export class UserhomeComponent {
  products: getallproducts[] = [];
  searchtext = '';
  
  constructor(
    private router: Router,
    private productservice: ProductsService
  ) {}
  ngOnInit() {
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    this.productservice.fetchAllProducts()?.subscribe((response: any) => {
      this.products = response;
      console.log(this.products);
    });
  }
}
