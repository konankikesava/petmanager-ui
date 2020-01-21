import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetViewEdittComponent } from './pet-view-editt.component';

describe('PetViewEdittComponent', () => {
  let component: PetViewEdittComponent;
  let fixture: ComponentFixture<PetViewEdittComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetViewEdittComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetViewEdittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
