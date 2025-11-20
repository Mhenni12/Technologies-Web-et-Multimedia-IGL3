export class Repository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    // prevent duplicate ids
    if (this.items.find(i => i.id === item.id)) {
      throw new Error(`Item with id ${item.id} already exists.`);
    }
    this.items.push(item);
  }

  remove(id: number): boolean {
    const lengthBefore = this.items.length;
    this.items = this.items.filter(i => i.id !== id);
    return this.items.length < lengthBefore;
  }

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: number): T | undefined {
    return this.items.find(i => i.id === id);
  }

  find(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate);
  }
}