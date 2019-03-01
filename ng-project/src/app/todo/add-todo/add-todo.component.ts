import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TodoService } from "src/app/todo.service";
import { take } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"]
})
export class AddTodoComponent implements OnInit {
  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {}

  addTodo({ value, valid }: NgForm) {
    if (valid) {
      this.todoService.addTodo(value).subscribe(
        ({ todo }: any) => {
          console.log(todo);
          this.todoService.todos.pipe(take(1)).subscribe(todos => {
            this.todoService.todos.next([...todos, todo]);
            this.router.navigate(["/"]);
          });
        },
        err => {
          console.log("Error", err);
          this.router.navigate(["/"]);
        }
      );
    }
  }
}
