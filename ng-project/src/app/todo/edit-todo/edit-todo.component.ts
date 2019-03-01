import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/todo.service";
import { take } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-edit-todo",
  templateUrl: "./edit-todo.component.html",
  styleUrls: ["./edit-todo.component.css"]
})
export class EditTodoComponent implements OnInit {
  todo: any;
  title: string;
  content: string;
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.todoService.todos.pipe(take(1)).subscribe((todos: any[]) => {
      const todo = todos.filter(todo => todo._id === id)[0];
      if (!todo) {
        return this.router.navigate(["/"]);
      }
      this.todo = todo;
      this.title = todo.title;
      this.content = todo.content;
    });
  }

  editTodo({ value, valid }: NgForm) {
    if (valid) {
      this.todoService.updateTodo(this.todo._id, value).subscribe(
        ({ todo }: any) => {
          this.todoService.todos.pipe(take(1)).subscribe(todos => {
            this.todoService.todos.next(
              todos.map(t => {
                if (t._id === todo._id) {
                  return todo;
                }
                return t;
              })
            );
            this.router.navigate(["/"]);
          });
        },
        err => {
          this.router.navigate(["/"]);
        }
      );
    }
  }
}
