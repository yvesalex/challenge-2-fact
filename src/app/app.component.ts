import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Fact } from './models/fact';
import { CatsService } from './services/cats.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fact';
  public cat$: Observable<Fact> = new Observable();

  constructor(private catsService: CatsService){}

  ngOnInit() {
    this.cat$ = this.catsService.getRandomCat();
  }
}
