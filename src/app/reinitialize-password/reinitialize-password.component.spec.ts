import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitializePasswordComponent } from './reinitialize-password.component';

describe('ReinitializePasswordComponent', () => {
  let component: ReinitializePasswordComponent;
  let fixture: ComponentFixture<ReinitializePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitializePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitializePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
