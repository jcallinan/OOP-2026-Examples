const LinkedList = require('./utils/linked-list');
const HashTable = require('./hash-table');

class HashTableSeparateChaining extends HashTable {
  #table = [];

  put(key, value) {
    if (key == null || value == null) {
      return false;
    }
    const index = this.hash(key);
    if (this.#table[index] == null) {
      this.#table[index] = new LinkedList();
    }

    const linkedList = this.#table[index];
    const existingIndex = linkedList.indexOf({ key }, (a, b) => a.key === b.key);
    if (existingIndex >= 0) {
      linkedList.removeAt(existingIndex);
    }
    // Textbook link: each bucket can grow into a small chain instead of overwriting values.
    linkedList.append({ key, value });
    return true;
  }

  get(key) {
    const index = this.hash(key);
    const linkedList = this.#table[index];
    let found;
    if (linkedList != null) {
      linkedList.forEach((element) => {
        if (element.key === key) {
          found = element.value;
        }
      });
    }
    return found;
  }

  remove(key) {
    const index = this.hash(key);
    const linkedList = this.#table[index];
    if (linkedList != null) {
      const toBeRemovedIndex = linkedList.indexOf({ key }, (a, b) => a.key === b.key);
      if (toBeRemovedIndex >= 0) {
        linkedList.removeAt(toBeRemovedIndex);
        if (linkedList.isEmpty()) {
          this.#table[index] = undefined;
        }
        return true;
      }
    }
    return false;
  }
}

module.exports = HashTableSeparateChaining;
