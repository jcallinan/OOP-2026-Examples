class HashTable {
  #table = [];

  #elementToString(data) {
    if (typeof data === 'object' && data !== null) {
      return JSON.stringify(data);
    }
    return String(data);
  }

  #loseLoseHashCode(key) {
    if (typeof key !== 'string') {
      key = this.#elementToString(key);
    }
    const calcASCIIValue = (acc, char) => acc + char.charCodeAt(0);
    const hash = key.split('').reduce(calcASCIIValue, 0);
    return hash % 37;
  }

  djb2Hash(key) {
    if (typeof key !== 'string') {
      key = this.#elementToString(key);
    }
    const calcASCIIValue = (acc, char) => (acc * 33) + char.charCodeAt(0);
    const hash = key.split('').reduce(calcASCIIValue, 5381);
    return hash % 1013;
  }

  hash(key) {
    return this.#loseLoseHashCode(key);
  }

  put(key, value) {
    if (key == null || value == null) {
      return false;
    }
    const index = this.hash(key);
    this.#table[index] = { key, value };
    return true;
  }

  get(key) {
    if (key == null) {
      return undefined;
    }
    const pair = this.#table[this.hash(key)];
    return pair?.value;
  }

  remove(key) {
    if (key == null) {
      return false;
    }
    const index = this.hash(key);
    if (this.#table[index] != null) {
      delete this.#table[index];
      return true;
    }
    return false;
  }

  toString() {
    const keys = Object.keys(this.#table);
    return keys
      .map((key) => `{${key} => ${JSON.stringify(this.#table[key])}}`)
      .join('\n');
  }
}

module.exports = HashTable;
