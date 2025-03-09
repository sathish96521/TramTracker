import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramDisplayComponent } from './tram-display.component';

describe('TramDisplayComponent', () => {
  let component: TramDisplayComponent;
  let fixture: ComponentFixture<TramDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TramDisplayComponent]
    });
    fixture = TestBed.createComponent(TramDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
