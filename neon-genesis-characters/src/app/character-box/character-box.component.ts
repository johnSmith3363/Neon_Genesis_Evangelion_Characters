import { Component, Input } from '@angular/core';
import { Character } from '../character';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-box',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-box.component.html',
  styleUrl: './character-box.component.css'
})
export class CharacterBoxComponent {

  @Input() character!:Character;

}
