import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellersProductComponent } from './top-sellers-product.component';

describe('TopSellersProductComponent', () => {
  let component: TopSellersProductComponent;
  let fixture: ComponentFixture<TopSellersProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSellersProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopSellersProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
