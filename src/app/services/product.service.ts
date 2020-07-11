import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from './data.service';

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
}
