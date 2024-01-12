const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  // Toggling the 'change' class on the 'navbar' element
  navbar.classList.toggle("change");

  // Toggling the 'change' class on the 'menu' element
  menu.classList.toggle("change");
});
