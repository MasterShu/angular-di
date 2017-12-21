import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    this.logger.log('getProduct function is called');
    return new Product(0, 'xiaomi 6', 3000, 'The popular phone in China');
  }

}


