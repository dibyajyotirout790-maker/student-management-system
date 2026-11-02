import { TestBed } from '@angular/core/testing';
import { StudentModel } from './student.model';

describe('StudentModel', () => {
  let service: StudentModel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
