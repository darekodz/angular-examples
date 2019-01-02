import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgThumbComponent } from './img-thumb.component';

describe('ImgThumbComponent', () => {
  let component: ImgThumbComponent;
  let fixture: ComponentFixture<ImgThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
