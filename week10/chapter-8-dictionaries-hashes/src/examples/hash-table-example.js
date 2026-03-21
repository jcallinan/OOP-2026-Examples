const HashTable = require('../hash-table');

const addressBook = new HashTable();
addressBook.put('Gandalf', 'gandalf@email.com');
addressBook.put('John', 'johnsnow@email.com');
addressBook.put('Tyrion', 'tyrion@email.com');

console.log('Hash Gandalf:', addressBook.hash('Gandalf'));
console.log('Hash John:', addressBook.hash('John'));
console.log('Hash Tyrion:', addressBook.hash('Tyrion'));
console.log('Get Gandalf:', addressBook.get('Gandalf'));
console.log('Remove Gandalf:', addressBook.remove('Gandalf'));
console.log('Get Gandalf again:', addressBook.get('Gandalf'));
