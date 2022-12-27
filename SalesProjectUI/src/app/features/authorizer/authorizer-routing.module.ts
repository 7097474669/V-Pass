import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizerComponent } from './authorizer.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

const routes: Routes = [{ path: '', component: AuthorizerComponent },
{
  path:'update', component:UpdateprofileComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizerRoutingModule { }
