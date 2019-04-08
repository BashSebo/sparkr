import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCardPage } from './selected-card.page';

describe('SelectedCardPage', () => {
  let component: SelectedCardPage;
  let fixture: ComponentFixture<SelectedCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
