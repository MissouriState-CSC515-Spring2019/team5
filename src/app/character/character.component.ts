import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Character } from './character';

interface IClasses {
  count: number,
  results: Array<DnDClass>
}

interface DnDClass {
  name: string,
  url: string
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public characterForm: FormGroup;
  public characterModel = new Character(null, null);
  public classes: IClasses;
  public races: IClasses;
  public classNames = [];
  public raceNames = [];
  public oneClass;
  public oneRace;

  constructor(private dndService: DndService) { }

  ngOnInit() {
      this.dndService.getClasses().subscribe(data => {
        this.classes = data;
        for(let i = 1; i <= this.classes.count; i++) {
          this.dndService.getClass(i).subscribe(classData => {
            this.oneClass = classData;
            this.classNames.push(this.oneClass);
          });
        }
      });

    this.dndService.getRaces()
      .subscribe(data => {
        this.races = data;
        for(let i = 1; i <= this.races.count; i++) {
          this.dndService.getRace(i).subscribe(raceData => {
            this.oneRace = raceData;
            this.raceNames.push(this.oneRace);
          });
        }
      });
  }

  onSubmit() {
    if (this.characterModel.class != null && this.characterModel.race != null) {
      console.log(this.characterModel);
    }
  }

}
