import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './addproject-service.service';

export interface Mail {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailService {

  // private mailurl = "http://localhost:5000/api/contact";
  private mailurl = "https://portfolio-backend-1-s77v.onrender.com/api/contact";

  constructor(private http: HttpClient) { }

  sendMail(mail: Mail): Observable<any> {
    return this.http.post(`${this.mailurl}/`, mail);
  }
}
