import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = "videoplayer-current-time";


player.on('timeupdate', throttle(onTimeUpdate, 1000));


function onTimeUpdate(e) {
    localStorage.setItem(LOCAL_STORAGE_KEY, e.seconds);
    console.log(e.seconds);
}



const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY) || 0;
console.log(currentTime);

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


player.setColor('#eb34df').then(function(color) {
    // color was successfully set
}).catch(function(error) {
    switch (error.name) {
        case 'ContrastError':
            // the color was set, but the contrast is outside of the acceptable
            // range
            break;

        case 'TypeError':
            // the string was not a valid hex or rgb color
            break;

        case 'EmbedSettingsError':
            // the owner of the video has chosen to use a specific color
            break;

        default:
            // some other error occurred
            break;
    }
});

