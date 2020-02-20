import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeciesComponent } from './species/species.component'
import { SpeciesListComponent } from './species_list/species_list.component'
import { SpeciesDetailComponent } from './species_detail/species_detail.component'


const routes: Routes = [
    {
        path: 'index.php/species',
        component: SpeciesComponent,
        children: [
            { path: '', component: SpeciesListComponent },
            { path: ':id', component: SpeciesDetailComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
