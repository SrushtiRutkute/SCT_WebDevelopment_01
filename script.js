document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar ul li a");

    function setActiveLink(link) {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            setActiveLink(this);
        });
    });

    function highlightSection() {
        let currentSection = "";
        document.querySelectorAll("section, header").forEach((section) => {
            const sectionTop = section.offsetTop - 60;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightSection);
    
    // Ensure highlight updates instantly when page loads with a hash link
    const currentHash = window.location.hash;
    if (currentHash) {
        const activeLink = document.querySelector(.navbar ul li a[href="${currentHash}"]);
        if (activeLink) setActiveLink(activeLink);
    }
});