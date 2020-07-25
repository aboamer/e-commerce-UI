import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { ProductResponseModel } from '../models/product-response.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private products: ProductResponseModel[] = [];
  private SERVER_URL = "https://example.com";
  public dev = true;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.dev = dataService.dev;
  }

  getSingleOrder(orderId: number) {
    if (this.dataService.dev) {
      return this.dataService.fetchSingleOrder(orderId).toPromise();
    }
    else {
      return this.http.get<ProductResponseModel[]>(this.SERVER_URL + '/orders' + orderId).toPromise();
    }
  }
}