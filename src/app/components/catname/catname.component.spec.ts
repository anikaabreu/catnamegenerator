import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatnameComponent } from './catname.component';

describe('CatnameComponent', () => {
  let component: CatnameComponent;
  let fixture: ComponentFixture<CatnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
