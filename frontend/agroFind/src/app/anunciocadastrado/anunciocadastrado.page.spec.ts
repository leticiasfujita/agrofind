import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnunciocadastradoPage } from './anunciocadastrado.page';

describe('AnunciocadastradoPage', () => {
  let component: AnunciocadastradoPage;
  let fixture: ComponentFixture<AnunciocadastradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciocadastradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
