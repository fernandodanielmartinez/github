import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindheroeComponent } from './findheroe.component';

describe('FindheroeComponent', () => {
  let component: FindheroeComponent;
  let fixture: ComponentFixture<FindheroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindheroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
