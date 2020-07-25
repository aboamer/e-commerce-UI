import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductModelServer } from '../models/product.model';
import { ProductResponseModel } from '../models/product-response.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

  public dev = true;

  products = [
    { id: 1, name: "shoes", category: "", image: "https://image.skechers.com/img/productimages/xlarge/232040_WNV.jpg", description: "a shoe", price: 20, quantity: 58, images: "" },
    { id: 2, name: "T-shirt", category: "", image: "https://bit.ly/3ipMOlm", description: "a t-shirt", price: 10, quantity: 34, images: "" },
    { id: 3, name: "pants", category: "", image: "https://bit.ly/3ipH23m", description: "pants", price: 20, quantity: 58, images: "" },
    { id: 4, name: "headfone", category: "", image: "https://images-na.ssl-images-amazon.com/images/I/41srzfxYpXL._AC_.jpg", description: "a headfone", price: 20, quantity: 58, images: "" },
    { id: 5, name: "TV", category: "", image: "https://bit.ly/2C0Xp5s", description: "a TV", price: 20, quantity: 0, images: "" }]

  productsResponse = { count: 5, products: this.products };

  fetchProducts(): Observable<any> {
    let observable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.productsResponse); // This method same as resolve() method from Angular 1
        observer.complete();//to show we are done with our processing
        // observer.error(new Error("error message"));
      }, 2000);

    });

    return observable;
  }

  fetchSingleProduct(id: number): Observable<ProductModelServer> {
    let observable = new Observable<ProductModelServer>(observer => {
      setTimeout(() => {
        observer.next(this.productsResponse.products[id]);
        observer.complete();
      }, 2000);

    });

    return observable;
  }

  fetchProductsFromCategory(catName: string): Observable<ProductModelServer[]> {
    let observable = new Observable<ProductModelServer[]>(observer => {
      setTimeout(() => {
        observer.next(this.productsResponse.products.filter(
          product => product.category === catName
        ));
        observer.complete();
      }, 2000);

    });

    return observable;
  }

  fetchSingleOrder(orderId: number): Observable<ProductResponseModel[]> {
    let productResponseModel1: ProductResponseModel = new ProductResponseModel(1, 'order1', 'this is order 1', 40, 10, 'order-1-img');
    let productResponseModel2: ProductResponseModel = new ProductResponseModel(2, 'order2', 'this is order 2', 42, 14, 'order-2-img');
    let productResponseModelArr:ProductResponseModel[] = new ProductResponseModel[2]();
    productResponseModelArr.push(productResponseModel1);
    productResponseModelArr.push(productResponseModel2);
    let observable = new Observable<ProductResponseModel[]>(observer => {
      setTimeout(() => {
        observer.next(productResponseModelArr);
        observer.complete();
      }, 2000);

    });

    return observable;
  }
}
