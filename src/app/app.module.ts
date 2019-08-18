import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SpeciesComponent } from './species/species.component';
import { CareersComponent } from './careers/careers.component';

import { SafeHtmlPipe } from './species/species.attribute.image.safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SpeciesComponent,
    SafeHtmlPipe,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
