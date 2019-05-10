import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';
import { IResults } from '../IResults';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  //public spellList = new Spells(null, null);
  public spellNames = [];
  public spells: IResults;
  public oneSpell;

  constructor(private dndService: DndService) { }

  ngOnInit() {
    this.dndService.getSpells().subscribe(data => {
      this.spells = data;
      console.log(this.spells);
      //put math.random function in here
      for(let i = 1; i <= 10; i++) {
        this.dndService.getSpell(Math.random() * (313 - 1) + 1).subscribe(spellData => {
          this.oneSpell = spellData;
          console.log(this.oneSpell);
          this.spellNames.push(this.oneSpell);
        });
      }
    });
  }

}
