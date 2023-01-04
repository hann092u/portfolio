/************* Burgermenu ************'*/
function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let body = document.querySelector("body");
  let button = menu.querySelector(".brg_menu_button");
  let overlay = menu.querySelector(".brg_menu_overlay");
  let links = menu.querySelectorAll(".brg_menu_link");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.forEach((link) => link.addEventListener("click", () => toggleMenu()));
  overlay.addEventListener("click", () => toggleMenu());

  function toggleMenu() {
    if (menu.classList.contains("brg_menu_active")) {
      menu.classList.remove("brg_menu_active");
      body.style.overflow = "visible";
    } else {
      menu.classList.add("brg_menu_active");
      body.style.overflow = "hidden";
    }
  }
}
burgerMenu(".brg_menu");

/******************* Slide-show ****************/
let slideIndex = 1;
let slideIndex2 = 1;
showSlides(slideIndex);
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides(n) {
  console.log("plusSlides");
  showSlides((slideIndex += n));
}
function plusSlides2(n) {
  console.log("plusSlides2");
  showSlides2((slideIndex2 += n));
}
// Thumbnail image controls
function currentSlide(n) {
  console.log("currentSlide");
  showSlides((slideIndex = n));
}
function currentSlide2(n) {
  console.log("currentSlide2");
  showSlides2((slideIndex2 = n));
}

function showSlides(n) {
  console.log("showSlides");
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides2(n) {
  console.log("showSlides2");
  let e;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides2.length;
  }
  for (e = 0; e < slides2.length; e++) {
    slides2[e].style.display = "none";
  }
  for (e = 0; e < dots2.length; e++) {
    dots2[e].className = dots2[e].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active";
}
