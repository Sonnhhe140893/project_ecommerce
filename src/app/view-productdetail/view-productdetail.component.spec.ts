import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductdetailComponent } from './view-productdetail.component';

describe('ViewProductdetailComponent', () => {
  let component: ViewProductdetailComponent;
  let fixture: ComponentFixture<ViewProductdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewProductdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewProductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
