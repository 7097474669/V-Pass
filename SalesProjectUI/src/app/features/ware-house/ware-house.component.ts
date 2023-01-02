import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ware-house',
  templateUrl: './ware-house.component.html',
  styleUrls: ['./ware-house.component.css']
}
)
export class WareHouseComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void { }

  SignIn()
  {
    this.route.navigate(['login'])
  }

  HomeBtn()
  {
    this.route.navigate(['/']);
  }


}
