import { Component, OnInit } from "@angular/core";
import { TodoService } from "./todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos();
  }
}
