import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineListDetailComponent } from './wine-list-detail.component';

describe('WineListDetailComponent', () => {
  let component: WineListDetailComponent;
  let fixture: ComponentFixture<WineListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
