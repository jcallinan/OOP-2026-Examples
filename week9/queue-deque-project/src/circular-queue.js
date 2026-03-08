class CircularQueue {
  #items = [];
  #capacity = 0;
  #front = 0;
  #rear = -1;
  #size = 0;

  constructor(capacity) {
    this.#items = new Array(capacity);
    this.#capacity = capacity;
  }

  get size() {
    return this.#size;
  }

  enqueue(item) {
    if (this.isFull()) {
      throw new Error('Queue is full');
    }

    this.#rear = (this.#rear + 1) % this.#capacity;
    this.#items[this.#rear] = item;
    this.#size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    const item = this.#items[this.#front];
    this.#size--;

    if (this.isEmpty()) {
      this.#front = 0;
      this.#rear = -1;
    } else {
      this.#front = (this.#front + 1) % this.#capacity;
    }

    return item;
  }

  isFull() {
    return this.#size === this.#capacity;
  }

  isEmpty() {
    return this.#size === 0;
  }
}

module.exports = CircularQueue;
