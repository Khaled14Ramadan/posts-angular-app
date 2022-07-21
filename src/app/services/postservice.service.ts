import { Injectable } from '@angular/core';
import { post } from '../models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<post[]>
  {
    return this.http.get <post[]>("https://jsonplaceholder.typicode.com/posts?_limit=15");
  }
}
