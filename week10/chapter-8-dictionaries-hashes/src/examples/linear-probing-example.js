const HashTableLinearProbing = require('../hash-table-linear-probing');

const table = new HashTableLinearProbing();
['Ygritte', 'Jonathan', 'Jamie', 'Jack', 'Jasmine', 'Jake', 'Nathan', 'Athelstan', 'Sue', 'Aethelwulf', 'Sargeras']
  .forEach((name) => table.put(name, `${name.toLowerCase()}@email.com`));

console.log('Get Sue:', table.get('Sue'));
console.log('Remove Jonathan:', table.remove('Jonathan'));
console.log('Get Jonathan:', table.get('Jonathan'));
console.log('Current table:', table.tableView());
