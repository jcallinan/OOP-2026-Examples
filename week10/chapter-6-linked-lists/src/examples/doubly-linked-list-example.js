const DoublyLinkedList = require('../doubly-linked-list');

const playlist = new DoublyLinkedList();
playlist.append('Intro');
playlist.append('Chapter 6');
playlist.prepend('Warm Up');
playlist.insert('Worked Example', 2);

console.log('Doubly linked list:', playlist.toString());
console.log('Removed from tail:', playlist.removeAt(3));
console.log('Now:', playlist.toString());
