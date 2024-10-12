import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Todo } from '../../Todo';
import { Console } from 'console';
import { CommonModule, NgClass, NgFor, NgForOf } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgFor,NgForOf,NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  @Input() todo: Todo;
  @Input() i: number;

@Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todo>=new EventEmitter();

  constructor(){}
  ngOnInit(): void {
    
  }
  onClick(todo: Todo){
this.todoDelete.emit(todo);
    console.log("onClick has Triggered")
  }
  onCheckboxClick(todo){
    this.todoCheckbox.emit(todo);
  }
}
