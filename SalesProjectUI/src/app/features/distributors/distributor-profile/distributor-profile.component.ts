import { group } from '@angular/animations';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-distributor-profile',
  templateUrl: './distributor-profile.component.html',
  styleUrls: ['./distributor-profile.component.css'],
  providers:[
{
  provide:STEPPER_GLOBAL_OPTIONS,
  useValue:{showError:true}

}
]
})
export class DistributorProfileComponent implements OnInit {

  // firstFormGroup = this.formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  
  // SecondFormGroup = this.formBuilder.group({
  //   SecondCtrl: ['', Validators.required],
  // });
//  constructor(private formBuilder:FormBuilder) { }

Form1=new FormGroup({
  FirstName:new FormControl(''),
  MiddleName:new FormControl(''),
  LastName:new FormControl(''),
  Email:new FormControl(''),
  PhoneNo:new FormControl(''),
  FirmName:new FormControl(''),
  Address:new FormControl(''),
  
});
Form2=new FormGroup({
  TINNo:new FormControl(''),
  PANNo:new FormControl(''),
  IFSC:new FormControl(''),
  BankAcNo:new FormControl(''),
});
Form3=new FormGroup({
  UserName:new FormControl(),
  Password:new FormControl(),
  SecurityAns:new FormControl(),
  SecurityQuestion:new FormControl(),
}); 
isLinear = false;

constructor(){}
  ngOnInit(): void {
  }
  Registration()
  {
    console.log(this.Form1.value);
    console.log(this.Form2.value);
    console.log(this.Form3.value);
  }
}
