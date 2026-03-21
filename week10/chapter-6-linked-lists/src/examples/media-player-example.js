const MediaPlayer = require('../media-player');

const mediaPlayer = new MediaPlayer();
mediaPlayer.addSongByTitle('The Bard\'s Song');
mediaPlayer.addSongByTitle('Florida!!!');
mediaPlayer.addSongByTitle('Run to the Hills');
mediaPlayer.addSongByTitle('Nothing Else Matters');

console.log('Sorted playlist:', mediaPlayer.playlist());
console.log('Playing:', mediaPlayer.play());
console.log('Next:', mediaPlayer.next());
console.log('Next:', mediaPlayer.next());
console.log('Previous:', mediaPlayer.previous());
