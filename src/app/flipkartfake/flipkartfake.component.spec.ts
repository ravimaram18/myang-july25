import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartfakeComponent } from './flipkartfake.component';

describe('FlipkartfakeComponent', () => {
  let component: FlipkartfakeComponent;
  let fixture: ComponentFixture<FlipkartfakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartfakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartfakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
