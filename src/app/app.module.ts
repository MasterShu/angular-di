import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from './shared/logger.service';
import { AnotherProductService } from './shared/another-product.service';


@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ProductService,
      useFactory: (logger: LoggerService, appConfig) => {
        if (appConfig.isDev) {
          return new ProductService(logger);
        } else {
          return new AnotherProductService(logger);
        }
      },
      deps: [LoggerService, 'APP_CONFIG'] // 所需要的依赖
    },
    LoggerService,
    {
      provide: 'APP_CONFIG', useValue: {isDev: false} // 提供对象类型的依赖
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 工厂方法仅使用一次, 生成的是单例
