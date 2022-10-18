import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-basics-demo';
  width:number = 100

  users = [
    username: "john123",
    age: 20
  ]
  onToggleButton(){
    this.title = "change Title"
  }
}


