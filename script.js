let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scroll arriba → mostrar nav
    document.querySelector("header").classList.remove("hidden");
  } else {
    // Scroll abajo → ocultar nav
    document.querySelector("header").classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
});
