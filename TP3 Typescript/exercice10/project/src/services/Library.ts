import { Book } from "../models/Book";
import { Person, User, Admin } from "../models/Person";
import { Repository } from "../utils/Repository";

export class Library {
  private books: Repository<Book>;
  private users: Repository<Person>;
  // map bookId -> userId (qui a emprunté)
  private loans: Map<number, number> = new Map();

  constructor(bookRepo?: Repository<Book>, userRepo?: Repository<Person>) {
    this.books = bookRepo ?? new Repository<Book>();
    this.users = userRepo ?? new Repository<Person>();
  }

  // Books management
  addBook(book: Book): void {
    this.books.add(book);
  }

  removeBook(bookId: number, requester?: Person): boolean {
    // Optionnel : only admin can remove
    if (requester && requester.role !== "Admin") {
      throw new Error("Only admins can remove books.");
    }
    // Also prevent removing borrowed book
    if (this.loans.has(bookId)) {
      throw new Error("Book is currently borrowed and cannot be removed.");
    }
    return this.books.remove(bookId);
  }

  searchByTitle(title: string): Book[] {
    return this.books.find(
      b => b.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
    );
  }

  searchByAuthor(author: string): Book[] {
    return this.books.find(
      b => b.author.toLowerCase().indexOf(author.toLowerCase()) !== -1
    );
  }

  getAllBooks(): Book[] {
    return this.books.getAll();
  }

  listAvailableBooks(): Book[] {
    return this.books.find(b => b.available);
  }

  // Users management
  addUser(user: Person): void {
    this.users.add(user);
  }

  getUser(userId: number): Person | undefined {
    return this.users.getById(userId);
  }

  // Borrow/return
  borrowBook(bookId: number, userId: number): void {
    const book = this.books.getById(bookId);
    if (!book) throw new Error(`Book id=${bookId} not found.`);
    if (!book.available) throw new Error(`Book "${book.title}" is not available.`);

    const user = this.users.getById(userId);
    if (!user) throw new Error(`User id=${userId} not found.`);

    // mark as borrowed
    book.available = false;
    this.loans.set(bookId, userId);
  }

  returnBook(bookId: number): void {
    const book = this.books.getById(bookId);
    if (!book) throw new Error(`Book id=${bookId} not found.`);
    if (!this.loans.has(bookId)) throw new Error(`Book id=${bookId} is not borrowed.`);

    book.available = true;
    this.loans.delete(bookId);
  }

  // For debugging / display
  getLoans(): { bookId: number; userId: number }[] {
    return Array.from(this.loans.entries()).map(([bookId, userId]) => ({ bookId, userId }));
  }
}