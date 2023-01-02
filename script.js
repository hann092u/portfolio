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
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
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
