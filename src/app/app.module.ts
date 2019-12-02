import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms'
import { SpeciesModule } from './species/species.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CareersComponent } from './careers/careers.component';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    CareersComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SpeciesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
