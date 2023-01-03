import Player from '@vimeo/player';
var throttle = require('lodash/throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

const stopTime = localStorage.getItem('videoplayer-current-time');

if (stopTime) {
  player.setCurrentTime(stopTime);
}
