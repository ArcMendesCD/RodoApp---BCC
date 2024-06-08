import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RodoAppPage } from './rodo-app.page';

describe('RodoAppPage', () => {
  let component: RodoAppPage;
  let fixture: ComponentFixture<RodoAppPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RodoAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
