import { Component, OnInit, Input } from "@angular/core";
import { TodoService } from "src/app/todo.service";
import { take } from "rxjs/operators";

@Component({
  selector: ".app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  removeTodo(id) {
    this.todoService.removeTodo(id).subscribe(({ todo }: any) => {
      this.todoService.todos.pipe(take(1)).subscribe((todos: any[]) => {
        this.todoService.todos.next(todos.filter(t => t._id !== todo._id));
      });
    });
  }
}
