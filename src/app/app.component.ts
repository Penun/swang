import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger
} from '@angular/animations';

import { UnitService } from './unit.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('openClose', [
            state('true', style({ width: '50vw' })),
            state('false', style({ width: '0vw' })),
            transition('false => true', animate(500)),
            transition('true => false', animate(250))
        ]),
        trigger('rotateLeft', [
            state('vertical', style({transform: 'rotateZ(-17.1deg)'})),
            state('left', style({transform: 'rotateZ(-90deg)'})),
            transition('vertical => left', animate(500)),
            transition('left => vertical', animate(250))
        ])
    ],
})
export class AppComponent {
    menuStatus: boolean;
    menuArrow: string;

    constructor(
        private unit: UnitService
    ) {
        this.menuStatus = false;
        this.lightArrow();
    }

    toggleMenu(): void {
        if (this.menuStatus){
            this.menuStatus = false;
        } else {
            this.menuStatus = true;
        }
        this.unit.log("Menu Status :: "+this.menuStatus);
    }

    lightArrow(): void {
        this.menuArrow = "menu_arrow.png";
    }

    darkArrow(): void {
        this.menuArrow = "menu_arrow_inv.png";
    }
}
