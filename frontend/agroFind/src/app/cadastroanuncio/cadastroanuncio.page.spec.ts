import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroanuncioPage } from './cadastroanuncio.page';

describe('CadastroanuncioPage', () => {
  let component: CadastroanuncioPage;
  let fixture: ComponentFixture<CadastroanuncioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroanuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
