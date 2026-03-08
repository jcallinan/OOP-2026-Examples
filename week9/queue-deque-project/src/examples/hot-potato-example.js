const hotPotato = require('../hot-potato');

const players = ['Violet', 'Feyre', 'Poppy', 'Oraya', 'Aelin'];
const winner = hotPotato(players, 7);
console.log(`The winner is: ${winner}!`);
