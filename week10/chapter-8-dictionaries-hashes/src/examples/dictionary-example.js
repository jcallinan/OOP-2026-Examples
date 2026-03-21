const Dictionary = require('../dictionary');

const translations = new Dictionary();
translations.set('hello', 'olá');
translations.set('thank you', 'obrigado');
translations.set('book', 'livro');
translations.set('cat', 'gato');
translations.set('computer', 'computador');

function translateWord(word) {
  if (translations.hasKey(word)) {
    console.log(`The translation of "${word}" is "${translations.get(word)}"`);
  } else {
    console.log(`Sorry, no translation found for "${word}"`);
  }
}

translateWord('hello');
translateWord('dog');
console.log('All translations:', translations.values());
console.log('All words:', translations.keys());
translations.forEach((value, key) => console.log(`${key}: ${value}`));
