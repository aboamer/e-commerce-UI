import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = "";
  private dev = true;

  constructor(private http: HttpClient, private dataService: DataService) { }

  getAllProducts(numberOfResults = 10): any {
    if (this.dev) {
      console.log('amer');
      return this.dataService.fetchProducts();
    }
    else {
      let params = new HttpParams()
        .set('limit', numberOfResults.toString());
      return this.http.get(this.SERVER_URL + '/products', { params });
    }
  }
}
