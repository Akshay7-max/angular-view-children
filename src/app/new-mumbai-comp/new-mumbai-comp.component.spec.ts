import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMumbaiCompComponent } from './new-mumbai-comp.component';

describe('NewMumbaiCompComponent', () => {
  let component: NewMumbaiCompComponent;
  let fixture: ComponentFixture<NewMumbaiCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMumbaiCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMumbaiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
