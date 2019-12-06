import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms'
import { SpeciesModule } from './species/species.module';
import { CareersModule } from './careers/careers.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SpeciesModule,
    CareersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
