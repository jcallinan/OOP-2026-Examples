class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  #head = null;
  #size = 0;

  append(data) {
    const newNode = new LinkedListNode(data);
    if (!this.#head) {
      this.#head = newNode;
    } else {
      let current = this.#head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.#size++;
  }

  indexOf(data, compareFunction = (a, b) => a === b) {
    let current = this.#head;
    let index = 0;
    while (current) {
      if (compareFunction(current.data, data)) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  removeAt(position) {
    if (position < 0 || position >= this.#size) {
      throw new RangeError('Invalid position.');
    }
    if (position === 0) {
      const data = this.#head.data;
      this.#head = this.#head.next;
      this.#size--;
      return data;
    }
    let current = this.#head;
    let previous = null;
    for (let index = 0; index < position; index++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.#size--;
    return current.data;
  }

  forEach(callback) {
    let current = this.#head;
    let index = 0;
    while (current) {
      callback(current.data, index);
      current = current.next;
      index++;
    }
  }

  isEmpty() {
    return this.#size === 0;
  }
}

module.exports = LinkedList;
