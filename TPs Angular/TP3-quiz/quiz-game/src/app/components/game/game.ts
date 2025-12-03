import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sccore } from '../sccore/sccore';

interface Question {
  question: string;
  options: string[];
  reponse: string;
  userAnswer?: string;
}

@Component({
  selector: 'app-game',
  imports: [CommonModule, FormsModule, Sccore],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  questions: Question[] = [
    { question: 'Quel est le plus grand océan du monde ?', options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'], reponse: 'Pacifique' },
    { question: 'Quelle est la capitale de l\'Algérie ?', options: ['Alger', 'Tunis', 'Tanja'], reponse: 'Alger' },
    { question: 'Quelle est la couleur du ciel ?', options: ['Bleu', 'Vert', 'Rouge'], reponse: 'Bleu' }
  ];

  score: number = 0;
  correctCount: number = 0;
  wrongCount: number = 0;

  onSelectOption(option: string, q: Question) {
    if (q.userAnswer) return;

    q.userAnswer = option;
    if (option === q.reponse) {
      this.score += 10;
      this.correctCount++;
    } else {
      this.score -= 5;
      this.wrongCount++;
    }
  }

}
