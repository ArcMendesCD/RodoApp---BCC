import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotaFiscalPage } from './nota-fiscal.page';

describe('NotaFiscalPage', () => {
  let component: NotaFiscalPage;
  let fixture: ComponentFixture<NotaFiscalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaFiscalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
