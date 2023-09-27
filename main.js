const toggleNavBarBtn = document.getElementById("toggle-navbar-btn");
const navBarModal = document.getElementById("responsive-nav-bar");
const closeNavBarBtn = document.getElementById("close-nav-bar-btn");

const toggleNavBar = () => {
  navBarModal.classList.toggle("hidden");
  document.body.style.overflow = document.body.style.overflow.length ? "" : "hidden";
}

const responsiveAnchors = navBarModal.getElementsByTagName("a");

for (let i = 0; i < responsiveAnchors.length; ++i) {
  responsiveAnchors[i].addEventListener("click", toggleNavBar)
}

toggleNavBarBtn.addEventListener("click", toggleNavBar);
closeNavBarBtn.addEventListener("click", toggleNavBar);