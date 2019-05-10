import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpellsComponent } from './spells/spells.component';
import { CharacterComponent } from './character/character.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { DndService } from './dnd.service';

@NgModule({
  declarations: [
    AppComponent,
    SpellsComponent,
    CharacterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
