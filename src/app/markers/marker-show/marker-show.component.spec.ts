import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerShowComponent } from './marker-show.component';

describe('MarkerShowComponent', () => {
  let component: MarkerShowComponent;
  let fixture: ComponentFixture<MarkerShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
