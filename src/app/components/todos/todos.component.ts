import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../models/ToDo';
import {TodosService} from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todo: ToDo[];


  constructor( private todoservicevariable: TodosService) { }

  ngOnInit() {

     this.todoservicevariable.getTodos().subscribe(todo =>{
       this.todo = todo;
     });


}
deleteToDo(todo){
  console.log('deleted through parent');
  this.ngOnInit();
}

addToDo(todo){
  console.log('added through parent');
 this.ngOnInit();
}
}
