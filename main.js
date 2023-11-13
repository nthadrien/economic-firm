window.onload = () => {
    console.log('windows loaded')
};

const btn = document.querySelector('#hamburger');
const nav = document.querySelector('.nav-links');
btn.addEventListener('click', () => {
    nav.classList.toggle('show');
    btn.classList.toggle('open');
});