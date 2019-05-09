import { Component, OnInit } from '@angular/core';
import { DndService } from '../dnd.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public classes;
  public races = [];
  public classNames = [];

  constructor(private dndService: DndService) { }

  ngOnInit() {
    /*this.dndService.getClasses()
      .subscribe(data => this.classes = data);
      for(let aClass in this.classes) {
        this.classNames.push(aClass);
      }*/
      this.classes = this.dndService.getClassesFetch();
      console.log(this.classes);
      console.log(this.classNames);

    this.dndService.getRaces()
      .subscribe(data => this.races = data);
  }

}
