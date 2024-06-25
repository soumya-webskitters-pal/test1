"use strict";
jQuery.noConflict()(function ($) {
  let content = $('.slide-right'), pinup = $(".sticky_Sec"), side_nav = $(".sec_nav");
  let $headline = content.children();
  let headlines = gsap.utils.toArray($headline);

  let totalDuration = 2000,
    singleDuration = totalDuration / headlines.length;

  ScrollTrigger.create({
    trigger: pinup,
    start: "top top",
    end: "+=" + totalDuration,
    pin: true,
    scrub: true,
  });

  headlines.forEach((elem, i) => {
    ScrollTrigger.create({
      trigger: content,
      start: "top -=" + (singleDuration * i),
      end: "+=" + singleDuration,
      toggleActions: "play reverse play reverse",
      onEnter: function () {
        $headline.removeClass("active");
        $(elem).addClass("active");

        side_nav.find("li").removeClass("active");
        side_nav.find("li:eq(" + i + ")").addClass("active");
      },
      onEnterBack: function () {
        $headline.removeClass("active");
        $(elem).addClass("active");

        side_nav.find("li").removeClass("active");
        side_nav.find("li:eq(" + i + ")").addClass("active");
      },
    });
  });
});
window.addEventListener('load', function (event) {
  ScrollTrigger.refresh();
  window.scroll(0, 0);
});