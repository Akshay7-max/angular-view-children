import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingtonCompComponent } from './washington-comp.component';

describe('WashingtonCompComponent', () => {
  let component: WashingtonCompComponent;
  let fixture: ComponentFixture<WashingtonCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingtonCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashingtonCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
