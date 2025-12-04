import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book';
import { BookFormComponent } from '../book-form/book-form';
import { BookListComponent } from '../book-list/book-list';

@Component({
  selector: 'book-container',
  standalone: true,
  imports: [CommonModule, FormsModule, BookFormComponent, BookListComponent],
  templateUrl: './book-container.html',
  styleUrls: ['./book-container.css']
})
export class BookContainerComponent {
  // données initiales
  books: Book[] = [
    {
      id: 1,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      publisherEmail: 'editor1@example.com',
      publisherPhone: '12345678',
      releaseDate: '1943-04-06',
      category: 'Roman',
      isAvailable: true,
      stock: 5
    },
    {
      id: 2,
      title: 'Introduction à l\'Informatique',
      author: 'M. Ben',
      publisherEmail: 'info@example.com',
      publisherPhone: '98765432',
      releaseDate: '2010-09-15',
      category: 'Informatique',
      isAvailable: true,
      stock: 12
    },
    {
      id: 3,
      title: 'Histoire de Tunisie',
      author: 'A. Khedher',
      publisherEmail: 'hist@example.com',
      releaseDate: '2000-01-01',
      category: 'Histoire',
      isAvailable: false,
      stock: 0
    }
  ];

  categories = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  // pour create/update
  nextId = 4;
  editingBook: Book | null = null;

  // recherche + tri
  searchTerm = '';
  sortBy: 'none' | 'category' | 'availability' = 'none';
  sortCategory = ''; // si tri par catégorie, on peut définir

  // getters
  get totalBooks() {
    return this.books.length;
  }

  // calcul des livres filtrés / triés
  get filteredBooks(): Book[] {
    let list = this.books.filter(b =>
      b.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      b.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.sortBy === 'category' && this.sortCategory) {
      list = list.filter(b => b.category === this.sortCategory);
    } else if (this.sortBy === 'availability') {
      list = list.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    }
    return list;
  }

  // création
  addBook(book: Book) {
    const newBook: Book = { ...book, id: this.nextId++ };
    this.books.push(newBook);
    this.editingBook = null;
  }

  // suppression
  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
    if (this.editingBook && this.editingBook.id === id) {
      this.editingBook = null;
    }
  }

  // début update (pré-charge le formulaire)
  startEdit(book: Book) {
    // clone pour éviter de modifier l'objet original dans la liste
    this.editingBook = { ...book };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // réception de l'update final
  updateBook(updated: Book) {
    const idx = this.books.findIndex(b => b.id === updated.id);
    if (idx > -1) {
      this.books[idx] = { ...updated };
    }
    this.editingBook = null;
  }

  cancelEdit() {
    this.editingBook = null;
  }

  // trackBy pour ngFor
  trackById(index: number, item: Book) {
    return item.id;
  }
}
