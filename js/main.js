// video
const playBtn = document.querySelector('.story__video_btn');
const videoItem = document.querySelector('.story__video_item');

playBtn.addEventListener("click", function() {
    if(videoItem.paused) {
        videoItem.play() // Запуск проигрывания
    }else{
        videoItem.pause() // Отасновка проигрывания
    }
});


// menu
const menu = document.querySelector('.header__mobil')

menu.addEventListener('click', function() {
    this.classList.toggle('active')
})