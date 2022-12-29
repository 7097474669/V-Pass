import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DistributorProfileComponent } from './distributor-profile/distributor-profile.component';
import { DistributorsRoutingModule } from './distributors-routing.module';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {

  constructor(private route:Router,
    private dailogBox:MatDialog) { }

  ngOnInit(): void {
  }

  profile()
  {

  }
  SignIn(){console.log("signinpage")}
  SignUP()
  {
    this.dailogBox.open(DistributorProfileComponent,
      {
        width:"60%",
        height:"85%",
        panelClass: 'my-dialog',
      }
      );
     // this.route.navigate(['Distributors/profile']);
  }
}
