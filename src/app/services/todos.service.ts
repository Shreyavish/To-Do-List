import { Injectable } from '@angular/core';
import {ToDo} from '../models/ToDo';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ToDo[]> {

    return this.http.get<ToDo[]>('http://localhost:3000/todoapi/getlist');

      }

   updateCompleted(todo: ToDo,userid:String): Observable<any> {

        let url = 'http://localhost:3000/todoapi/update/' +userid;

        return this.http.put(url,todo);
   }

   removeitem(todo: ToDo,userid:String): Observable<any>{
    let url = 'http://localhost:3000/todoapi/remove/' +userid;

    return this.http.delete(url);

   }

    additem(todo:ToDo): Observable<any>{

      let url = 'http://localhost:3000/todoapi/posttask' ;

      return this.http.post(url,todo);

    }

}
