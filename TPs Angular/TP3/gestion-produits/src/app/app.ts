import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produit } from './components/produit/produit';
import { Panier } from './components/panier/panier';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Produit, Panier],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  panierItems: string[] = [];

  gererAjoutAuPanier(nomProduit: string): void {
    this.panierItems.push(nomProduit);
  }
}
