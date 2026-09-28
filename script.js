const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".right-section");
const navigationLinks = document.querySelectorAll(".nav-div a");

menuButton.addEventListener("click", () => {
  const menuIsOpen = navigation.classList.toggle("menu-open");

  menuButton.classList.toggle("button-open", menuIsOpen);
  menuButton.setAttribute("aria-expanded", menuIsOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("menu-open");
    menuButton.classList.remove("button-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  const clickedInsideNavigation = navigation.contains(event.target);
  const clickedMenuButton = menuButton.contains(event.target);

  if (!clickedInsideNavigation && !clickedMenuButton) {
    navigation.classList.remove("menu-open");
    menuButton.classList.remove("button-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    navigation.classList.remove("menu-open");
    menuButton.classList.remove("button-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
