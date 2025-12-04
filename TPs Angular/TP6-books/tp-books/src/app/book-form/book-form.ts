import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../models/book';

@Component({
  selector: 'book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrls: ['./book-form.css']
})
export class BookFormComponent implements OnChanges {
  @Input() categories: string[] = [];
  @Input() book: Book | null = null; // si non null -> edit mode

  @Output() add = new EventEmitter<Book>();
  @Output() update = new EventEmitter<Book>();
  @Output() cancel = new EventEmitter<void>();

  model: Partial<Book> = this.emptyModel();
  editing = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['book']) {
      if (this.book) {
        this.model = { ...this.book };
        this.editing = true;
      } else {
        this.model = this.emptyModel();
        this.editing = false;
      }
    }
  }

  emptyModel(): Partial<Book> {
    return {
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: '',
      category: '',
      isAvailable: true,
      stock: undefined
    };
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      // mark all as touched/dirty to show messages
      Object.values(form.controls).forEach(c => c.markAsDirty());
      return;
    }

    const bookPayload: Book = {
      id: (this.model as any).id ?? -1,
      title: (this.model.title || '').trim(),
      author: (this.model.author || '').trim(),
      publisherEmail: (this.model.publisherEmail || '').trim(),
      publisherPhone: (this.model.publisherPhone || '').trim(),
      releaseDate: (this.model.releaseDate || '').toString(),
      category: (this.model.category || '').toString(),
      isAvailable: !!this.model.isAvailable,
      stock: this.model.stock !== undefined ? Number(this.model.stock) : undefined
    };

    if (this.editing) {
      this.update.emit(bookPayload);
    } else {
      this.add.emit(bookPayload);
    }
    form.resetForm(this.emptyModel());
    this.model = this.emptyModel();
    this.editing = false;
  }

  onCancel(form: NgForm) {
    form.resetForm(this.emptyModel());
    this.model = this.emptyModel();
    this.editing = false;
    this.cancel.emit();
  }
}
