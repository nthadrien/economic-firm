window.onload = () => {
    console.log('windows loaded')


    const boxes = document.querySelectorAll(".inter");
    const cards = document.querySelectorAll(".card");

    const btn = document.querySelector('#hamburger');
    const nav = document.querySelector('.nav-links');
    btn.addEventListener('click', () => {
        nav.classList.toggle('show');
        btn.classList.toggle('open');
    });

    let options = {
        rootMargin: window.innerWidth > 768 ? "-200px" : "-100px",
    };

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("animate", entry.isIntersecting );
            if ( entry.isIntersecting ) observer.unobserve(entry.target);
        });
    };

    let observer = new IntersectionObserver(callback, options);

    boxes.forEach( card => {
        observer.observe( card );
    });
};