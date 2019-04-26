import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellsComponent }      from './spells/spells.component';
import { CharacterComponent }   from './character/character.component';
import { LandingComponent }     from './landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'spells', component: SpellsComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'landing', component: LandingComponent },
];

@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}