export class IdGenerator {
  constructor(startIndex = 1) {
    this.index = startIndex;
  }

  getNext() {
    return this.index++;
  }
}
