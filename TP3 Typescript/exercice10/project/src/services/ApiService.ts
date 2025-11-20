// Service fictif qui "récupère" une liste de livres (simulé avec Promise + setTimeout)

import { Book } from "../models/Book";

export class ApiService {
  static fetchBooks(): Promise<Book[]> {
    const fakeBooks: Book[] = [
      new Book(1, "Le Petit Prince", "Antoine de Saint-Exupéry", 1943, true),
      new Book(2, "1984", "George Orwell", 1949, true),
      new Book(3, "Clean Code", "Robert C. Martin", 2008, true),
      new Book(4, "The Pragmatic Programmer", "Andrew Hunt", 1999, true)
    ];

    return new Promise(resolve => {
      setTimeout(() => resolve(fakeBooks), 500); // simule latence réseau
    });
  }
}