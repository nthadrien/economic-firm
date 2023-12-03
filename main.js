window.onload = () => {
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

    let options2 = {
        rootMargin: "-50px",
    };

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("animate", entry.isIntersecting );
            if ( entry.isIntersecting ) observer.unobserve(entry.target);
        });
    };

    let callback2 = (entries, observer) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("glow", entry.isIntersecting );
            if ( entry.isIntersecting ) observer.unobserve(entry.target);
        });
    };

    let observer = new IntersectionObserver(callback, options);
    let observer2 = new IntersectionObserver(callback2, options2);

    boxes.forEach( card => {
        observer.observe( card );
    });

    cards.forEach( card => {
        observer2.observe( card );
    });
};