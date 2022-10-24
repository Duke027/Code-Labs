import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dogs-app';

    width:number = 200;
    height:number = 200;

dogs:any = [
  {
    name: "matthew",
    age: 69
  },
  {
    name: "idk",
    age: 4
  },
  {
    name: "umm",
    age: 420
  }

]

  onResizeImage(event: any){
    // user input value
    console.log(event.srcElement.value);

    const userInput = event.srcElement.value;
    this.width = userInput;
    this.height = userInput;
  }
}
