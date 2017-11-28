import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerIndexComponent } from './marker-index.component';

describe('MarkerIndexComponent', () => {
  let component: MarkerIndexComponent;
  let fixture: ComponentFixture<MarkerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
