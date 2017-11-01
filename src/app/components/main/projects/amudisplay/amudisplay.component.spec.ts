import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmudisplayComponent } from './amudisplay.component';

describe('AmudisplayComponent', () => {
  let component: AmudisplayComponent;
  let fixture: ComponentFixture<AmudisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmudisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmudisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
