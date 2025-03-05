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

document.querySelectorAll(".enlarge").forEach(item => {
    item.addEventListener("click", event => {
        event.preventDefault();
    
        let parentContainer = item.closest(".container");
        let infoContent = parentContainer.querySelector(".info").innerHTML;
        let imgSrc = parentContainer.querySelector("img").src;
        let enlargeElement = document.getElementById("enlarge");

        enlargeElement.classList.remove("closed");
        enlargeElement.querySelector(".info").innerHTML = infoContent;
        enlargeElement.querySelector("#enlarged").src = imgSrc;
    });
});

document.getElementById("closeButton").addEventListener("click", () => {
    document.getElementById("enlarge").classList.add("closed");
});

function adjustFooterPosition() {
    const footer = document.getElementById("footer");
    const mainContent = document.getElementById("mainContent");
    const footerHeight = footer.offsetHeight;
    const mainContentHeight = mainContent.offsetHeight;
    const windowHeight = window.innerHeight;

    if (mainContentHeight + footerHeight + 4 * parseFloat(getComputedStyle(document.documentElement).fontSize) < windowHeight) {
        footer.style.position = "absolute";
        footer.style.bottom = "0";
        footer.style.width = "100%";
    } else {
        footer.style.position = "relative";
        footer.style.bottom = "auto";
        footer.style.width = "auto";
    }
}

window.addEventListener("load", adjustFooterPosition);
window.addEventListener("resize", adjustFooterPosition);

window.addEventListener("load", alignAllElements);
window.addEventListener("resize", alignAllElements);

window.addEventListener("scroll", updateActiveTitle);
window.addEventListener("resize", updateActiveTitle);
document.addEventListener("DOMContentLoaded", updateActiveTitle);