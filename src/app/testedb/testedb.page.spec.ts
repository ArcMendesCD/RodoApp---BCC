import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestedbPage } from './testedb.page';

describe('TestedbPage', () => {
  let component: TestedbPage;
  let fixture: ComponentFixture<TestedbPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestedbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
