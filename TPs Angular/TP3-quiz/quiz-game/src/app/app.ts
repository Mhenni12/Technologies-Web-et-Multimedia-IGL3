import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Game } from './components/game/game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Game],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('quiz-game');
}
