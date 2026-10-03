// ========================================
// SULE PHARMACY ACADEMY
// WEBSITE JAVASCRIPT
// ========================================


// Mobile navigation menu

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("show");

}


// Welcome message

function welcomeMessage() {

    alert(
        "Welcome to Sule Pharmacy Academy! 💊\n\nLet's start learning pharmacy."
    );

}


// Search pharmacy resources

function searchContent() {

    const searchBox = document.getElementById("searchBox");

    const searchText = searchBox.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        const content = card.innerText.toLowerCase();

        if (content.includes(searchText)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


// Contact form

const contactForm = document.querySelector(".contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting Sule Pharmacy Academy! 💊"
        );

        contactForm.reset();

    });

}


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navbar").classList.remove("show");

    });

});