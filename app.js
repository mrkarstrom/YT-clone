const elements = document.querySelectorAll(".nav-link");

elements.forEach((element) => {
  element.addEventListener("click", () => {
    removeActiveClasses();
    element.classList.add("active");
  });
});

function removeActiveClasses() {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
}
