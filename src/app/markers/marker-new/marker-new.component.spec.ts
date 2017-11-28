import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerNewComponent } from './marker-new.component';

describe('MarkerNewComponent', () => {
  let component: MarkerNewComponent;
  let fixture: ComponentFixture<MarkerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
