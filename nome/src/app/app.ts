import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Metodo per restituire il nome 
  public showName() {
    return 'john';
  }

  // Metodo per restituire il cognome 
  public showSurn() {
    return 'smit';
  }
}