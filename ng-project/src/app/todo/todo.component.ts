import { Component, OnInit, OnDestroy } from "@angular/core";
import { TodoService } from "../todo.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html"
})
export class TodoComponent implements OnInit, OnDestroy {
  todos: any[] = [];
  private _todos: Subscription;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this._todos = this.todoService.todos.subscribe(
      todos => (this.todos = todos)
    );
  }

  ngOnDestroy() {
    this._todos.unsubscribe();
  }
}
