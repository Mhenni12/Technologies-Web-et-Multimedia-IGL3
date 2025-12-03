import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sccore',
  imports: [],
  templateUrl: './sccore.html',
  styleUrl: './sccore.css',
})
export class Sccore {
  @Input() score: number = 0;
  @Input() correct: number = 0;
  @Input() wrong: number = 0;
}
