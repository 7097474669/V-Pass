import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ 
  path: 'Distributors', loadChildren: () => import('./distributors/distributors.module').then(m => m.DistributorsModule) 
},
 { 
  path: 'Authorizer', loadChildren: () => import('./authorizer/authorizer.module').then(m => m.AuthorizerModule)
 },
  { 
  path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
},
 { 
  path: 'wareHouse', loadChildren: () => import('./ware-house/ware-house.module').then(m => m.WareHouseModule) 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
