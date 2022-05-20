export class StringGenerator {
  currentIndex = 0;

  constructor(strings) {
    this.hashstack = strings;
  }

  get stringsCount() {
    return this.hashstack.length;
  }

  getNext() {
    this.currentIndex++;
    if (this.currentIndex >= this.stringsCount) {
      this.currentIndex = 0;
    }
    return this.hashstack[this.currentIndex];
  }
}
