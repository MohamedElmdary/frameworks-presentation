import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AddTodoComponent } from "./todo/add-todo/add-todo.component";
import { TodoItemComponent } from "./todo/todo-item/todo-item.component";
import { EditTodoComponent } from "./todo/edit-todo/edit-todo.component";

const appRoutes: Routes = [
  {
    path: "",
    component: TodoComponent
  },
  {
    path: "add-todo",
    component: AddTodoComponent
  },
  {
    path: "edit-todo/:id",
    component: EditTodoComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    AddTodoComponent,
    TodoItemComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
