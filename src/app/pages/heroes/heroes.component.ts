import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroList = this.hservice.getAll();

  constructor(
    private hservice: HeroService
  ) { }

  ngOnInit(): void {
  }

}
