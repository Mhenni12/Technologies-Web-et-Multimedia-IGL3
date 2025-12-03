import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [CommonModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  @Input() nomProduit: string = 'Produit Par Défaut';
  @Output() ajouterAuPanier = new EventEmitter<string>();
  enStock: boolean = true;
  prix: number = 250;
  toggleStock(): void {
    this.enStock = !this.enStock;
  }
  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
  }
}
