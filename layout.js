let alignIDs = [["mainContent", "image1"], ["Rational model", "image2"]];

function alignElements(referenceId, targetId) {
    let referenceElement = document.getElementById(referenceId);
    let targetElement = document.getElementById(targetId);

    if (referenceElement && targetElement) {
        let referencePosition = referenceElement.getBoundingClientRect().top + window.scrollY;
        targetElement.style.position = "absolute";
        targetElement.style.top = referencePosition + "px";
    }
}

function alignAllElements() {
    alignIDs.forEach(pair => alignElements(pair[0], pair[1]));
}

function updateActiveTitle() {
    let titles = document.querySelectorAll(".title");
    let scrollPosition = window.scrollY + window.innerHeight * 0.1;
    let activeSection = null;
    let sections = [];

    titles.forEach(title => {
        let targetId = title.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
            let section = document.querySelector(targetId.replace(/\s+/g, "\\ ").replace(/:/g, "\\:"));
            if (section) sections.push({ link: title, section });
        }
    });

    sections.forEach(({ link, section }, index) => {
        let sectionTop = section.offsetTop;
        let sectionBottom = index < sections.length - 1 ? sections[index + 1].section.offsetTop : document.body.scrollHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSection = link;
        }
    });

    titles.forEach(title => title.classList.remove("active"));
    if (activeSection) activeSection.classList.add("active");
}

window.addEventListener("load", alignAllElements);
window.addEventListener("resize", alignAllElements);

window.addEventListener("scroll", updateActiveTitle);
window.addEventListener("resize", updateActiveTitle);
document.addEventListener("DOMContentLoaded", updateActiveTitle);