

let navMenu = document.querySelector('.navbar');
function showMenu() {
    navMenu.classList.toggle('active');
}
function hideMenu() {
    navMenu.classList.remove('active');
}

window.onscroll = () => {

    navMenu.classList.remove('active');

    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('active');
    }
    else {
        document.querySelector('header').classList.remove('active');
    }
}

let themeToggler = document.querySelector('#theme-toggler');
function theme() {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.querySelector('body').classList.add('active');
    }
    else {
        document.querySelector('body').classList.remove('active');
    }
}

document.querySelectorAll('.small-image-1').forEach(image => {
    image.onclick = () => {
        document.querySelector('.big-image-1').src = image.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-2').forEach(image => {
    image.onclick = () => {
        document.querySelector('.big-image-2').src = image.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-3').forEach(image => {
    image.onclick = () => {
        document.querySelector('.big-image-3').src = image.getAttribute('src');
    }
});

let countDate = new Date('may 1, 2022 00:00:00').getTime()
function countDown() {
    let now = new Date().getTime();
    gap = countDate - now;

    let sec = 1000;
    let min = sec * 60;
    let hrs = min * 60;
    let day = hrs * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hrs));
    let m = Math.floor((gap % (hrs)) / (min));
    let s = Math.floor((gap % (min)) / (sec));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

setInterval(function () {
    countDown()
}, 1000);
