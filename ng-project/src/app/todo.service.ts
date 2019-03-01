import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
const url = "http://localhost:8080/todo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todos: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}

  getTodos() {
    this.http.get<any>(url).subscribe(({ todos }) => {
      this.todos.next(todos);
    }, console.log);
  }

  addTodo(todo) {
    return this.http.post(url + "/add", todo);
  }

  updateTodo(id, newTodo) {
    return this.http.put(url + "/" + id, newTodo);
  }

  removeTodo(id) {
    return this.http.delete(url + "/" + id);
  }
}
