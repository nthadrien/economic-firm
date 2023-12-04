window.onload = () => {
    const boxes = document.querySelectorAll(".inter");
    const cards = document.querySelectorAll(".card");

    const btn = document.querySelector('#hamburger');
    const nav = document.querySelector('.nav-links');
    btn.addEventListener('click', () => {
        nav.classList.toggle('show');
        btn.classList.toggle('open');
    });

    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("animate", entry.isIntersecting);
                if (entry.isIntersecting) observer.unobserve(entry.target);
            })
        }, {
        rootMargin: window.innerWidth > 768 ? "-200px" : "-100px",
    });

    let observer2 = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("glow", entry.isIntersecting);
                if (entry.isIntersecting) observer.unobserve(entry.target);
            })
        }, {
            rootMargin: "300px",
        }
    );

    boxes.forEach(box => {
        observer.observe(box);
    });

    cards.forEach(card => {
        observer2.observe(card);
    });
};