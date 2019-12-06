import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
    { path: '', redirectTo: 'species', pathMatch: "full" },
    // { path: 'species', redirectTo: '', pathMatch: "full" },
    { path: 'characters', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
