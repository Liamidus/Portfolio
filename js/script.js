let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.side-bar');

btn.onclick =function () {
    sidebar.classList.toggle('active');
};

const video = document.querySelector(".video-container video");

video.addEventListener("mouseenter", () => {
    video.play();
})
video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 1;
})