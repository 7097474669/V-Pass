import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Date1: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  title = 'SalesProjectUI';
}
