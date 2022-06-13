import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersonajesComponent } from './info-personajes.component';

describe('InfoPersonajesComponent', () => {
  let component: InfoPersonajesComponent;
  let fixture: ComponentFixture<InfoPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
