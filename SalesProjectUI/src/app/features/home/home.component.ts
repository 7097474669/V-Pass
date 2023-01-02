import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {}

  Date1: Date = new Date();

  SignIn()
  {
    this.route.navigate(['login'])
  }

  HomeBtn()
  {
    this.route.navigate(['/']);
  }

}
