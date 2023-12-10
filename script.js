console.log("Welcome to spotify")
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogress = document.getElementById('myprogress');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "3.mp3", coverPath: "3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "4.mp3", coverPath: "4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "2.mp3", coverPath: "6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "2.mp3", coverPath: "7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "2.mp3", coverPath: "8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "2.mp3", coverPath: "9.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

// audioElement.play();
//handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to events:
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myprogress.value = progress;
})
myprogress.addEventListener('change', () => {
    audioElement.currentTime = myprogress.value * audioElement.duration / 100;
})
const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         console.log(e.target);
//         makeallplays();
//         songIndex = parseInt(e.target.id);
//         if (audioElement.paused || audioElement.currentTime <= 0) {
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `${songIndex + 1}.mp3`;
//         mastersongname.innerText = songs[songIndex].songName;
//         gif.style.opacity = 1;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     }
//         else{
//             e.target.classList.remove('fa-pause-circle');
//         e.target.classList.add('fa-play-circle');
//         mastersongname.innerText = songs[songIndex].songName;
//         gif.style.opacity = 0;
//         audioElement.currentTime = 0;
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         }
//     })
// })


Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex + 1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 8;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})