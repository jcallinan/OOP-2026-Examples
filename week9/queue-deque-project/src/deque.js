class Deque {
  #items = [];

  addFront(item) {
    this.#items.unshift(item);
  }

  addRear(item) {
    this.#items.push(item);
  }

  removeFront() {
    return this.#items.shift();
  }

  removeRear() {
    return this.#items.pop();
  }

  peekFront() {
    return this.#items[0];
  }

  peekRear() {
    return this.#items[this.#items.length - 1];
  }

  // Alias used by one chapter snippet (goForward)
  peekBack() {
    return this.peekRear();
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  clear() {
    this.#items = [];
  }

  size() {
    return this.#items.length;
  }

  toString() {
    if (this.isEmpty()) {
      return 'Empty Deque';
    }

    return this.#items
      .map((item) => {
        if (typeof item === 'object' && item !== null) {
          return JSON.stringify(item);
        }
        return item.toString();
      })
      .join(', ');
  }
}

module.exports = Deque;
