import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatpictureComponent } from './catpicture.component';

describe('CatpictureComponent', () => {
  let component: CatpictureComponent;
  let fixture: ComponentFixture<CatpictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatpictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
