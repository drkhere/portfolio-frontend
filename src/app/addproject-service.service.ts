import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})

export class AddprojectServiceService {

  // private baseUrl = 'http://localhost:5000/api/projects';
     private baseUrl = 'https://portfolio-backend-1-s77v.onrender.com/api/projects';
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/`);
  }

  addProject(project: Project): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, project);
  }
}
