import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalConditionListComponent } from './critical-condition-list.component';

describe('CriticalConditionListComponent', () => {
  let component: CriticalConditionListComponent;
  let fixture: ComponentFixture<CriticalConditionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalConditionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalConditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
