import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributorProfileComponent } from './distributor-profile/distributor-profile.component';
import { DistributorsComponent } from './distributors.component';

const routes: Routes = [
{ 
    path: '', component: DistributorsComponent 
},
{
  path:'profile',component:DistributorProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorsRoutingModule { }
