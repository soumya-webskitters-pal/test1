gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

$(".sec").each(function (index) {
  gsap.set($(this), {
    yPercent: index * 100,
  });
  gsap.set($(this).find(".sec_hd"), {
    opacity: 0,
    yPercent: 100,
  });
  gsap.set($(this).find(".sec_btm_cont"), {
    opacity: 0,
  });
  if ($(".watchFace_row").children()) {
    gsap.set($(".watchFace_row").children(), {
      opacity: 0,
    });
  }
});
if ($(".watch_main").length) {
  gsap.set($(".watch_main>img:first-child"), {
    opacity: 0,
    xPercent: 100,
  });
  gsap.set($(".watch_main>img:last-child"), {
    opacity: 0,
    xPercent: -100,
  });
}

let tl = gsap.timeline();

tl.to($(".watch_main>img:first-child"), {
  duration: 2,
  opacity: 1,
  xPercent: 0,
  x: 0,
})
  .to(
    $(".watch_main>img:last-child"),
    {
      duration: 2,
      opacity: 1,
      xPercent: 0,
      x: 0,
    },
    "-=2"
  )
  .to($(".sec:eq(0)"), {
    duration: 0.1,
    yPercent: 0,
    opacity: 1,
  })
  .to(
    [$(".sec:eq(0)").find(".sec_hd"), $(".sec:eq(0)").find(".sec_btm_cont")],
    {
      duration: 0.5,
      yPercent: 0,
      opacity: 1,
      stagger: 0.2,
    }
  )
  .to($(".sec:eq(0)").find(".sec_hd"), {
    delay: 1,
    duration: 0.5,
    yPercent: -100,
    opacity: 0,
  })
  .to(
    $(".sec:eq(0)").find(".sec_btm_cont"),
    {
      duration: 0.5,
      opacity: 0,
    },
    "-=0.5"
  )
  .to(
    $(".watch_main>img:first-child"),
    {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      x: 0,
    },
    "-=0.5"
  )
  .to(
    $(".watch_main>img:last-child"),
    {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      x: 0,
    },
    "-=0.5"
  )
  .to($(".watch_main>img.main_watch"), {
    duration: 1.5,
    scale: 1.5,
    yPercent: 35,
  })
  .to(
    $(".sec:eq(0)"),
    {
      duration: 0.5,
      yPercent: -100,
      opacity: 0,
    },
    "-=1.5"
  )
  .to(
    $(".sec:eq(1)"),
    {
      duration: 0.1,
      yPercent: 0,
      opacity: 1,
    },
    "-=1.5"
  )
  .to(
    $(".watchFace_row").children(),
    {
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: {
        amount: 0.1,
        from: "random",
      },
    },
    "-=1.5"
  )
  .to(
    [$(".sec:eq(1)").find(".sec_hd"), $(".sec:eq(1)").find(".sec_btm_cont")],
    {
      duration: 0.5,
      yPercent: 0,
      opacity: 1,
      stagger: 0.5,
    }
  )
  .to($(".sec:eq(1)").find(".sec_hd"), {
    delay: 1,
    duration: 0.5,
    yPercent: -100,
    opacity: 0,
  })
  .to(
    $(".sec:eq(1)").find(".sec_btm_cont"),
    {
      duration: 0.5,
      opacity: 0,
    },
    "-=0.5"
  )
  .to(
    $(".watchFace_row").children(),
    {
      duration: 2,
      opacity: 0,
      yPercent: 200,
      stagger: {
        amount: 0.3,
        from: "random",
      },
    },
    "-=0.5"
  )
  .to(
    $("img.main_watch"),
    {
      duration: 2,
      scale: 2,
      yPercent: -100,
    },
    "-=1.5"
  )
  .to($(".sec:eq(1)"), {
    delay: 1,
    duration: 0.5,
    yPercent: -100,
    opacity: 0,
  })
  .to(
    $(".sec:eq(2)"),
    {
      duration: 0.1,
      yPercent: 0,
      opacity: 1,
    },
    "-=0.5"
  )
  .to(
    $(".sec:eq(2)").find(".sec_middle"),
    {
      duration: 1,
      y: 0,
      opacity: 1,
    },
    "-=0.5"
  )
  .to($("img.main_watch"), {
    delay: 1,
    duration: 1,
    yPercent: -300,
  })
  .to(
    $(".sec:eq(2)").find(".watch_box"),
    {
      duration: 1,
      y: 0,
    },
    "-=0.5"
  )
  .to(
    [$(".sec:eq(2)").find(".sec_hd"), $(".sec:eq(2)").find(".sec_btm_cont")],
    {
      duration: 0.5,
      yPercent: 0,
      opacity: 1,
      stagger: 0.2,
    }
  )
  .to($(".sec:eq(2)"), {
    duration: 3,
    opacity: 1,
  });

$(".sec").each(function (index) {
  let _this = $(this);
  ScrollTrigger.create({
    trigger: _this,
    scrub: true,
    start: "top center",
    end: "+=100vh",
    // markers: true,
  });
});
ScrollTrigger.create({
  trigger: ".section",
  pin: true,
  scrub: true,
  animation: tl,
  start: "top top",
  end: "+=400%",
  // markers: true,
});
