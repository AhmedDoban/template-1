// scrol to the top
let ScrollToTop = document.querySelector(".scroll-to-top");
window.onscroll = function () {
  if (window.scrollY >= 150) {
    ScrollToTop.style.cssText = "display:block !important";
  } else {
    ScrollToTop.style.cssText = "display:none";
  }
};
ScrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
