// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
document.getElementById("h3").textContent = `$150`;


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })


}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })


}