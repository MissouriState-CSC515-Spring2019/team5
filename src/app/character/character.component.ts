import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';
import { FormGroup} from '@angular/forms';
import { Character } from './character';
import { DClass } from './class';
import { Race } from './race';
import { IResults } from '../IResults';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['../app.component.css','./character.component.css']
})
export class CharacterComponent implements OnInit {

  public characterForm: FormGroup;
  public characterModel = new Character(null, null);
  public allClasses: IResults;
  public allRaces: IResults;
  public classes = Array<DClass>();
  public races = Array<Race>();
  public oneClass;
  public oneRace;
  public characterInfo = {class: new DClass(0,"",0, [], [], [], []),
                          race: new Race(0, "", 0, [], "", "", "", "", [], [], "", [], [])};

  constructor(private dndService: DndService) { }

  ngOnInit() {
      this.dndService.getClasses().subscribe(data => {
        this.allClasses = data;
        for(let i = 1; i <= this.allClasses.count; i++) {
          this.dndService.getClass(i).subscribe(classData => {
            this.oneClass = classData;
            this.classes.push(this.oneClass);
          });
        }
      });

    this.dndService.getRaces()
      .subscribe(data => {
        this.allRaces = data;
        for(let i = 1; i <= this.allRaces.count; i++) {
          this.dndService.getRace(i).subscribe(raceData => {
            this.oneRace = raceData;
            this.races.push(this.oneRace);
          });
        }
      });
  }

  onSubmit() {
    if (this.characterModel.class != null && this.characterModel.race != null) {
      //Get class and race data
      for(let i = 0; i < this.classes.length; i++) {
        if(this.classes[i].name == this.characterModel.class) {
          this.characterInfo.class = this.classes[i];
        }
      }
      for(let i = 0; i < this.races.length; i++) {
        if(this.races[i].name == this.characterModel.race) {
          this.characterInfo.race = this.races[i];
        }
      }
    }
  }

}
