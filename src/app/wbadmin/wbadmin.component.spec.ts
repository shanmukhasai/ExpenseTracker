import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbadminComponent } from './wbadmin.component';

describe('WbadminComponent', () => {
  let component: WbadminComponent;
  let fixture: ComponentFixture<WbadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
