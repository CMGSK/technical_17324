import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { InfoanimeComponent } from './infoanime/infoanime.component';

const routes: Routes = [
  {path: "", component: HelloworldComponent},
  {path: "home", component: HelloworldComponent},
  {path: "informe", component: InfoanimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
