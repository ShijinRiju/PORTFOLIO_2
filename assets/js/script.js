// Typed animation code
var typed = new Typed(".auto-type", {
    strings: ["Shijin."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Active navlinks code
const navLinkEls = document.querySelectorAll('.nav-link');
navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');
    });
});

// Email copy code
function copyEmail() {
    const email = "example@example.com"; // Replace with the email you want to copy
    const button = document.querySelector(".email");

    // Check if the clipboard API is supported
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
            button.innerHTML = "Email Copied <i class='bx bx-check'></i>";
            button.classList.add("copied");

            // Reset the button text after 3 seconds
            setTimeout(() => {
                button.innerHTML = "Copy Email <i class='bx bx-copy'></i>";
                button.classList.remove("copied");
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy email: ', err);
            alert('Failed to copy email.');
        });
    } else {
        // Fallback method for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            button.innerHTML = "Email Copied <i class='bx bx-check'></i>";
            button.classList.add("copied");

            // Reset the button text after 3 seconds
            setTimeout(() => {
                button.innerHTML = "Copy Email <i class='bx bx-copy'></i>";
                button.classList.remove("copied");
            }, 3000);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            alert('Failed to copy email.');
        }
        document.body.removeChild(textArea);
    }
}



// scrollToTop Function
const scrollTop = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollTop.classList.add("active");
    } else {
        scrollTop.classList.remove("active");
    }
});

// Mobile nav
let menu = document.querySelector("#menu");
let navlinks = document.querySelector(".nav-links");
let hide = document.querySelector(".hero-head");

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navlinks.classList.toggle("open");
    hide.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
    if (navlinks.classList.contains("open")) {
        menu.classList.remove("bx-x");
        navlinks.classList.remove("open");
        hide.classList.remove("hidden");
    }
});
