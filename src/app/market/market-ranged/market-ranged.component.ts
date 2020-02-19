import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UnitService } from '../../unit.service';
import { MarketService } from '../market.service';

import { WeaponModel } from '../../object-types/weapon';

@Component({
  selector: 'app-market-ranged',
  templateUrl: './market-ranged.component.html',
  styleUrls: ['./market-ranged.component.css']
})
export class MarketRangedComponent implements OnInit {
    private weapons$: Observable<WeaponModel[]>;
    private light: WeaponModel[];
    private heavy: WeaponModel[];
    private gunn: WeaponModel[];
    private mach: WeaponModel[];
    private curRange: WeaponModel;

    constructor(
        private unit: UnitService,
        private marketServ: MarketService
    ) { }

    ngOnInit() {
        this.unit.log("Market-Ranged Comp :: Init");
        this.weapons$ = this.marketServ.getRangedMarket();
        this.weapons$.subscribe(weaps => {
            let lig: WeaponModel[] = [];
            let hea: WeaponModel[] = [];
            let gun: WeaponModel[] = [];
            let mac: WeaponModel[] = [];
            for (let i: number = 0; i < weaps.length; i++){
                if (weaps[i].weapon.skill.name == "Ranged (Light)") {
                    lig.push(weaps[i]);
                } else if (weaps[i].weapon.skill.name == "Ranged (Heavy)"){
                    hea.push(weaps[i]);
                } else if (weaps[i].weapon.skill.name == "Gunnery"){
                    gun.push(weaps[i]);
                } else {
                    mac.push(weaps[i]);
                }
            }
            this.light = lig;
            this.heavy = hea;
            this.gunn = gun;
            this.mach = mac;
        });
        this.marketServ.rangedBroadcast();
        this.curRange = null;
    }

    public setCurRange(weap: WeaponModel): void {
        this.curRange = weap;
    }

    public clearCurRange(): void {
        this.curRange = null;
    }
}
