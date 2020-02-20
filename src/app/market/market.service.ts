import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { UnitService } from '../unit.service';

import { WeaponModel } from '../object-types/weapon';
import { ArmorModel } from '../object-types/armor';
import { GearModel } from '../object-types/gear';
import { AttachmentModel } from '../object-types/attachment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class MarketService {
    private meleeUrl: string;
    private randedUrl: string;
    private armorUrl: string;
    private gearUrl: string;
    private attachmentUrl: string;
    private planetMod: number;
    private restricted: boolean;
    private isReady: boolean;

    private meleeSource: Subject<WeaponModel[]>;
    private meleeMarket$: Observable<WeaponModel[]>;
    private meleeFetched: WeaponModel[];
    private rangedSource: Subject<WeaponModel[]>;
    private rangedMarket$: Observable<WeaponModel[]>;
    private rangedFetched: WeaponModel[];
    private armorSource: Subject<ArmorModel[]>;
    private armorMarket$: Observable<ArmorModel[]>;
    private armorFetched: ArmorModel[];
    private gearSource: Subject<GearModel[]>;
    private gearMarket$: Observable<GearModel[]>;
    private gearFetched: GearModel[];
    private attachSource: Subject<AttachmentModel[]>;
    private attachMarket$: Observable<AttachmentModel[]>;
    private attachFetched: AttachmentModel[];

    public getPlanetMod(): number { return this.planetMod; }
    public setPlanetMod(val: number): void { this.planetMod = val; }
    public getRestricted(): boolean { return this.restricted; }
    public setRestricted(val: boolean): void { this.restricted = val; }
    public getIsReady(): Observable<boolean> { return of(this.isReady); }
    public getMeleeMarket(): Observable<WeaponModel[]> { return this.meleeMarket$; }
    public getRangedMarket(): Observable<WeaponModel[]> { return this.rangedMarket$; }
    public getArmorMarket(): Observable<ArmorModel[]> { return this.armorMarket$; }
    public getGearMarket(): Observable<GearModel[]> { return this.gearMarket$; }
    public getAttachMarket(): Observable<AttachmentModel[]> { return this.attachMarket$; }

    constructor(
        private unit: UnitService,
        private http: HttpClient
    ) {
        this.meleeUrl = '/market/melee';
        this.randedUrl = '/market/ranged';
        this.armorUrl = '/market/armor';
        this.gearUrl = '/market/gear';
        this.attachmentUrl = '/market/attachment';
        this.planetMod = null;
        this.restricted = null;
        this.isReady = false;

        this.meleeSource = new Subject<WeaponModel[]>();
        this.meleeMarket$ = this.meleeSource.asObservable();
        this.meleeFetched = [];
        this.rangedSource = new Subject<WeaponModel[]>();
        this.rangedMarket$ = this.rangedSource.asObservable();
        this.rangedFetched = [];
        this.armorSource = new Subject<ArmorModel[]>();
        this.armorMarket$ = this.armorSource.asObservable();
        this.armorFetched = [];
        this.gearSource = new Subject<GearModel[]>();
        this.gearMarket$ = this.gearSource.asObservable();
        this.gearFetched = [];
        this.attachSource = new Subject<AttachmentModel[]>();
        this.attachMarket$ = this.attachSource.asObservable();
        this.attachFetched = [];
    }

    public ready(): void {
        this.unit.log("Market Serv :: Ready");
        this.fetchMelee();
        this.fetchRanged();
        this.fetchArmor();
        this.fetchGear();
        this.fetchAttachment();
        if (!this.isReady){
            this.isReady = true;
        }
    }

    private fetchMelee(): void {
        this.http.post<WeaponModel[]>(this.meleeUrl, {planet_mod: Number(this.planetMod), restricted: this.restricted}, httpOptions).pipe(
            tap(_ => this.unit.log("Market Serv :: Melee Gotten")),
            catchError(this.handleError<WeaponModel[]>('fetchMelee')))
            .subscribe(weaps => {
                for (let i: number = 0; i < weaps.length; i++){
                    let minInd: number = i;
                    for (let j: number = i; j < weaps.length; ++j){
                        if (weaps[j].model < weaps[minInd].model){
                            minInd = j;
                        }
                    }
                    [weaps[i], weaps[minInd]] = [weaps[minInd], weaps[i]];
                }
                this.meleeFetched = weaps;
                this.meleeSource.next(weaps);
            }
        );
    }

    public meleeBroadcast(): void {
        this.meleeSource.next(this.meleeFetched);
    }

    private fetchRanged(): void {
        this.http.post<WeaponModel[]>(this.randedUrl, {planet_mod: Number(this.planetMod), restricted: this.restricted}, httpOptions).pipe(
            tap(_ => this.unit.log("Market Serv :: Ranged Gotten")),
            catchError(this.handleError<WeaponModel[]>('fetchRanged')))
            .subscribe(weaps => {
                for (let i: number = 0; i < weaps.length; i++){
                    let minInd: number = i;
                    for (let j: number = i; j < weaps.length; ++j){
                        if (weaps[j].model < weaps[minInd].model){
                            minInd = j;
                        }
                    }
                    [weaps[i], weaps[minInd]] = [weaps[minInd], weaps[i]];
                }
                this.rangedFetched = weaps;
                this.rangedSource.next(weaps);
            }
        );
    }

    public rangedBroadcast(): void {
        this.rangedSource.next(this.rangedFetched);
    }

    private fetchArmor(): void {
        this.http.post<ArmorModel[]>(this.armorUrl, {planet_mod: Number(this.planetMod), restricted: this.restricted}, httpOptions).pipe(
            tap(_ => this.unit.log("Market Serv :: Armor Gotten")),
            catchError(this.handleError<ArmorModel[]>('fetchArmor')))
            .subscribe(arms => {
                for (let i: number = 0; i < arms.length; i++){
                    let minInd: number = i;
                    for (let j: number = i; j < arms.length; ++j){
                        if (arms[j].model < arms[minInd].model){
                            minInd = j;
                        }
                    }
                    [arms[i], arms[minInd]] = [arms[minInd], arms[i]];
                }
                this.armorFetched = arms;
                this.armorSource.next(arms);
            }
        );
    }

    public armorBroadcast(): void {
        this.armorSource.next(this.armorFetched);
    }

    private fetchGear(): void {
        this.http.post<GearModel[]>(this.gearUrl, {planet_mod: Number(this.planetMod), restricted: this.restricted}, httpOptions).pipe(
            tap(_ => this.unit.log("Market Serv :: Gear Gotten")),
            catchError(this.handleError<GearModel[]>('fetchGear')))
            .subscribe(gear => {
                for (let i: number = 0; i < gear.length; i++){
                    let minInd: number = i;
                    for (let j: number = i; j < gear.length; ++j){
                        if (gear[j].model < gear[minInd].model){
                            minInd = j;
                        }
                    }
                    [gear[i], gear[minInd]] = [gear[minInd], gear[i]];
                }
                this.gearFetched = gear;
                this.gearSource.next(gear);
            }
        );
    }

    public gearBroadcast(): void {
        this.gearSource.next(this.gearFetched);
    }

    private fetchAttachment(): void {
        this.http.post<AttachmentModel[]>(this.attachmentUrl, {planet_mod: Number(this.planetMod), restricted: this.restricted}, httpOptions).pipe(
            tap(_ => this.unit.log("Market Serv :: Attach Gotten")),
            catchError(this.handleError<AttachmentModel[]>('fetchAttachment')))
            .subscribe(att => {
                for (let i: number = 0; i < att.length; i++){
                    let minInd: number = i;
                    for (let j: number = i; j < att.length; ++j){
                        if (att[j].model < att[minInd].model){
                            minInd = j;
                        }
                    }
                    [att[i], att[minInd]] = [att[minInd], att[i]];
                }
                this.attachFetched = att;
                this.attachSource.next(att);
            }
        );
    }

    public attachBroadcast(): void {
        this.attachSource.next(this.attachFetched);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.unit.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
