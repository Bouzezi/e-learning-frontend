import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Course } from '../models/course';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  baseUrl = `http://localhost:8000/api/courses`;

  constructor(private http:HttpClient) { }

  getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }
  addCourse(formData: FormData) {
    return this.http.post(`${this.baseUrl}`,formData);
  }
  deleteCourse(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      catchError((error: any) => {
        const errorMessage = error?.error?.message || 'An error occurred';
        return throwError(errorMessage);
      })
    );
  }
  
  updateCourse(id:any, formData: FormData){
    return this.http.put(`${this.baseUrl}/${id}`,formData);
  }
  getCourseById(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
