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
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.#size++;
  }

  prepend(data) {
    // Textbook idea: prepending is cheap because the new node simply points to the old head.
    this.#head = new LinkedListNode(data, this.#head);
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

    const newNode = new LinkedListNode(data);
    let current = this.#head;
    let previous = null;
    let index = 0;
    while (index++ < position) {
      previous = current;
      current = current.next;
    }

    // This is the classic textbook pointer hand-off:
    // new node points forward first, then previous points to the new node.
    newNode.next = current;
    previous.next = newNode;
    this.#size++;
    return true;
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
    if (this.#size === 0) {
      throw new RangeError('Cannot remove from an empty list.');
    }
    if (position < 0 || position >= this.#size) {
      throw new RangeError('Invalid position.');
    }
    if (position === 0) {
      return this.#removeFromHead();
    }
    return this.#removeFromMiddleOrEnd(position);
  }

  remove(data, compareFunction = (a, b) => a === b) {
    const index = this.indexOf(data, compareFunction);
    if (index === -1) {
      return null;
    }
    return this.removeAt(index);
  }

  isEmpty() {
    return this.#size === 0;
  }

  clear() {
    this.#head = null;
    this.#size = 0;
  }

  get size() {
    return this.#size;
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

  toArray() {
    const items = [];
    this.forEach((item) => items.push(item));
    return items;
  }

  toString() {
    let current = this.#head;
    let result = '';
    while (current) {
      result += String(current.data);
      current = current.next;
      if (current) {
        result += ' -> ';
      }
    }
    return result;
  }

  #removeFromHead() {
    const nodeToRemove = this.#head;
    this.#head = this.#head.next;
    this.#size--;
    return nodeToRemove.data;
  }

  #removeFromMiddleOrEnd(position) {
    let nodeToRemove = this.#head;
    let previous = null;
    for (let index = 0; index < position; index++) {
      previous = nodeToRemove;
      nodeToRemove = nodeToRemove.next;
    }
    previous.next = nodeToRemove.next;
    this.#size--;
    return nodeToRemove.data;
  }
}

module.exports = LinkedList;
