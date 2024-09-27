
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".menu-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
};
var typed = new Typed(".typewriter-text",
    {
    strings: [" ",
        "Frontend Developer",

        "Backend Developer",

        "Web Designer",

        
    ],
    typeSpeed: 100,
    backSpeed: 70,
    loop:true
});

