import { Injectable, Input } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  @Input() heroes: Hero[] = [
    {
      id: '1',
      name: 'Faember',
      superPower: 'Fakezű',
      address: 'Erdő',
    },
    {
      id: '2',
      name: 'Nyuszika',
      superPower: 'Ugri-bugri',
      address: 'Üreg',
    },
    {
      id: '3',
      name: 'Mocsáriszap',
      superPower: 'Ragadós',
      address: 'Láp',
    },
    {
      id: '4',
      name: 'Sziklafal',
      superPower: 'Kemény',
      address: 'Hegy',
    },
    {
      id: '5',
      name: 'Lebegő levegő',
      superPower: 'Láthatlan',
      address: 'Fönn',
    },
  ]

  constructor() { }

  getAll(): Hero[] {
    return this.heroes;
  }
}
