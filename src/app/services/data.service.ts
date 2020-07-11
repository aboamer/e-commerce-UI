import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  public dev = true;

  products = [
    {id:"1",name:"shoes",image:"https://image.skechers.com/img/productimages/xlarge/232040_WNV.jpg"},
    {id:"2",name:"T-shirt",image:"https://bit.ly/3ipMOlm"},
    {id:"3",name:"pants",image:"https://bit.ly/3ipH23m"},
    {id:"4",name:"headfone",image:"https://images-na.ssl-images-amazon.com/images/I/41srzfxYpXL._AC_.jpg"},
    {id:"5",name:"TV",image:"https://bit.ly/2C0Xp5s"},]

  productsResponse = {count: 5, products: this.products};

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

  productObservable = new Observable((observer) => {
    
    // observable execution
    observer.next("bla bla bla")
    observer.complete()
})

  constructor() { }
}
