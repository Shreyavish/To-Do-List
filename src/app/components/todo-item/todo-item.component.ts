import { Component, OnInit, Input, Output } from '@angular/core';
import {ToDo} from '../../models/ToDo';
import {TodosService} from '../../services/todos.service';
import {TodosComponent} from '../todos/todos.component';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ToDo;
  @Output() deleteTodo : EventEmitter<ToDo> = new EventEmitter();
  constructor(private todoservicevariable: TodosService) { }
  id: String;
  ngOnInit() {

  }


// when checkbox is ticked thhen line will be striked through it.
  onToggle(todo: ToDo,userid:String){
    // changing in UI
    todo.completed= !todo.completed;
    console.log(userid);


    // changing on dbT

    this.todoservicevariable.updateCompleted(todo,userid).subscribe( todo =>
      console.log(todo)

    )


  }

  onDelete(todo: ToDo,userid:String){
    this.todoservicevariable.removeitem(todo,userid).subscribe(todo =>
      console.log(todo));
    this.deleteTodo.emit(todo);
  }

// creating a method to dynamically change the styling of an element
  changeStyle(){

    let classes = {
      todo: true,
      'is-complete' : this.todo.completed
    }
    return classes;
  }

}
