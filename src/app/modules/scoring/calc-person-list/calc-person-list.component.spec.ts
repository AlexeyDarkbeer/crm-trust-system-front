import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcPersonListComponent } from './calc-person-list.component';

describe('CalcPersonListComponent', () => {
  let component: CalcPersonListComponent;
  let fixture: ComponentFixture<CalcPersonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcPersonListComponent]
    });
    fixture = TestBed.createComponent(CalcPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
