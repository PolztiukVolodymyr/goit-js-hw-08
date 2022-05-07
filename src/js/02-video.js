import vimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);


const onPlay = function(data) {

 player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time")));

};

const onTimeUpdate = function(data) {

localStorage.setItem("videoplayer-current-time", data.seconds);

};

player.on('play', onPlay);

player.on('timeupdate', throttle(onTimeUpdate, 1000));


// console.log(iframe);
// console.log(player);
