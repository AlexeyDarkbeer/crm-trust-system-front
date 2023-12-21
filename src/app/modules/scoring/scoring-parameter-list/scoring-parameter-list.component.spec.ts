import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringParameterListComponent } from './scoring-parameter-list.component';

describe('ScoringParameterListComponent', () => {
  let component: ScoringParameterListComponent;
  let fixture: ComponentFixture<ScoringParameterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoringParameterListComponent]
    });
    fixture = TestBed.createComponent(ScoringParameterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
