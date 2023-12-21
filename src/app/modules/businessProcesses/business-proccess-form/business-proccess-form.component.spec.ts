import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProccessFormComponent } from './business-proccess-form.component';

describe('BusinessProccessFormComponent', () => {
  let component: BusinessProccessFormComponent;
  let fixture: ComponentFixture<BusinessProccessFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessProccessFormComponent]
    });
    fixture = TestBed.createComponent(BusinessProccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
