;(function(){
/////////// menu accordion

let menuItemLink = document.querySelectorAll(".menu__block"),
  menuItemLinkLength = menuItemLink.length;
let menuItem = document.querySelectorAll(".menu__item"),
  menuItemLength = menuItem.length;
let menuItemClose = document.querySelectorAll(".menu__accordion-close"),
  menuItemCloseLength = menuItemClose.length;

function menuActiveDelete() {
  for (let i = 0; i < menuItemLength; ++i) {
    menuItem[i].classList.remove("menu__item--active");
  }
}

for (let i = 0; i < menuItemLinkLength; i++) {
  menuItemLink[i].addEventListener("click", function() {
    if (menuItemLink[i].parentNode.classList.contains("menu__item--active")) {
      menuItemLink[i].parentNode.classList.remove("menu__item--active");
    } else {
      menuActiveDelete();
      menuItemLink[i].parentNode.classList.add("menu__item--active");
    }
  });
}

for (let i = 0; i < menuItemCloseLength; i++) {
  menuItemClose[i].addEventListener("click", function() {
    menuActiveDelete();
  });
}
})()