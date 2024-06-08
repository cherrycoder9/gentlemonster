(function () {
    let videos = document.querySelectorAll('video');

    videos.forEach(function (video) {
        video.onended = function () {
            video.currentTime = 0; // 비디오를 처음으로 되돌림
            video.play(); // 비디오 재생
        };
    });
})();