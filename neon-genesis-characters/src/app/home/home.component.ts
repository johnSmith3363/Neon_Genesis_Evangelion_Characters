import { Component, inject } from '@angular/core';
import { Character } from '../character';
import { CharacterBoxComponent } from '../character-box/character-box.component';
import { CharacterService } from '../character.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharacterBoxComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  characterList:Character[] = [];
  characterService:CharacterService = inject(CharacterService);

  constructor()
  {
    this.characterList = this.characterService.getAllCharacters();
  }

}
