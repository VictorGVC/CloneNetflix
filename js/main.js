const seconds = 1000

let SearchAnimation = false
let videoSound = true
let currentTimeVideo = 0
let videoEnded = videoStarted = false

const initApp = () => {

    const video = document.getElementById('video')
    video.addEventListener('ended', function () {

        videoEnded = true
        video.load()
        video.pause()
    });

    playVideo()
    logoAnimation()
}

const logoAnimation = () => {

    const movieLogoStyle = document.querySelector(".logo-movie").style
    const sinopseStyle = document.querySelector(".sinopse").style

    setTimeout(function () {
        movieLogoStyle.width = '15%'
        movieLogoStyle.transform = 'translate(0px, 80px)'
        sinopseStyle.height = '0px'
    }, seconds * 15)
}

const searchAnimation = () => {

    const containerStyle = document.querySelector(".right-container").style
    const inputStyle = document.querySelector("input").style
    const searchContainerStyle = document.querySelector(".search-container").style

    if (SearchAnimation) {

        containerStyle.width = '200px'
        inputStyle.marginLeft = '0px'
        inputStyle.opacity = '0'
        inputStyle.width = '0px'
        searchContainerStyle.backgroundColor = 'transparent'
        searchContainerStyle.border = 'none'
    } else {

        containerStyle.width = '360px'
        inputStyle.marginLeft = '15px'
        inputStyle.opacity = '1'
        inputStyle.width = '150px'
        searchContainerStyle.backgroundColor = 'black'
        searchContainerStyle.padding = '5px 10px'
        searchContainerStyle.border = 'solid 1px #aaa'
    }

    SearchAnimation = !SearchAnimation
}

const playVideo = () => {

    const video = document.getElementById('video')
    video.load()
    video.pause()

    setTimeout(function () {

        videoStarted = true
        video.play()
    }, seconds * 3)
}

const mainVideoSound = () => {

    const mutedStyle = document.querySelector('.muted').style
    const soundStyle = document.querySelector('.sound').style
    const video = document.getElementById('video')

    if (videoSound) {

        mutedStyle.visibility = 'hidden'
        soundStyle.visibility = 'visible'
    }
    else {
        mutedStyle.visibility = 'visible'
        soundStyle.visibility = 'hidden'
    }

    video.muted = videoSound = !videoSound
}

document.addEventListener('scroll', function (e) {
    position = window.scrollY;

    if (!videoEnded) {

        if (position >= 50) {
            currentTimeVideo = video.currentTime || currentTimeVideo
            video.pause()
        }
        else if (video.paused && videoStarted)
            video.play()
    }
});