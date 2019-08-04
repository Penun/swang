import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeciesComponent } from './species/species.component';

const routes: Routes = [
    { path: 'species', redirectTo: '', pathMatch: "full" },
    { path: '', component: SpeciesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
