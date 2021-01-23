import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../products';
import { ProductService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  productService: ProductService;

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((data: IProduct[]) => (this.products = { ...data }));
  }

  share() {
    window.alert('The product has been shared');
  }

  onNotify() {
    window.alert('You will be notified.');
  }
}
