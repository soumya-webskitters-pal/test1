"use strict";
//gsap.registerPlugin(ScrollTrigger);

jQuery.noConflict()(function ($) {
	let timelines = gsap.timeline({ paused: true }),
		prevTab,
		tick = false;
	const canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		frameCount = 140,
		images = [],
		airpods = {
			frame: 0
		};
	const currentFrame = index => (
		`images/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
	);
	for (let _frm = 0; _frm < frameCount; _frm++) {
		const img = new Image();
		img.src = currentFrame(_frm);
		images.push(img);
		if (_frm <= 1) {
			canvas.width = images[0].naturalWidth;
			canvas.height = images[0].naturalHeight;
		}
	}
	timelines.to(airpods, {
		duration: 27,
		frame: frameCount - 1,
		snap: "frame",
		onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
	});
	//manually set timeStamp
	timelines.addLabel("Label1", 0).addPause();
	timelines.addLabel("Label2", 2.5).addPause();
	timelines.addLabel("Label3", 3.5).addPause();
	timelines.addLabel("Label4", 6).addPause();
	timelines.addLabel("Label5", 8).addPause();
	timelines.addLabel("Label6", 10.5).addPause();
	timelines.addLabel("Label7", 13).addPause();
	timelines.addLabel("Label8", 15).addPause();
	timelines.addLabel("Label9", 20).addPause();

	//render fist time
	images[0].onload = render;
	function render() {
		console.log("image loaded");
		tick = true;
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(images[airpods.frame], 0, 0,);
	}
	const cstInterval = setInterval(animTimer, 100);
	function animTimer() {
		if (tick) {
			anim_call();
		}
	}
	function anim_call() {
		clearInterval(cstInterval);
		setTimeout(function () {
			//show canvas
			gsap.to(canvas, 0.5, { opacity: 1, });

			////active tab slide animation
			gsap.set("#tab_slider", {
				x: $("#anim_tabset .anim_tab_list.active").position().left + "px",
				width: $("#anim_tabset .anim_tab_list.active").width(),
			});
			prevTab = $("#anim_tabset .anim_tab_list.active").attr("data-tab");

			$("#anim_tabset .anim_tab_list a").on("click", function (e) {
				//prevent multiple click on same active element
				if ($(this).parent().hasClass("active")) {
					e.preventDefault();
				}
				else {
					//slide-bar animation
					$("#anim_tabset .anim_tab_list").removeClass("active");
					$(this).parent().addClass("active");
					gsap.to("#tab_slider", 0.3, {
						x: $(this).parent().position().left + "px",
						width: $(this).parent().width(),
					});

					//call animation
					let currentTab = $(this).parent().attr("data-tab");
					timelines.tweenFromTo("Label" + prevTab, "Label" + currentTab, { duration: 1, });
					prevTab = currentTab;
				}
			});
		}, 500);
	}
	/////end body ready
});