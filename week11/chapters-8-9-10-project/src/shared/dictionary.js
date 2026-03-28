export default class Dictionary {
  constructor() {
    this.table = new Map();
  }

  set(key, value) {
    this.table.set(String(key), value);
  }

  get(key) {
    return this.table.get(String(key));
  }

  hasKey(key) {
    return this.table.has(String(key));
  }

  keys() {
    return [...this.table.keys()];
  }

  values() {
    return [...this.table.values()];
  }

  toString() {
    return [...this.table.entries()]
      .map(([k, v]) => `${k} -> ${JSON.stringify(v)}`)
      .join('\n');
  }
}
