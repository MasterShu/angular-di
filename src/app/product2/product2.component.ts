import { Component, OnInit, Injector } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../shared/product.service';
import { AnotherProductService } from '../shared/another-product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  product: Product;
  private productService: ProductService;

  // 自动注册使用
  // constructor(private productService: ProductService) { }

  // 演示一段手动注入的过程  不推荐使用
  constructor(private injector: Injector) {
    this.productService = injector.get(ProductService);
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
