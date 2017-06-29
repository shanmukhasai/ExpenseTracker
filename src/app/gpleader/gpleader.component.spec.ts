import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpleaderComponent } from './gpleader.component';

describe('GpleaderComponent', () => {
  let component: GpleaderComponent;
  let fixture: ComponentFixture<GpleaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpleaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
