import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentService } from './student-service';

describe('StudentService', () => {
  let component: StudentService;
  let fixture: ComponentFixture<StudentService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentService],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
