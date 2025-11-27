import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclessComponent } from './vehicless.component';

describe('VehiclessComponent', () => {
  let component: VehiclessComponent;
  let fixture: ComponentFixture<VehiclessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
