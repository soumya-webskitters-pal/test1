"use strict";

const loader_tl = gsap.timeline({
  defaults: {
    duration: 0.7,
  },
});

jQuery.noConflict()(function ($) {
  // document start
  window.history.scrollRestoration = "manual";

  beforeLoad();
  function beforeLoad() {
    let pageLoader = document.querySelector(".page_loader");
    let svg = pageLoader.querySelector(".small_logo");
    let dot = svg.querySelector(".dot"),
      clip = svg.querySelector("#clip");
    gsap.set(clip, {
      attr: {
        r: 55,
        cx: -55,
      },
    });
    gsap.set(svg.querySelector(".small_logo svg"), {
      scaleX: 0.8,
      xPercent: -20,
    });
    gsap.set(svg.querySelectorAll("path"), {
      opacity: 1,
    });
    gsap.set(dot, {
      xPercent: -100,
      left: 0,
      background: "#808080",
      opacity: 1,
      height: 80,
      width: 80,
    });
    loader_tl
      .set(dot, {
        xPercent: -100,
        left: 0,
        width: 80,
        background: "#808080",
      })
      ///
      .to(dot, {
        xPercent: 20,
        left: "100%",
        background: "#000",
        duration: 1,
      })
      .to(
        dot,
        {
          width: 160,
        },
        "-=0.85"
      )
      .to(
        dot,
        {
          width: 80,
        },
        "-=0.25"
      )
      ///
      .to(dot, {
        xPercent: -100,
        left: 0,
        background: "#808080",
        duration: 1,
      })
      .to(
        dot,
        {
          width: 160,
        },
        "-=0.85"
      )
      .to(
        dot,
        {
          width: 80,
        },
        "-=0.25"
      )
      ///
      .to(dot, {
        xPercent: 20,
        left: "100%",
        background: "#000",
        duration: 1,
      })
      .to(
        dot,
        {
          width: 160,
        },
        "-=0.85"
      )
      .to(
        dot,
        {
          width: 80,
        },
        "-=0.45"
      )
      .to(
        dot,
        {
          xPercent: 30,
          scale: 0.3,
        },
        "-=0.35"
      )
      .to(
        clip,
        {
          attr: {
            r: 200,
            cx: 170,
          },
          duration: 0.95,
        },
        "-=1.6"
      )
      .to(
        svg.querySelector("svg"),
        {
          scaleX: 1,
          xPercent: 0,
        },
        "-=1.5"
      )
      ///
      .to(dot, {
        delay: 0.85,
        scale: 1,
        duration: 0.3,
      })
      .to(
        dot,
        {
          xPercent: -100,
          left: 0,
          background: "#808080",
        },
        "-=0.25"
      )
      .to(
        clip,
        {
          attr: {
            r: 55,
            cx: -55,
          },
          duration: 1,
        },
        "-=0.85"
      )
      ///
      .to(dot, {
        xPercent: 100,
        left: "100%",
        background: "#000",
        duration: 1,
      })
      .to(
        dot,
        {
          opacity: 0,
          duration: 0.3,
        },
        "-=0.25"
      )
      ///
      .pause();

    gsap
      .timeline()
      .to(loader_tl, {
        progress: 1,
        duration: 3,
        ease: "none",
      })
      .to(
        pageLoader,
        {
          xPercent: 110,
          duration: 1.3,
        },
        "-=0.05"
      )
      .to(
        pageLoader,
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=0.45"
      );
  }
});
