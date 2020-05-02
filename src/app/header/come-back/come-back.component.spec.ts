import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeBackComponent } from './come-back.component';

describe('ComeBackComponent', () => {
  let component: ComeBackComponent;
  let fixture: ComponentFixture<ComeBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComeBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComeBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
