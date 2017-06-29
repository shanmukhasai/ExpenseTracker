import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpdetailsComponent } from './gpdetails.component';

describe('GpdetailsComponent', () => {
  let component: GpdetailsComponent;
  let fixture: ComponentFixture<GpdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
