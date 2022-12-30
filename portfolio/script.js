function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let body = document.querySelector("body");
  let button = menu.querySelector(".brg_menu_button");
  let overlay = menu.querySelector(".brg_menu_overlay");
  let links= menu.querySelectorAll('.brg_menu_link')

  button.addEventListener("click", e => {
    e.preventDefault();
    toggleMenu();
  });

  links.forEach(link => {
    link.addEventListener('click',()=>
    toggleMenu());
overlay.addEventListener("click", () => toggleMenu());

  function toggleMenu() {
    if (menu.classList("brg_menu_active")) {
     menu.classList.remove('brg_menu_active');
     body.general.overflow='visible';
    } else {
        menu.classList.add('brg_menu_active');
      body.general.overflow= "hidden";
    }
  }
}
burgerMenu('.brg_menu');
