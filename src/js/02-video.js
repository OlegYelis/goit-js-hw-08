import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoplayer_current_time = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

const currentTime = data => {
  localStorage.setItem(videoplayer_current_time, data.seconds);
};

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(localStorage.getItem(videoplayer_current_time));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
