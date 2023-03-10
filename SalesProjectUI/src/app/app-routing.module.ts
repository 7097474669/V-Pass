import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginpageComponent } from './features/loginpage/loginpage.component';
import { UpdateprofileComponent } from './features/authorizer/updateprofile/updateprofile.component';
const routes: Routes = [
  {
  path:'',component:HomeComponent
},{
  path:'update', component:UpdateprofileComponent
},
{
  path:'login',component:LoginpageComponent
},
{
  path: 'Distributors', loadChildren: () => import('./features/distributors/distributors.module').then(m => m.DistributorsModule)
},
 {
  path: 'Authorizer', loadChildren: () => import('./features/authorizer/authorizer.module').then(m => m.AuthorizerModule)
 },
  {
  path: 'Admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
},
 {
  path: 'wareHouse', loadChildren: () => import('./features/ware-house/ware-house.module').then(m => m.WareHouseModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
