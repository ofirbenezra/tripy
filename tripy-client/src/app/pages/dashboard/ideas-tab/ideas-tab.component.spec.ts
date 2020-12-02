import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasTabComponent } from './ideas-tab.component';

describe('IdeasTabComponent', () => {
  let component: IdeasTabComponent;
  let fixture: ComponentFixture<IdeasTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
