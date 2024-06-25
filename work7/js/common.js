"use strict";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

const loader_tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
beforeLoad();
jQuery.noConflict()(function ($) {
  // document start
  ScrollTrigger.clearScrollMemory();
  window.history.scrollRestoration = "manual";

  function pageloader() {
    afterLoad();

    //tilt
    if ($("[data-tilt]").length) {
      $("[data-tilt] .team_card_reflection").each(function () {
        $(this).css({
          "--positionX": "100%",
          "--positionY": "100%",
        });
      });

      var tilt = $("[data-tilt]").tilt();
      tilt.on("change", function (e, transforms) {
        // console.log(e, transforms);
        $(e.currentTarget)
          .find(".team_card_reflection")
          .css({
            "--positionX": transforms.percentageX + "%",
            "--positionY": transforms.percentageY + "%",
          });
      });
      $("[data-tilt]").on("mouseleave", function () {
        $(this).find(".team_card_reflection").css({
          "--positionX": "100%",
          "--positionY": "100%",
        });
      });
    }
    //sticky scroll animation
    if ($(".sticky_box").length) {
      let container = $(".sticky_box");
      let item = container.find(".team_card_col");
      item.each(function (i, e) {
        let $this = $(e);
        let ev = $this.find(".team_card");
        gsap.set(ev, { opacity: 0 });
        ev.eq(ev.length - 1)
          .clone()
          .prependTo($this)
          .addClass("clone");
        ev.eq(0).clone().appendTo($this).addClass("clone");

        gsap.set(item.eq(i), {
          y:()=>
            i % 2
              ? -(item[i].clientHeight - container.get(0).clientHeight) +
                ev[0].clientHeight
              : -ev[0].clientHeight / 2,
        });
        /*--*/
        let sc_tl = gsap.timeline({
          pause: true,
          repeatRefresh: true,
          smoothChildTiming: true,
        });

        sc_tl
          .set(item.eq(i), {
            y:()=>
              i % 2
                ? -(item[i].clientHeight - container.get(0).clientHeight) +
                  ev[0].clientHeight
                : -ev[0].clientHeight / 2,
          })
          .to(item.eq(i), {
            y:()=>
              i % 2
                ? -ev[0].clientHeight / 2
                : -(item[i].clientHeight - container.get(0).clientHeight) +
                  ev[0].clientHeight,
            duration: 2,
            ease:"Power2.easeOut",
          });
        ScrollTrigger.create({
          trigger: container,
          start: "top center",
          end: "+=300%",
          animation: sc_tl,
          scrub: i % 2 ? 2 : 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          invalidateOnRefresh: true,
          // markers: true,
          onUpdate: () => {
            container.find(".team_card_inner").removeClass("active");
            container.find(".team_card").each(function (i, e) {
              if (ScrollTrigger.isInViewport(e, 0.3)) {
                gsap.to(e, {
                  autoAlpha: 1,
                  duration: 0.6,
                  ease: "Power2.easeIn",
                  onComplete: () => {
                    gsap.to(container.find(".team_card"), {
                      opacity: 1,
                      duration: 0.2,
                    });
                  },
                });
              }
              if (ScrollTrigger.isInViewport(e, 0.8)) {
                $(e).find(".team_card_inner").addClass("active");
              }
            });
          },
        });
      });

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=60%",
        pin: ".sticky_box",
      });
    }
  }

  //// page loader
  var allImages = document.querySelectorAll("img").length;
  $("body")
    .imagesLoaded({
      background: true,
    })
    .progress(function (instance, image) {
      if (image.isLoaded) {
        $(image.img).addClass("loaded");
        let countLoadedImages = document.querySelectorAll("img.loaded").length;
        let width = new Number(100 * (countLoadedImages / allImages)).toFixed(
          0
        );
        $(".ld_txt").html(width + "%");
      }
    })
    .always(pageloader);
  // document end
});

function beforeLoad() {
  gsap.set("#clip", {
    width: 0,
  });
  gsap.set(".small_logo path", {
    opacity: 1,
  });
  gsap.set(".dot", {
    opacity: 1,
    xPercent: 0,
    yPercent: -50,
    top: "50%",
    left: 0,
    scale: 0.3,
    transformOrigin: "center bottom",
    background: "#808080",
  });
  loader_tl
    .set(".dot", {
      xPercent: 0,
      left: 0,
      scale: 0.3,
      background: "#808080",
    })
    .to(".dot", {
      xPercent: 0,
      left: "50%",
      scale: 2,
      background: "#000",
      duration: 1.5,
      ease: "Power2.easeIn",
    })
    .to(
      ".dot",
      {
        xPercent: -100,
        left: "100%",
        scale: 0.3,
        duration: 1.5,
        ease: "Power2.easeOut",
      },
      "-=0.15"
    )
    .to(
      "#clip",
      {
        width: 347,
        duration: 0.3,
        ease: "Power2.easeIn",
      },
      "-=1.5"
    )
    .to(".dot", {
      xPercent: 0,
      left: "50%",
      scale: 2,
      background: "#000",
      duration: 1.5,
      ease: "Power2.easeIn",
    })
    .to(
      ".dot",
      {
        xPercent: 0,
        left: 0,
        scale: 0.3,
        background: "#808080",
        duration: 1.5,
        ease: "Power2.easeOut",
      },
      "-=0.15"
    )
    .to(
      "#clip",
      {
        width: 0,
        duration: 0.3,
        ease: "Power2.easeOut",
      },
      "-=1.5"
    );
}
function afterLoad() {
  loader_tl.repeat(1);
  loader_tl.kill();
  gsap.to(".ld_txt", {
    opacity: 0,
    duration: 0.3,
  });
  gsap
    .timeline()
    .to(".dot", {
      xPercent: 0,
      left: "50%",
      scale: 2,
      background: "#000",
      duration: 1.5,
      ease: "Power2.easeIn",
    })
    .to(
      ".dot",
      {
        xPercent: -100,
        left: "100%",
        scale: 0.3,
        duration: 1.5,
        ease: "Power2.easeOut",
      },
      "-=0.15"
    )
    .to(
      "#clip",
      {
        width: 347,
        duration: 0.3,
        ease: "Power2.easeIn",
      },
      "-=1.5"
    )
    .to(
      ".dot",
      {
        opacity: 0,
        duration: 0.2,
      },
      "-=0.25"
    )
    .to(
      ".page_loader",
      {
        xPercent: 110,
        duration: 1.5,
        ease: "Power2.easeIn",
      },
      "-=1.5"
    )
    .to(
      ".page_loader",
      {
        opacity: 0,
        ease: "linear",
      },
      "-=1.5"
    );
}
