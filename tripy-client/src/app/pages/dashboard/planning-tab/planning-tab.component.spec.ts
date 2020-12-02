import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningTabComponent } from './planning-tab.component';

describe('PlanningTabComponent', () => {
  let component: PlanningTabComponent;
  let fixture: ComponentFixture<PlanningTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
