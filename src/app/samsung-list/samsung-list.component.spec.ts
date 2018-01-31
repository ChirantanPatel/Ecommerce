import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungListComponent } from './samsung-list.component';

describe('SamsungListComponent', () => {
  let component: SamsungListComponent;
  let fixture: ComponentFixture<SamsungListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsungListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
