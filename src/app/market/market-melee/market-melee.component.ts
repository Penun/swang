import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UnitService } from '../../unit.service';
import { MarketService } from '../market.service';

import { WeaponModel } from '../../object-types/weapon';

@Component({
  selector: 'app-market-melee',
  templateUrl: './market-melee.component.html',
  styleUrls: ['./market-melee.component.css']
})
export class MarketMeleeComponent implements OnInit {
    private melee: WeaponModel[];
    private brawl: WeaponModel[];

    constructor(
        private unit: UnitService,
        private marketServ: MarketService
    ) { }

    ngOnInit() {
        this.unit.log("Market-Melee Comp :: Init");
        this.marketServ.getMeleeMarket()
            .subscribe(weaps => {
                let mel: WeaponModel[] = [];
                let bra: WeaponModel[] = [];
                for (let i: number = 0; i < weaps.length; i++){
                    if (weaps[i].weapon.sub_type == "Melee Weapons") {
                        mel.push(weaps[i]);
                    } else {
                        bra.push(weaps[i]);
                    }
                }
                this.melee = mel;
                this.brawl = bra;
            }
        );
        this.marketServ.meleeBroadcast();
    }
}
