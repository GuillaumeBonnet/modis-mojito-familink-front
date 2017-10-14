import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContactItemComponent } from './list-contact-item.component';

describe('ListContactItemComponent', () => {
  let component: ListContactItemComponent;
  let fixture: ComponentFixture<ListContactItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
