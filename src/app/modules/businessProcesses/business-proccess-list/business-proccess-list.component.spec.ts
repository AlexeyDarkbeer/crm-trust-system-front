import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProccessListComponent } from './business-proccess-list.component';

describe('BusinessProccessListComponent', () => {
  let component: BusinessProccessListComponent;
  let fixture: ComponentFixture<BusinessProccessListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessProccessListComponent]
    });
    fixture = TestBed.createComponent(BusinessProccessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
