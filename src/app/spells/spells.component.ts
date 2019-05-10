import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Spells } from './spells';
import { DndService } from '../dnd.service';

interface SpellsA {
  count: number, 
  results: Array<SpellS>
}

interface SpellS {
  name: string,
  url: string
}

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  //public spellList = new Spells(null, null);
  public spellNames = [];
  public spells: SpellsA;
  public oneSpell;


  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.dndService.getSpells().subscribe(data => {
      //this.spells = data;
      //put math.random function in here
      for(let i = 1; i <= 10; i++) {
        this.dndService.getSpell(i).subscribe(spellData => {
          this.oneSpell = spellData;
          this.spellNames.push(this.oneSpell);
        });
      }
    });
  }

}
