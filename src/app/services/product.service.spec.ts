import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { ProductService } from './product.service';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductService', () => {
  let dService: DataService;
  let prService: ProductService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    dService = TestBed.get(DataService);
    prService = TestBed.get(ProductService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(prService).toBeTruthy();
  });
  it('should reflect data service dev value to productService value', () => {
    dService.dev = false;
    expect(prService.dev).toBeFalse;
  });

  it(
    'should get products correctly',
    fakeAsync(
        () => {

          dService.dev = false;
          // Set up
          const url = 'https://example.com/products?limit=10';
          const products = [
            {id:"1",name:"shoes",image:"https://image.skechers.com/img/productimages/xlarge/232040_WNV.jpg"},
            {id:"2",name:"headfone",image:"https://images-na.ssl-images-amazon.com/images/I/41srzfxYpXL._AC_.jpg"}]
        
          const productsResponse = {count: 2, products: products};
          let response = null;
          // End Setup

          prService.getAllProducts(10).subscribe(
            (receivedResponse: any) => {
              response = receivedResponse;
            },
            (error: any) => {}
          );

          const requestWrapper = backend.expectOne({url: 'https://example.com/products?limit=10'});
          requestWrapper.flush({body: productsResponse, status: 200});

          tick();

          expect(requestWrapper.request.method).toEqual('GET');
          expect(response.body).toEqual(productsResponse);
          expect(response.status).toBe(200);
        }
    )
  );
});
