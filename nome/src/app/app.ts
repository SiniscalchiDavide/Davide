import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nome');
  

  public showName() {
    return 'john';
  }
  
  public showSurn() {
    return 'smit';
  }
  public saluta(): void {
    alert('Ciao utente!');
  }

  public arrivederci(): void {
    alert('Arrivederci!');

    }
}

