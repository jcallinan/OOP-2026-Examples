class Dictionary {
  #items = {};
  #size = 0;

  #elementToString(data) {
    if (typeof data === 'object' && data !== null) {
      return JSON.stringify(data);
    }
    return String(data);
  }

  hasKey(key) {
    return this.#items[this.#elementToString(key)] != null;
  }

  set(key, value) {
    if (key == null || value == null) {
      return false;
    }
    const tableKey = this.#elementToString(key);
    if (!this.hasKey(key)) {
      this.#size++;
    }
    this.#items[tableKey] = value;
    return true;
  }

  delete(key) {
    const tableKey = this.#elementToString(key);
    if (this.hasKey(key)) {
      delete this.#items[tableKey];
      this.#size--;
      return true;
    }
    return false;
  }

  clear() {
    this.#items = {};
    this.#size = 0;
  }

  get size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  get(key) {
    return this.#items[this.#elementToString(key)];
  }

  values() {
    return Object.values(this.#items);
  }

  keys() {
    return Object.keys(this.#items);
  }

  forEach(callbackFn) {
    for (const key in this.#items) {
      if (Object.prototype.hasOwnProperty.call(this.#items, key)) {
        const keepGoing = callbackFn(this.#items[key], key);
        if (keepGoing === false) {
          break;
        }
      }
    }
  }
}

module.exports = Dictionary;
