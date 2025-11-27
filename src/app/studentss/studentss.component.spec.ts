import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentssComponent } from './studentss.component';

describe('StudentssComponent', () => {
  let component: StudentssComponent;
  let fixture: ComponentFixture<StudentssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
