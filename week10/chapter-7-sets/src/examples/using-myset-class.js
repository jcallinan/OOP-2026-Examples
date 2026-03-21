const MySet = require('../set');

const article = {
  title: 'The importance of data structures in programming',
  content: '...',
  tags: new MySet()
};

article.tags.add('programming');
article.tags.add('data structures');
article.tags.add('algorithms');
article.tags.add('programming');

console.log('Article tags:', article.tags.values());
console.log('Tag count:', article.tags.size);
