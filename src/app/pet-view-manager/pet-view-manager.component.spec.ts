import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetViewManagerComponent } from './pet-view-manager.component';

describe('PetViewManagerComponent', () => {
  let component: PetViewManagerComponent;
  let fixture: ComponentFixture<PetViewManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetViewManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetViewManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
