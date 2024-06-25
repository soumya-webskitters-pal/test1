"use strict";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

jQuery.noConflict()(function ($) {
  // document start
  ScrollTrigger.clearScrollMemory();
  window.history.scrollRestoration = "manual";

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
    let item = container.find(".team_card_col"),
      ioffset = 15;

    let sc_tl = gsap.timeline({
      pause: true,
      repeatRefresh: true,
      smoothChildTiming: true,
    });
    
    
    
    
    
    item.each(function (i, e) {
      let $this = $(e);
      let ev = $this.find(".team_card");
      gsap.set(ev, { opacity: 0 });
      gsap.set(item.eq(i), {
        yPercent: () => (i % 2 ? ioffset : -ioffset),
        marginTop:()=> (i%2? null: 0),
      });
      if(i>0){
        sc_tl
        .to(item.eq(i), {
          yPercent: 0,
          duration: 2,
          ease: "Power2.easeOut",
        },"-=2");
      }
      else{
        sc_tl
        .to(item.eq(i), {
          yPercent: 0,
          duration: 2,
          ease: "Power2.easeOut",
        });
      }
    });
    ScrollTrigger.create({
      trigger: container,
      start: "top center",
      animation: sc_tl,
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
  }

  // document end
});
