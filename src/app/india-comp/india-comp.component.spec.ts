import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaCompComponent } from './india-comp.component';

describe('IndiaCompComponent', () => {
  let component: IndiaCompComponent;
  let fixture: ComponentFixture<IndiaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiaCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
