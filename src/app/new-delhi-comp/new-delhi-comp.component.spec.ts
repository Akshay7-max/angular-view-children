import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDelhiCompComponent } from './new-delhi-comp.component';

describe('NewDelhiCompComponent', () => {
  let component: NewDelhiCompComponent;
  let fixture: ComponentFixture<NewDelhiCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDelhiCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDelhiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
