import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs/internal/observable/of';

class MockProductService {
  products = [
    {id:"1",name:"shoes",image:"https://image.skechers.com/img/productimages/xlarge/232040_WNV.jpg", description:"a shoe", price:20, quantity:58},
    {id:"2",name:"T-shirt",image:"https://bit.ly/3ipMOlm", description:"a t-shirt", price:10, quantity:34}];
    getAllProducts(numberOfResults = 10): any {
    console.log('calling test getAllProducts');
    return of({ count: 2, products: this.products });
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let element: HTMLElement;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent],
      providers: [{ provide: ProductService, useClass: MockProductService },
      { provide: Router, useValue: router }]
    })
      .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', () => {
    component.selectProduct(12);
    expect(router.navigate).toHaveBeenCalledWith(['/product', 12]);
  });
});
