import { Component, signal } from '@angular/core';
import { StudentCrud } from './student-crud/student-crud';
import { Student} from './student';
import { StudentService } from './student-service/student-service';

@Component({
  imports: [StudentCrud],
  standalone:true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('student-crud');
}
