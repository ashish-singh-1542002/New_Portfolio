// Get the menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle mobile menu visibility on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');      // Change icon appearance
    navbar.classList.toggle('active');      // Show/hide navbar
};

// Get all sections and nav links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// When user scrolls
window.onscroll = () => {
    let top = window.scrollY;

    // Add sticky class to header after 100px scroll
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Highlight active section link
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });

    // Close the mobile menu when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
  function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("read-more-btn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
  }

  function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("read-more-btn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
    }
  }

