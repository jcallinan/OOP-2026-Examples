const privateData = new WeakMap();

class Person {
  constructor(name, age) {
    privateData.set(this, { name, age });
  }

  getName() {
    return privateData.get(this).name;
  }
}

const person = new Person('Loiane', 39);
console.log('WeakMap-backed private name:', person.getName());
