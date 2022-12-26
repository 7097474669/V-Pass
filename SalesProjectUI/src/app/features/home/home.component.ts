import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Date1: Date = new Date();

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onClick(){
  this.route.navigate(['login'])
  }

}
