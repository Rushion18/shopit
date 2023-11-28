import { Component, Input } from '@angular/core';
import { getallproducts } from '../interface/products';
import { Router } from '@angular/router';
import { ProductsService } from '../service/Products/products.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent {
  @Input() product: getallproducts[] | undefined;
  viewSingleProduct: getallproducts[] = [];
  
  constructor(
    private router: Router,
    private productservice: ProductsService
  ) {}

  viewProduct(productID: string) {
    // console.log(productID);
    this.productservice
      .getProductByID(productID)
      ?.subscribe((response: getallproducts[]) => {
        //console.log(response);
        this.viewSingleProduct = response;
        console.log(this.viewSingleProduct);
      });
  }
}
