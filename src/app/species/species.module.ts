import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';

import { SpeciesComponent } from './species/species.component'
import { SpeciesListComponent } from './species_list/species_list.component'
import { SpeciesDetailComponent } from './species_detail/species_detail.component'

import { SafeHtmlPipe } from './species_detail/image.safe.pipe';


@NgModule({
    declarations: [
        SpeciesComponent,
        SpeciesListComponent,
        SpeciesDetailComponent,
        SafeHtmlPipe
    ],
    imports: [
        CommonModule,
        SpeciesRoutingModule
    ],
    exports: [
        SpeciesDetailComponent
    ]
})
export class SpeciesModule { }
