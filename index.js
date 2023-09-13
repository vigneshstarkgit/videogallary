let listvideo = document.querySelectorAll('.video-list .vid');
let mainvideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');
listvideo.forEach(video =>{
    video.onclick=() =>{
        listvideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainvideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;

        };
    };
});

//tick
// Get all video elements on the page
const videos = document.querySelectorAll('video');

// Add an event listener for each video element
videos.forEach((video, index) => {
  video.addEventListener('ended', () => {
    // Find the corresponding "fas fa-check" icon for this video
    const checkIcon = document.querySelectorAll('.fas.fa-check')[index];
    
    // Add the "green-check" class to change the color to green
    checkIcon.classList.add('green-check');
  });
});

