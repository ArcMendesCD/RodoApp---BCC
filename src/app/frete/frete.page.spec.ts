import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FretePage } from './frete.page';

describe('FretePage', () => {
  let component: FretePage;
  let fixture: ComponentFixture<FretePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FretePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
