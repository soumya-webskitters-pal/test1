"use strict";
//section loader
function sec_loader() {
	gsap.to("#sec_loader", 0.3, { opacity: 1, });
	//animate first circle
	let sec_loader1 = gsap.timeline({ repeat: -1 });
	sec_loader1.set("#c1", { autoAlpha: .7 })
		.to("#c1", .5, { scale: .2, x: "+=5", transformOrigin: "50% 50%" })
		.to("#c1", .5, { scale: 1, x: "-=5", transformOrigin: "50% 50%" });
	//animate second circle
	let sec_loader2 = gsap.timeline({ repeat: -1 });
	sec_loader2.set("#c2", { autoAlpha: .7 })
		.to("#c2", .5, { scale: .2, x: "-=5", transformOrigin: "50% 50%" })
		.to("#c2", .5, { scale: 1, x: "+=5", transformOrigin: "50% 50%" })
}
sec_loader();

let timelines = gsap.timeline({ paused: true }),
	prevTab;
const canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	frameCount = 140,
	images = [],
	airpods = {
		frame: 0
	};
const currentFrame = index => (
	`images/anim/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
);
for (let _frm = 0; _frm < frameCount; _frm++) {
	const img = new Image();
	img.src = currentFrame(_frm);
	images.push(img);
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

function render() {
	if (airpods.frame <= 1) {
		canvas.width = images[0].naturalWidth;
		canvas.height = images[0].naturalHeight;
	}
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(images[airpods.frame], 0, 0,);
}

function resize_slide() {
	gsap.set("#tab_slider", {
		x: $("#anim_tabset .anim_tab_list.active").position().left + "px",
		width: $("#anim_tabset .anim_tab_list.active").width(),
	});
}

window.addEventListener("resize", resize_slide);

function anim_call() {
	setTimeout(function () {
		//show canvas
		gsap.to(canvas, 0.5, { opacity: 1, });

		////active tab slide animation
		gsap.set("#tab_slider", {
			x: $("#anim_tabset .anim_tab_list.active").position().left + "px",
			width: $("#anim_tabset .anim_tab_list.active").width(),
		});
		prevTab = $("#anim_tabset .anim_tab_list.active").attr("data-tab");
		$("#anim_title").html($("#anim_tabset .anim_tab_list.active").html() + " style");

		$("#anim_tabset .anim_tab_list a").on("click", function (e) {
			e.preventDefault();
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


				//change title
				$("#anim_title").html($(this).html() + " style");

				//call animation
				let currentTab = $(this).parent().attr("data-tab");
				timelines.tweenFromTo("Label" + prevTab, "Label" + currentTab, { duration: 1, });
				prevTab = currentTab;
			}
		});
	}, 500);
}

//call the function if images load successfully else show error.
let imgLoadCounter = 0;
for (let m = 0; m < images.length; m++) {
	images[m].addEventListener('load', function () {
		imgLoadCounter++;
		if (imgLoadCounter == frameCount) {
			console.log(imgLoadCounter + " images loaded successfully");
			gsap.to("#sec_loader", 0.5, { opacity: 0, });
			$("#sec_loader").removeClass("show");
			anim_call();
			render();
		}
	});
	images[m].addEventListener('error', function () {
		$("#sec_loader").addClass("show");
	});
}