import { Component } from '@angular/core';
import { Student } from './TypeStudent';
import { CurrencyPipe, DatePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  imports: [UpperCasePipe, CurrencyPipe, PercentPipe, DatePipe, FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  etudiant : Student={
    id:1,
    name:'Ali Ben Saleh'
  };
  lastName: string = 'Mhenni';
  average: number = 17;
  birthDate: Date = new Date(2003, 4, 15);
  tauxPresence: number = 0.92;
  argentDePoche: number = 30;
}
