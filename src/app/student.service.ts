import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  getStudentsList(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`);
  }

  createStudent(student:Student) : Observable<Object>{
    return this.http.post(`${this.baseUrl}/addstudent`, student);
  }

  getStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(`${this.baseUrl}/student/${id}`)
  }

  updateStudent(id: number, student: Student ): Observable<Object>{
    
    return this.http.put(`${this.baseUrl}/student/${id}`, student);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/student/${id}`);
  }

}
