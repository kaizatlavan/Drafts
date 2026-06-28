// ================================
// Typing Animation Settings
// ================================
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

// ================================
// DOM Loaded
// ================================
document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // Mobile Menu
    // ================================

    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    if(menuIcon && navbar){

        menuIcon.onclick = () =>{
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        }

        document.querySelectorAll(".navbar a").forEach(link=>{

            link.addEventListener("click",()=>{

                menuIcon.classList.remove("bx-x");
                navbar.classList.remove("active");

            });

        });

    }

    // ================================
    // Typing Animation
    // ================================

    textElement = document.querySelector(".text-animation span");

    if(textElement){
        setTimeout(typeText,1000);
    }

    // ================================
    // Active Navbar While Scrolling
    // ================================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll",()=>{

        let current = "";

        sections.forEach(section=>{

            const sectionTop = section.offsetTop - 170;
            const sectionHeight = section.offsetHeight;

            if(pageYOffset >= sectionTop){
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){
                link.classList.add("active");
            }

        });

    });

    // ================================
    // Header Scroll Effect
    // ================================

    const header = document.querySelector(".header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 80){

            header.style.background = "rgba(10,15,30,.75)";
            header.style.boxShadow = "0 0 30px rgba(56,189,248,.25)";

        }else{

            header.style.background = "rgba(15,15,25,.35)";
            header.style.boxShadow = "";

        }

    });

    // ================================
    // Reveal Animation
    // ================================

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.15
    });

    document.querySelectorAll("section").forEach(sec=>{

        sec.classList.add("hidden");

        observer.observe(sec);

    });

    // ================================
    // Animate Skill Boxes
    // ================================

    const cards = document.querySelectorAll(".skill-box");

    cards.forEach((card,index)=>{

        card.style.transitionDelay = `${index * 120}ms`;

    });

    // ================================
    // Home Image Parallax
    // ================================

    const image = document.querySelector(".home-img img");

    window.addEventListener("mousemove",(e)=>{

        if(!image) return;

        const x = (window.innerWidth/2 - e.pageX)/35;
        const y = (window.innerHeight/2 - e.pageY)/35;

        image.style.transform =
        `translate(${x}px,${y}px)`;

    });

    // ================================
    // EmailJS
    // ================================

    emailjs.init({
        publicKey: "eR5wwrLI6hfknQ7ks"
    });

    const contactForm = document.getElementById("contact-form");

    if(contactForm){

        contactForm.addEventListener("submit",function(event){

            event.preventDefault();

            emailjs.sendForm(

                "service_q4yzzmk",
                "template_66wjfzc",
                this

            ).then(()=>{

                alert("✅ Message sent successfully!");

                contactForm.reset();

            }).catch((error)=>{

                console.error(error);

                alert("❌ Failed to send message.");

            });

        });

    }

});

// ================================
// Scroll To Top Button (Optional)
// ================================

const scrollBtn = document.getElementById("scroll-top");

if(scrollBtn){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 500){

            scrollBtn.classList.add("show");

        }else{

            scrollBtn.classList.remove("show");

        }

    });

    scrollBtn.onclick = ()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    };

}