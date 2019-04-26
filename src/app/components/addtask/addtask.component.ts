import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {ToDo} from '../../models/ToDo';
import {TodosService} from '../../services/todos.service';
import {TodosComponent} from '../todos/todos.component';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {


  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  constructor(private todoservicevariable: TodosService,private todocomp:TodosComponent) { }
  id: number;
  title: string;
  completed: boolean;
  ngOnInit(){}

  addtasktolist(){
    //console.log(todo);
    let todo = {
      id: 0,
      title: this.title,
      completed: false

    };
    //console.log(todo);
     this.todoservicevariable.additem(todo).subscribe( todo =>
      console.log(todo));
      //console.log(todo);
      this.addTodo.emit(todo);

     // window.location.reload();



  }
}
