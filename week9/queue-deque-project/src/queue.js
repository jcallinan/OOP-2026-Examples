class Queue {
  #items = [];

  enqueue(item) {
    this.#items.push(item);
  }

  dequeue() {
    return this.#items.shift();
  }

  front() {
    return this.#items[0];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  get size() {
    return this.#items.length;
  }

  clear() {
    this.#items = [];
  }

  toString() {
    if (this.isEmpty()) {
      return 'Empty Queue';
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

module.exports = Queue;
