import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeciesComponent } from './species/species.component';
import { CareersComponent } from './careers/careers.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
    { path: '', component: SpeciesComponent },
    { path: 'species', redirectTo: '', pathMatch: "full" },
    { path: 'careers', component: CareersComponent },
    { path: 'characters', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
