// Typing Animation Settings
const texts = [
    "Web Developer",
    "Shopify Assistant",
    "E-Commerce VA",
    "Technical Support Assistant"
];

let speed = 100;
let eraseSpeed = 50;
let delay = 1500;
let textIndex = 0;
let charIndex = 0;

let textElement;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, speed);
    } else {
        setTimeout(eraseText, delay);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex++;
        if (textIndex >= texts.length) {
            textIndex = 0;
        }
        setTimeout(typeText, 500);
    }
}

// Global Event Listener for Safe Execution
document.addEventListener("DOMContentLoaded", () => {
    
    // Mobile Menu Toggle & Navigation Link Handling
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        });

        document.querySelectorAll(".navbar a").forEach(link => {
            link.addEventListener("click", () => {
                menuIcon.classList.remove("bx-x");
                navbar.classList.remove("active");
            });
        });
    }

    // Typing Animation Init
    textElement = document.querySelector(".text-animation span");
    if (textElement) {
        setTimeout(typeText, 1000);
    }

    // EmailJS Contact Form - Initialized with Correct Public Key
    emailjs.init({
        publicKey: "eR5wwrLI6hfknQ7ks"
    });
    
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            emailjs.sendForm(
                "service_q4yzzmk",
                "template_66wjfzc",
                this
            )
            .then(() => {
                alert("Message sent successfully!");
                contactForm.reset();
            })
            .catch((error) => {
                console.error("EMAILJS ERROR:", error);
                alert("Failed to send message. Check console.");
            });
        });
    }
});