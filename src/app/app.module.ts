import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { AppComponent } from "./app.component";
import { TodosComponent } from "./MyComponents/todos/todos.component";
import { TodoItemComponent } from "./MyComponents/todo-item/todo-item.component";
import { AddTodoComponent } from "./MyComponents/add-todo/add-todo.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        AppComponent,
        TodosComponent,
        TodoItemComponent,
        AddTodoComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{}


