import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WareHouseComponent } from './ware-house.component';

const routes: Routes = [{ path: '', component: WareHouseComponent },
{path:'warehousestock', component:WareHouseComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WareHouseRoutingModule { }
