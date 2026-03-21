const MySet = require('../set');

const interestsFromWebsites = new MySet();
interestsFromWebsites.addAll(['technology', 'politics', 'photography']);

const interestsFromSocialMedia = new MySet();
interestsFromSocialMedia.addAll(['technology', 'movies', 'books']);

const allInterests = interestsFromWebsites.union(interestsFromSocialMedia);
console.log('Union:', allInterests.values());
