import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareersComponent } from './careers/careers.component';
import { CareersListComponent } from './careers-list/careers-list.component';
import { CareersSpecsListComponent } from './careers-specs-list/careers-specs-list.component';
import { CareersDetailComponent } from './careers-detail/careers-detail.component';
import { CareersSpecDetailComponent } from './careers-spec-detail/careers-spec-detail.component';
import { CareersSpecTalentTreeComponent } from './careers-spec-talent-tree/careers-spec-talent-tree.component';
import { CareersSpecTalentComponent } from './careers-spec-talent/careers-spec-talent.component';



const routes: Routes = [
    {
        path: 'index.php/careers',
        component: CareersComponent,
        children: [
            {
                path: '',
                component: CareersListComponent
            },
            {
                path: ':c_id',
                component: CareersSpecsListComponent
            },
            {
                path: ':c_id',
                component: CareersDetailComponent,
                outlet: 'c_det'
            }, {
                path: ':s_id',
                component: CareersSpecDetailComponent,
                outlet: 's_det',
                children: [
                    {
                        path: '',
                        component: CareersSpecTalentTreeComponent
                    }, {
                        path: ':t_id',
                        component: CareersSpecTalentComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
