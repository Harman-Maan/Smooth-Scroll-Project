// Set Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Close Links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const scrollLink = document.querySelectorAll(".scroll-link");

navToggle.addEventListener("click", () => {
  //   linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = linksHeight + "px";
  } else {
    linksContainer.style.height = 0;
  }
});

scrollLink.forEach((link) => {
  link.addEventListener("click", () => {
    linksContainer.style.height = 0;
  });
});

// Fixed Scrollbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight * 2) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 1000) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
