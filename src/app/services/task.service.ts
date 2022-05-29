import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../Task';
import { Observable } from 'rxjs';

const httpsOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  deleteTask(task: Task): Observable<Task[]> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.delete<Task[]>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpsOptions)
  }
}
