import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from '../Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:5000/tasks');
  }
}
