import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../../models/product';
import { LoggerService } from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    return new Product(1, 'OPPO R11s', 3288, 'new OPPO phone');
  }

}
