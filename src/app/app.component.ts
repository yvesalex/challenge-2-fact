import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fact';
  public fact: any;

  private url = `https://catfact.ninja/fact`;
    
  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
    this.http.get(this.url).subscribe(
      (res) => this.fact = res
    );
  }
}
