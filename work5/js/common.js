// jQuery(document).ready(function ($) {
///loop scroll
const lenis = new Lenis({
  smooth: true,
  infinite: true,
  lerp: 0,
  smoothWheel: true,
  smoothTouch: true,
  syncTouch: true,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

imagesLoaded(
  document.querySelectorAll(".section"),
  { background: true },
  () => {
    document.body.classList.remove("loading");

    requestAnimationFrame(raf);

    const refresh = () => {
      window.history.scrollRestoration = "manual";
    };
    refresh();
    window.addEventListener("resize", refresh);

    $();

    //show/hide section
    if ($(".section").length) {
      ScrollOut({
        targets: ".section",
        threshold: 0.5,
        onShown: function (el) {
          el.classList.add("active");
        },
        onHidden: function (el) {
          el.classList.remove("active");
        },
      });
    }

    if ($("#intro").length) {
      $(document).mousemove(function (getCurrentPos) {
        var xCord = getCurrentPos.clientX;
        var xPercent = (xCord / window.innerWidth) * 100;
        gsap.to(".lft_sec", {
          duration: 0.3,
          right: `${xPercent}%`,
        });
      });
      $(document).mouseleave(function (getCurrentPos) {
        gsap.to(".lft_sec", {
          duration: 0.4,
          right: "50%",
        });
      });
    }
  }
);
// });
