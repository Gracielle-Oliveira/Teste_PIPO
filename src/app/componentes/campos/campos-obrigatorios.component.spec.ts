import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposObrigatoriosComponent } from './campos-obrigatorios.component';

describe('CamposObrigatoriosComponent', () => {
  let component: CamposObrigatoriosComponent;
  let fixture: ComponentFixture<CamposObrigatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamposObrigatoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamposObrigatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
