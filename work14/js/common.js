"use strict";
jQuery(document).ready(function ($) {
  var item = $(".each_Sec"),
    video_sl = $(".all_video video"),
    image_sl = $(".all_imgs figure");
  var Tl = gsap.timeline();

  gsap.set([image_sl, video_sl], { opacity: 0 });

  gsap.set(video_sl.eq(0), { opacity: 1 });
  gsap.set(image_sl.eq(0), { scale: 0 });

  Tl.to(image_sl[0], {
    scale: 1,
    opacity: 1,
  });

  item.each(function (i, e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top center",
      end: "+=100%",
      //   markers: true,
      onEnter: () => {
        video_sl.each(function (c, v) {
          v.play() ? v.pause() : null;
          v.currentTime = 0;
        });
        video_sl[i].play();
      },
      onEnterBack: () => {
        video_sl.each(function (c, v) {
          v.play() ? v.pause() : null;
          v.currentTime = 0;
        });
        video_sl[i].play();
      },
    });

    Tl.to([image_sl.eq(i), video_sl.eq(i)], {
      opacity: 1,
    }).to(
      [image_sl.eq(i - 1), video_sl.eq(i - 1)],
      {
        opacity: 0,
      },
      "<"
    );
  });
  Tl.pause();

  //scroll anim
  ScrollTrigger.create({
    trigger: ".fix_sec",
    start: "top bottom",
    end: "bottom bottom",
    animation: Tl,
    scrub: 1.2,
    // markers: true,
  });

  //pin
  ScrollTrigger.create({
    trigger: ".fix_sec",
    pin: ".all_video",
    start: "top top",
    end: `+=${(item.length - 1) * 100}%`,
    // markers: true,
  });
  ScrollTrigger.create({
    trigger: ".fix_sec",
    pin: ".all_imgs",
    start: "top top",
    end: `+=${(item.length - 1) * 100}%`,
    // markers: true,
  });

  var waveTl = gsap.timeline({ repeat: -1 });
  gsap.set(".bg_anim path", { opacity: 0 });
  waveTl
    .to(".bg_anim path", {
      opacity: 1,
      stagger: { each: 0.08, from: "end" },
    })
    .to(
      ".bg_anim path",
      {
        opacity: 0,
        stagger: { each: 0.1, from: "end" },
      },
      "<"
    );

  var tl2 = gsap.timeline();
  gsap.set(".sticky_box", { scale: 0.7 });
  tl2.to(".sticky_box", { scale: 1, yPercent: 100 }).pause();
  ScrollTrigger.create({
    trigger: ".after_fix",
    start: "top bottom",
    end: "+=100%",
    animation: tl2,
    scrub: 1.2,
    // markers: true,
    onUpdate: (self) => {
      if (self.progress >= 0.95) {
        $(".sticky_box").addClass("nxt_sec");
      } else {
        $(".sticky_box").removeClass("nxt_sec");
      }
    },
  });

  ScrollTrigger.create({
    trigger: ".box",
    start: "top 20%",
    end: "+=1%",
    onUpdate: (self) => {
      if (self.progress >= 0.95) {
        $(".bg_anim").addClass("anim");
        $(".fig_points").addClass("anim");
      } else {
        $(".bg_anim").removeClass("anim");
        $(".fig_points").removeClass("anim");
      }
    },
    // markers: true,
  });
});
