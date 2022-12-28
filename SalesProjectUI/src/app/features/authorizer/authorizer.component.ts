import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizerService } from '../services/authorizer.service';
import{FormGroup ,FormBuilder} from '@angular/forms'
import{FormControl} from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
@Component({
  selector: 'app-authorizer',
  templateUrl: './authorizer.component.html',
  styleUrls: ['./authorizer.component.css']
})
export class AuthorizerComponent implements OnInit {
  details:any

  constructor( private route:Router,private Auth:AuthorizerService, private fd :FormBuilder, private dia:MatDialog) { }

  ngOnInit(): void {
    this.Auth.getdetail().subscribe((a:any)=>{console.log(a); this.details=a})

  this.newTaskForm.patchValue({
    ID:this.details.ID,
    MemberId:this.details.MemberId,
    FirstName:this.details.FirstName,
    LastName:this.details.LastName,
    ConactNumber:this.details.ConactNumber,
    Address:this.details.Address
  })
  
}
 newTaskForm = new FormGroup({
  ID : new FormControl('this.a.ID'),
  MemberId: new FormControl(''),
  FirstName: new FormControl(''),
  LastName: new FormControl(''),
  ConactNumber: new FormControl(''),
  Address: new FormControl(''),
})

logout(){
  this.route.navigate(['']);
}
  

  

 
}
