import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UnitService } from '../../unit.service';
import { MarketService } from '../market.service';

import { WeaponModel } from '../../object-types/weapon';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
    private planetMod: number;
    private restricted: boolean;
    private isReady: boolean;
    private curTab: string;

    constructor(
        private unit: UnitService,
        private marketServ: MarketService
    ) { }

    public ngOnInit() {
        this.unit.log("Market Comp :: Init");
        this.planetMod = 0;
        this.restricted = false;
        this.isReady = false;
        this.curTab = "melee";
    }

    public onSelect(planet_mod: number): void {
        this.unit.log("Market Comp :: Change Select");
        this.planetMod = planet_mod;
    }

    public onCheck(restrict: boolean): void {
        this.unit.log("Market Comp :: Change check");
        this.restricted = !this.restricted;
    }

    public updateSettings(): void {
        this.unit.log("Market Comp :: Update");
        this.marketServ.setPlanetMod(this.planetMod);
        this.marketServ.setRestricted(this.restricted);
        this.isReady = true;
        this.marketServ.ready();
    }

    public setCurTab(newTab: string): void {
        this.curTab = newTab;
    }
}
