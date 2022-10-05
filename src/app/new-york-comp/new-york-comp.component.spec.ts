import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYorkCompComponent } from './new-york-comp.component';

describe('NewYorkCompComponent', () => {
  let component: NewYorkCompComponent;
  let fixture: ComponentFixture<NewYorkCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewYorkCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewYorkCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
