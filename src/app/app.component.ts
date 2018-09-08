import { Component } from '@angular/core';
import { environment } from '../environments/environment';

//https://stackoverflow.com/questions/39581704/using-parse-as-a-module-in-angular2
import * as Parse from 'parse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parse-Server LiveQuery Angular6';

  subscription = null;

  todos;
  Todo;

  constructor() {
    Parse.initialize(environment.PARSE_APP_ID);
    (Parse as any).serverURL = environment.serverURL;

    this.Todo = Parse.Object.extend('Todo');
    const query = new Parse.Query(this.Todo);
    query.ascending('createdAt').limit(100).find().then((todos) => {
      this.todos = new Set(todos);
    }).catch((error:any) => {
      this.handleParseError(error);
    });

    this.subscription = query.subscribe();
    this.subscription.on('create', todo => {
      this.todos.add(todo);
      console.log('On create event');
    });
    this.subscription.on('delete', todo => {
      this.todos.forEach(t => {
        if (t.id === todo.id) {
          console.log('On delete event');
          this.todos.delete(t);
        }
      });
    });
  }

  toggleCompleted = todo => {
    todo.set('completed', !todo.get('completed'));
    todo.save();
  }

  saveTodo = () => {
    if (this.title) {
      const todo = new this.Todo();
      todo.set('title', this.title);
      todo.save();
    }
    this.title = null;
  }

  clearCompleted = () => {
    this.todos.forEach(t => {
      if (t.get('completed')) {
        t.destroy();
      }
    });
  }

  clearAll = () => {
    this.todos.forEach(t => t.destroy());
  }

  handleParseError(error) {
    switch (error.code) {
      case 209: //INVALID_SESSION_TOKEN
        Parse.User.logOut();
        //... // If web browser, render a log in screen
        //... // If Express.js, redirect the user to the log in route
        break;

      //... // Other Parse API errors that you want to explicitly handle
    }
    alert("Error " + error.code + ": " + error.message);
  }

}
