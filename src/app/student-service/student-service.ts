import { Injectable,signal, WritableSignal } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root', // avialable app wide no need to provide add providers
})
export class StudentService {
  //1. signals holding the list of students (our "database")
  students: WritableSignal<Student[]> = signal<Student[]>([
    {id:1,name:'demo',email:'demo@gmail.com',marks:98},
    {id:2,name:'test',email:'test@gmail.com',marks:89}
  ])
  // helper to auto-generate next id
  private nextId = 3;

  // Read - just return the signal itself,component will read it directly 
  getStudents(){
    return this.students;
  }
  //create - add a new student 
  addStudent(Student:Omit<Student,'id'>){
    const newStudent : Student = {id:this.nextId++,...Student};
    //update() gives us current array so we can return a new one (immutability)
    this.students.update(list => [...list, newStudent]);

  }
   // Read - just return the signal itself,component will read it directly 
  getStudent(){
    return this.students;
  }

  //update - find student by id and replace updated values 
  updateStudent(updated: Student){
    this.students.update(list =>
      list.map(s => (s.id === updated.id ? updated: s))
    )
  }

  //DELETE - remove student by id 
  deleteStudent(id:number){
    this.students.update(list => list.filter(s => s.id !== id))
  }
}
