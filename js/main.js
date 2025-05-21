const mainMenuLinks = document.querySelectorAll(".main-menu__item");
const currentPage = window.location.pathname.split("/").pop();

if (mainMenuLinks.length) {
  mainMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainMenuLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });

    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

const mainMenuBox = document.getElementById("main-menu");

if (mainMenuBox) {
  const mainMenuBoxOffset = mainMenuBox.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= mainMenuBoxOffset) {
      mainMenuBox.classList.add("fixed");
    } else {
      mainMenuBox.classList.remove("fixed");
    }
  });
}
