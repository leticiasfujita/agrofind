import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaprincipalPage } from './telaprincipal.page';

describe('TelaprincipalPage', () => {
  let component: TelaprincipalPage;
  let fixture: ComponentFixture<TelaprincipalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
