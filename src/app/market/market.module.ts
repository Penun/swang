import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';

import { MarketComponent } from './market/market.component';
import { MarketMeleeComponent } from './market-melee/market-melee.component';
import { MarketRangedComponent } from './market-ranged/market-ranged.component';
import { MarketArmorComponent } from './market-armor/market-armor.component';
import { MarketGearComponent } from './market-gear/market-gear.component';
import { MarketAttachmentComponent } from './market-attachment/market-attachment.component';


@NgModule({
    declarations: [
        MarketComponent,
        MarketMeleeComponent,
        MarketRangedComponent,
        MarketArmorComponent,
        MarketGearComponent,
        MarketAttachmentComponent
    ],
    imports: [
        CommonModule,
        MarketRoutingModule
    ]
})
export class MarketModule { }
