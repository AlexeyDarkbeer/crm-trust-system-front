import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsCreateComponent } from './persons-create.component';

describe('PersonsCreateComponent', () => {
  let component: PersonsCreateComponent;
  let fixture: ComponentFixture<PersonsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonsCreateComponent]
    });
    fixture = TestBed.createComponent(PersonsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
