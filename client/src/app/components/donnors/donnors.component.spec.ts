import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnorsComponent } from './donnors.component';

describe('DonnorsComponent', () => {
  let component: DonnorsComponent;
  let fixture: ComponentFixture<DonnorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonnorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
