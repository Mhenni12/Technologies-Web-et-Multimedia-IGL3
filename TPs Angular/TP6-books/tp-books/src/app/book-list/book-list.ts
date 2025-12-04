import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../models/book';

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() edit = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<number>();
  @Output() selectCategory = new EventEmitter<string>();

  onEdit(b: Book) { this.edit.emit(b); }
  onDelete(id: number) {
    if (confirm('Supprimer ce livre ?')) {
      this.delete.emit(id);
    }
  }
  chooseCategory(c: string) {
    this.selectCategory.emit(c);
  }
  trackById(index: number, item: Book) { return item.id; }
}
