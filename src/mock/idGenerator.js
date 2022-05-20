export class IdGenerator {
  constructor(startIndex = 1) {
    this.index = startIndex;
  }

  netNext() {
    return this.index++;
  }
}
