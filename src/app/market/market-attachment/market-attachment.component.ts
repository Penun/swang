import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UnitService } from '../../unit.service';
import { MarketService } from '../market.service';

import { AttachmentModel } from '../../object-types/attachment';

@Component({
  selector: 'app-market-attachment',
  templateUrl: './market-attachment.component.html',
  styleUrls: ['./market-attachment.component.css']
})
export class MarketAttachmentComponent implements OnInit {
    private weapons: AttachmentModel[];
    private armor: AttachmentModel[];
    private lightsabers: AttachmentModel[];
    private curAtt: AttachmentModel;

    constructor(
        private unit: UnitService,
        private marketServ: MarketService
    ) { }

    ngOnInit() {
        this.unit.log("Market-Attach Comp :: Init");
        this.marketServ.getAttachMarket()
            .subscribe(atts => {
                let weaps: AttachmentModel[] = [];
                let arms: AttachmentModel[] = [];
                let lights: AttachmentModel[] = [];
                for (let i: number = 0; i < atts.length; i++){
                    switch (atts[i].attachment.type) {
                        case "Weapon":
                            weaps.push(atts[i]);
                            break;
                        case "Armor":
                            arms.push(atts[i]);
                            break;
                        case "Lightsaber":
                            lights.push(atts[i]);
                            break;
                    }
                }
                this.weapons = weaps;
                this.armor = arms;
                this.lightsabers = lights;
            }
        );
        this.marketServ.attachBroadcast();
        this.curAtt = null;
    }

    public setCurAtt(att: AttachmentModel): void {
        this.curAtt = att;
    }

    public clearCurAtt(): void {
        this.curAtt = null;
    }
}
