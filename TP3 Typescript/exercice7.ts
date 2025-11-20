// 1. Fonction générique identity
function identity<T>(value: T): T {
  return value;
}

console.log("Identity number:", identity<number>(42));
console.log("Identity string:", identity<string>("Hello"));

// 2. Fonction générique getFirst
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log("First number:", getFirst<number>([10, 20, 30]));
console.log("First string:", getFirst<string>(["TS", "JS", "Node"]));

// 3. Classe générique Repository
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    this.items = this.items.filter(i => i !== item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numberRepo = new Repository<number>();
numberRepo.add(1);
numberRepo.add(2);
numberRepo.remove(1);
console.log("Number repository:", numberRepo.getAll());

const stringRepo = new Repository<string>();
stringRepo.add("Alice");
stringRepo.add("Bob");
console.log("String repository:", stringRepo.getAll());

// 4. Interface générique ApiResponse
interface ApiResponse<T> {
  data: T;
  error?: string;
}

const successResponse: ApiResponse<number[]> = {
  data: [1, 2, 3]
};

const errorResponse: ApiResponse<null> = {
  data: null,
  error: "Something went wrong"
};

console.log("Success Response:", successResponse);
console.log("Error Response:", errorResponse);
