import { Component, OnInit } from '@angular/core';
import { TodosComponent } from "./MyComponents/todos/todos.component";
import { TodoItemComponent } from "./MyComponents/todo-item/todo-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TodosComponent, TodoItemComponent]
})
export class AppComponent {
  title = 'cwh-todo-list';
}
