import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authorizer',
  templateUrl: './authorizer.component.html',
  styleUrls: ['./authorizer.component.css']
})
export class AuthorizerComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit(): void {
  }
  update(){
    this.route.navigate(['update'])
  }
}
