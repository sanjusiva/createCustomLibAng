import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsCustomLibComponent } from './bts-custom-lib.component';

describe('BtsCustomLibComponent', () => {
  let component: BtsCustomLibComponent;
  let fixture: ComponentFixture<BtsCustomLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtsCustomLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtsCustomLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
