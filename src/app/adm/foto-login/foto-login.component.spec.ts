import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoLoginComponent } from './foto-login.component';

describe('FotoLoginComponent', () => {
  let component: FotoLoginComponent;
  let fixture: ComponentFixture<FotoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
