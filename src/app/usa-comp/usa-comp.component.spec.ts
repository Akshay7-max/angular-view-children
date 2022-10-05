import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaCompComponent } from './usa-comp.component';

describe('UsaCompComponent', () => {
  let component: UsaCompComponent;
  let fixture: ComponentFixture<UsaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
