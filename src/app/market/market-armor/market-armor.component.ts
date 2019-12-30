import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UnitService } from '../../unit.service';
import { MarketService } from '../market.service';

import { ArmorModel } from '../../object-types/armor';

@Component({
  selector: 'app-market-armor',
  templateUrl: './market-armor.component.html',
  styleUrls: ['./market-armor.component.css']
})
export class MarketArmorComponent implements OnInit {
    private armor: ArmorModel[];

    constructor(
        private unit: UnitService,
        private marketServ: MarketService
    ) { }

    ngOnInit() {
        this.unit.log("Market-Melee Comp :: Init");
        this.marketServ.getArmorMarket()
            .subscribe(arms => this.armor = arms);
        this.marketServ.armorBroadcast();
    }
}
