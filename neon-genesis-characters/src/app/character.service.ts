import { Injectable } from '@angular/core';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  protected characters:Character[] = [
    
    {
      id:1,
      name: "Akagi Ritsuko",
      photo:'/assets/_Evangelion/Akagi_Ritsuko.jpg',
      description:'Description 1'
    },
    {
      id:2,
      name: "Asukka",
      photo:'/assets/_Evangelion/Asukka13.jpg',
      description:"Description 2"
    },

    {
      id:3,
      name: "Gendo Ikari",
      photo:'/assets/_Evangelion/Gendo_Ikari.jpg',
      description:'Description 3'
    },
    {
      id:4,
      name: "Kaworu",
      photo:'/assets/_Evangelion/Kaworu.jpg',
      description:"Description 4"
    }
    ,    

    {
      id:6,
      name: "Rei Ayanami",
      photo:'/assets/_Evangelion/Rei_Ayanami.jpg',
      description:"Description 6"
    },
    {
      id:7,
      name: "Shinji Ikari",
      photo:'/assets/_Evangelion/Shinji_Ikari.jpg',
      description:"Description 7"    
    }
  ];

  getAllCharacters() : Character[]{
    return this.characters;
  }
  getCharacter(id: number) : Character | undefined
  {
    return this.characters.find(character => character.id === id);
  }
  constructor() { }
}
