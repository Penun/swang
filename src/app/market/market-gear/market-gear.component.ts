import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UnitService } from '../../unit.service';
import { MarketService } from '../market.service';

import { GearModel } from '../../object-types/gear';

@Component({
  selector: 'app-market-gear',
  templateUrl: './market-gear.component.html',
  styleUrls: ['./market-gear.component.css']
})
export class MarketGearComponent implements OnInit {
    private comms: GearModel[];
    private drugs: GearModel[];
    private scanners: GearModel[];
    private medical: GearModel[];
    private cybernetics: GearModel[];
    private recrereation: GearModel[];
    private security: GearModel[];
    private survival: GearModel[];
    private tools: GearModel[];
    private loadBearing: GearModel[];
    private slicing: GearModel[];
    private construction: GearModel[];
    private remotes: GearModel[];
    private itemless: boolean;

    constructor(
        private unit: UnitService,
        private marketServ: MarketService
    ) { }

    ngOnInit() {
        this.unit.log("Market-Gear Comp :: Init");
        this.marketServ.getGearMarket()
            .subscribe(ges => {
                this.itemless = false;
                let coms: GearModel[] = [];
                let drgs: GearModel[] = [];
                let scans: GearModel[] = [];
                let medic: GearModel[] = [];
                let cyb: GearModel[] = [];
                let recr: GearModel[] = [];
                let secur: GearModel[] = [];
                let surv: GearModel[] = [];
                let tls: GearModel[] = [];
                let load: GearModel[] = [];
                let slic: GearModel[] = [];
                let constr: GearModel[] = [];
                let remot: GearModel[] = [];
                if (ges.length == 0){
                    this.itemless = true;
                }
                for (let i: number = 0; i < ges.length; i++){
                    switch (ges[i].gear.type) {
                        case "Communications Equipment":
                            coms.push(ges[i]);
                            break;
                        case "Poisons and Drugs":
                            drgs.push(ges[i]);
                            break;
                        case "Scanning and Surveillance Equipment (Detection Devices)":
                            scans.push(ges[i]);
                            break;
                        case "Medical Equipment":
                            medic.push(ges[i]);
                            break;
                        case "Cybernetic Enhancements and Replacements":
                            cyb.push(ges[i]);
                            break;
                        case "Recreational Entertainment":
                            recr.push(ges[i]);
                            break;
                        case "Infiltration and Espionage Equipment (Security)":
                            secur.push(ges[i]);
                            break;
                        case "Survival Gear":
                            surv.push(ges[i]);
                            break;
                        case "Tools and Electronics":
                            tls.push(ges[i]);
                            break;
                        case "Load Bearing, Carrying, and Storage Equipment":
                            load.push(ges[i]);
                            break;
                        case "Slicing Tools":
                            slic.push(ges[i]);
                            break;
                        case "Construction and Salvage Tools":
                            constr.push(ges[i]);
                            break;
                        case "Remotes":
                            remot.push(ges[i]);
                            break;
                    }
                }
                this.comms = coms;
                this.drugs = drgs;
                this.scanners = scans;
                this.medical = medic;
                this.cybernetics = cyb;
                this.recrereation = recr;
                this.security = secur;
                this.survival = surv;
                this.tools = tls;
                this.loadBearing = load;
                this.slicing = slic;
                this.construction = constr;
                this.remotes = remot;
            }
        );
        this.marketServ.gearBroadcast();
    }
}
