import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

constructor() { }

public characters: Character[] = [{
  id: uuid(),
  name: 'Goku',
  power: 15000
}, {
  id: uuid(),
  name: 'Vegeta',
  power: 7500
}, {
  id: uuid(),
  name: 'Krillin',
  power: 1000
}
];

onAddCharacter(character: Character): void {
const newCharacter: Character = { id: uuid(), ...character };
this.characters.push(newCharacter);
}

// onDeleteCharacter(index: number): void {
// this.characters.splice(index, 1); }

  deleteCharacterById( id:string){
    this.characters = this.characters.filter( character => character.id !== id)
  }

}
