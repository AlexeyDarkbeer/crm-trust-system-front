import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringParameterFormComponent } from './scoring-parameter-form.component';

describe('ScoringParameterFormComponent', () => {
  let component: ScoringParameterFormComponent;
  let fixture: ComponentFixture<ScoringParameterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoringParameterFormComponent]
    });
    fixture = TestBed.createComponent(ScoringParameterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
