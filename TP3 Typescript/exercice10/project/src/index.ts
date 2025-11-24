import { ApiService } from "./services/ApiService";
import { Library } from "./services/Library";
import { Repository } from "./utils/Repository";
import { Book } from "./models/Book";
import { User, Admin } from "./models/Person";

async function main() {
  console.log("Starting library demo...");

  // Repositories partagés (in-memory)
  const bookRepo = new Repository<Book>();
  const userRepo = new Repository<any>(); // Person extends {id:number}

  // Library instance
  const library = new Library(bookRepo, userRepo);

  // 1) Charger des livres depuis le "service API"
  const booksFromApi = await ApiService.fetchBooks();
  booksFromApi.forEach(b => library.addBook(b));
  console.log("Books loaded from API:", library.getAllBooks().length);

  // 2) Créer des utilisateurs
  const user1 = new User(100, "Mohamed Lassoued");
  const admin1 = new Admin(1, "SuperAdmin", ["manage_books", "manage_users"]);
  library.addUser(user1);
  library.addUser(admin1);

  // 3) Rechercher
  console.log("Search for 'Clean':", library.searchByTitle("Clean"));

  // 4) Emprunter un livre
  const bookToBorrow = library.getAllBooks()[0];
  console.log(`Borrowing book id=${bookToBorrow.id} by user ${user1.name}...`);
  library.borrowBook(bookToBorrow.id, user1.id);
  console.log("Available books after borrow:", library.listAvailableBooks().length);
  console.log("Current loans:", library.getLoans());

  // 5) Retourner le livre
  library.returnBook(bookToBorrow.id);
  console.log("Available books after return:", library.listAvailableBooks().length);

  // 6) Admin supprime un livre
  const bookToRemove = library.getAllBooks()[1];
  console.log(`Removing book id=${bookToRemove.id} by admin...`);
  library.removeBook(bookToRemove.id, admin1);
  console.log("Books remaining:", library.getAllBooks().length);

  console.log("Demo finished.");
}

main().catch(err => {
  console.error("Error in demo:", err);
});