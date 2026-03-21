class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class CircularLinkedList {
  #head = null;
  #size = 0;

  append(data) {
    const newNode = new LinkedListNode(data);
    if (!this.#head) {
      this.#head = newNode;
      newNode.next = this.#head;
    } else {
      let current = this.#head;
      while (current.next !== this.#head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.#head;
    }
    this.#size++;
  }

  prepend(data) {
    const newNode = new LinkedListNode(data, this.#head);
    if (!this.#head) {
      this.#head = newNode;
      newNode.next = this.#head;
    } else {
      let current = this.#head;
      while (current.next !== this.#head) {
        current = current.next;
      }
      current.next = newNode;
      this.#head = newNode;
    }
    this.#size++;
  }

  removeAt(position) {
    if (this.#size === 0) {
      throw new RangeError('Cannot remove from an empty list.');
    }
    if (position < 0 || position >= this.#size) {
      throw new RangeError('Invalid position.');
    }
    if (position === 0) {
      return this.#removeFromHead();
    }
    if (position === this.#size - 1) {
      return this.#removeFromTail();
    }

    let previous = null;
    let current = this.#head;
    for (let index = 0; index < position; index++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.#size--;
    return current.data;
  }

  toArray() {
    const items = [];
    if (!this.#head) {
      return items;
    }
    let current = this.#head;
    do {
      items.push(current.data);
      current = current.next;
    } while (current !== this.#head);
    return items;
  }

  toString() {
    return `${this.toArray().join(' -> ')} -> (back to head)`;
  }

  #removeFromHead() {
    const nodeToRemove = this.#head;
    if (this.#size === 1) {
      this.#head = null;
      this.#size--;
      return nodeToRemove.data;
    }

    let lastNode = this.#head;
    while (lastNode.next !== this.#head) {
      lastNode = lastNode.next;
    }
    this.#head = nodeToRemove.next;
    lastNode.next = this.#head;
    this.#size--;
    return nodeToRemove.data;
  }

  #removeFromTail() {
    if (this.#head.next === this.#head) {
      const nodeToRemove = this.#head;
      this.#head = null;
      this.#size--;
      return nodeToRemove.data;
    }
    let previousNode = null;
    let lastNode = this.#head;
    while (lastNode.next !== this.#head) {
      previousNode = lastNode;
      lastNode = lastNode.next;
    }
    previousNode.next = this.#head;
    this.#size--;
    return lastNode.data;
  }
}

module.exports = CircularLinkedList;
