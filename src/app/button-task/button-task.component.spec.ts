import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTaskComponent } from './button-task.component';

describe('ButtonTaskComponent', () => {
  let component: ButtonTaskComponent;
  let fixture: ComponentFixture<ButtonTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
