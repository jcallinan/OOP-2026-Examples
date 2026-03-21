class DoublyLinkedListNode {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  append(data) {
    const newNode = new DoublyLinkedListNode(data);
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      newNode.previous = this.#tail;
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    this.#size++;
  }

  prepend(data) {
    const newNode = new DoublyLinkedListNode(data);
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      newNode.next = this.#head;
      this.#head.previous = newNode;
      this.#head = newNode;
    }
    this.#size++;
  }

  insert(data, position) {
    if (position < 0 || position > this.#size) {
      return false;
    }
    if (position === 0) {
      this.prepend(data);
      return true;
    }
    if (position === this.#size) {
      this.append(data);
      return true;
    }

    const newNode = new DoublyLinkedListNode(data);
    let currentNode = this.#head;
    let previousNode = null;
    for (let index = 0; index < position; index++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    newNode.next = currentNode;
    newNode.previous = previousNode;
    currentNode.previous = newNode;
    previousNode.next = newNode;
    this.#size++;
    return true;
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
    return this.#removeFromMiddle(position);
  }

  get size() {
    return this.#size;
  }

  toArray() {
    const values = [];
    let current = this.#head;
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    return values;
  }

  toString() {
    return this.toArray().join(' <-> ');
  }

  #removeFromHead() {
    const nodeToRemove = this.#head;
    this.#head = nodeToRemove.next;
    if (this.#head) {
      this.#head.previous = null;
    } else {
      this.#tail = null;
    }
    this.#size--;
    return nodeToRemove.data;
  }

  #removeFromTail() {
    const nodeToRemove = this.#tail;
    this.#tail = nodeToRemove.previous;
    if (this.#tail) {
      this.#tail.next = null;
    } else {
      this.#head = null;
    }
    this.#size--;
    return nodeToRemove.data;
  }

  #removeFromMiddle(position) {
    let nodeToRemove = this.#head;
    let previousNode = null;
    for (let index = 0; index < position; index++) {
      previousNode = nodeToRemove;
      nodeToRemove = nodeToRemove.next;
    }
    previousNode.next = nodeToRemove.next;
    nodeToRemove.next.previous = previousNode;
    this.#size--;
    return nodeToRemove.data;
  }
}

module.exports = DoublyLinkedList;
