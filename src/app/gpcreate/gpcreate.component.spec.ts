import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpcreateComponent } from './gpcreate.component';

describe('GpcreateComponent', () => {
  let component: GpcreateComponent;
  let fixture: ComponentFixture<GpcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
