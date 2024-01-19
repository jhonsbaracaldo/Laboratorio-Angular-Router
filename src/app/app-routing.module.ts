import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicViewComponent } from './dynamic-view/dynamic-view.component';


const routes: Routes = [{ path: 'view/:id', component: DynamicViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
