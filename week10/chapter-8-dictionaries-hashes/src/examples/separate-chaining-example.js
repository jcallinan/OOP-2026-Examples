const HashTableSeparateChaining = require('../hash-table-separate-chaining');

const addressBook = new HashTableSeparateChaining();
['Ygritte', 'Jonathan', 'Jamie', 'Jack', 'Jasmine', 'Jake', 'Nathan', 'Athelstan', 'Sue', 'Aethelwulf', 'Sargeras']
  .forEach((name) => addressBook.put(name, `${name.toLowerCase()}@email.com`));

console.log('Get Jonathan:', addressBook.get('Jonathan'));
console.log('Get Aethelwulf:', addressBook.get('Aethelwulf'));
console.log('Remove Jamie:', addressBook.remove('Jamie'));
console.log('Get Jamie:', addressBook.get('Jamie'));
