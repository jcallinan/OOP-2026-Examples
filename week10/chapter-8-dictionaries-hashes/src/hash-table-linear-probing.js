const HashTable = require('./hash-table');

class HashTableLinearProbing extends HashTable {
  #table = [];

  put(key, value) {
    if (key == null || value == null) {
      return false;
    }
    let index = this.hash(key);
    while (this.#table[index] != null) {
      if (this.#table[index].key === key) {
        this.#table[index].value = value;
        return true;
      }
      index++;
    }
    this.#table[index] = { key, value };
    return true;
  }

  get(key) {
    let index = this.hash(key);
    while (this.#table[index] != null) {
      if (this.#table[index].key === key) {
        return this.#table[index].value;
      }
      index++;
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    while (this.#table[index] != null) {
      if (this.#table[index].key === key) {
        delete this.#table[index];
        this.#verifyRemoveSideEffect(index);
        return true;
      }
      index++;
    }
    return false;
  }

  tableView() {
    return this.#table.filter(Boolean);
  }

  #verifyRemoveSideEffect(removedPosition) {
    let index = removedPosition + 1;
    while (this.#table[index] != null) {
      const currentKey = this.#table[index].key;
      const currentHash = this.hash(currentKey);
      if (currentHash <= removedPosition) {
        this.#table[removedPosition] = this.#table[index];
        delete this.#table[index];
        removedPosition = index;
      }
      index++;
    }
  }
}

module.exports = HashTableLinearProbing;
