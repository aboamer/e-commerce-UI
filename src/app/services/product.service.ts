import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { ProductModelServer } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = "https://example.com";
  public dev = true;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.dev = dataService.dev;
   }

  getAllProducts(numberOfResults = 10): any {
    console.log('amer');
    if (this.dataService.dev) {
      return this.dataService.fetchProducts();
    }
    else {
      let params = new HttpParams()
        .set('limit', numberOfResults.toString());
      return this.http.get(this.SERVER_URL + '/products', { params });
    }
  }

  getSingleProduct(id: number): Observable<ProductModelServer> {
    if (this.dataService.dev) {
      return this.dataService.fetchSingleProduct(id);
    }
    else {
      return this.http.get<ProductModelServer>(this.SERVER_URL + '/product' + id);
    }
  }

  getProductsFromCategory(catName: string): Observable<ProductModelServer[]> {
    if (this.dataService.dev) {
      return this.dataService.fetchProductsFromCategory(catName);
    }
    else {
      return this.http.get<ProductModelServer[]>(this.SERVER_URL + '/product/category/' + catName);
    }
  }
}
