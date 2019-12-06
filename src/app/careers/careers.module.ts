import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';

import { CareersComponent } from './careers/careers.component'
import { CareersListComponent } from './careers-list/careers-list.component'
import { CareersSpecsListComponent } from './careers-specs-list/careers-specs-list.component'
import { CareersDetailComponent } from './careers-detail/careers-detail.component'
import { CareersSpecDetailComponent } from './careers-spec-detail/careers-spec-detail.component'
import { CareersSpecTalentTreeComponent } from './careers-spec-talent-tree/careers-spec-talent-tree.component'
import { CareersSpecTalentComponent } from './careers-spec-talent/careers-spec-talent.component'


@NgModule({
    declarations: [
        CareersComponent,
        CareersListComponent,
        CareersSpecsListComponent,
        CareersDetailComponent,
        CareersSpecDetailComponent,
        CareersSpecTalentTreeComponent,
        CareersSpecTalentComponent
    ],
    imports: [
        CommonModule,
        CareersRoutingModule
    ],
    exports: [
        // SpeciesDetailComponent
    ]
})
export class CareersModule { }
