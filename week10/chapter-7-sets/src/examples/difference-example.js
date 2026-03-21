const MySet = require('../set');

const booksInterested = new MySet();
booksInterested.addAll(['Aelin', 'Poppy', 'Violet']);
const alreadyPurchasedBooks = new MySet();
alreadyPurchasedBooks.addAll(['Poppy']);

const targetSubscribers = booksInterested.difference(alreadyPurchasedBooks);
targetSubscribers.values().forEach((subscriber) => {
  console.log(`Sending email to ${subscriber}: New books you will love!`);
});
