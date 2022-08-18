// scrol to the top
let ScrollToTop = document.querySelector(".scroll-to-top");
window.onscroll = function () {
  if (window.scrollY < 150) {
    ScrollToTop.style.cssText = "display:none;opacity:0.2";
  }
  if (window.scrollY >= 150) {
    ScrollToTop.style.cssText = "display:block;opacity:0.8";
  } else {
    ScrollToTop.style.cssText = "display:none;opacity:0";
  }
};
ScrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
