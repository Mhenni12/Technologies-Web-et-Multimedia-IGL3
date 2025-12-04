import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantForm } from './etudiant-form/etudiant-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EtudiantForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP5-forms');
}
