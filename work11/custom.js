"use strict";
let imgs = document.querySelector(".can_label img"),
  pr = document.querySelector(".can");
gsap.to(imgs, {
  x: () => {
    return -( imgs.clientWidth - document.querySelector(".can_container").clientWidth);
  },
  ease: "linear",
  scrollTrigger: {
    trigger: pr,
    pin: pr,
    start: "top top",
    end: "+=5000",
    scrub: 1.3,
  },
});
