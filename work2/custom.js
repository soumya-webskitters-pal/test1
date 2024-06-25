"use strict";
//gsap.registerPlugin(ScrollTrigger);

jQuery.noConflict()(function ($) {
	let masterTimeline = gsap.timeline({
		repeat: -1, repeatDelay: 4,
	});

	setTimeout(() => {
		//animate onload
		anim_call();

		////active tab slide animation
		$(".sec_outer").each(function () {
			let _this = $(this);
			gsap.set(_this.find(".tab_slider"), {
				x: _this.find(".tab_list.active").position().left + "px",
				width: _this.find(".tab_list.active").children().width(),
			});
			_this.find(".tab_list a").on("click", function (e) {
				//prevent multiple click on same active element
				if ($(this).parent().hasClass("active")) {
					e.preventDefault();
				}
				else {
					//slide-bar animation
					_this.find(".tab_list").removeClass("active");
					$(this).parent().addClass("active");
					gsap.to(_this.find(".tab_slider"), 0.3, {
						x: $(this).parent().position().left + "px",
						width: $(this).parent().width(),
					});

					//call animation
					anim_call();
				}
			});
		});

		//animation chnage
		function anim_call() {
			if ($(".sec_outer [data-id='tab1']").hasClass("active")) {
				tab2_anim("stop");
				$(".sec_outer .anim_outer").removeClass("tab2").addClass("tab1");
				tab1_anim();
			}
			if ($(".sec_outer [data-id='tab2']").hasClass("active")) {
				$(".sec_outer .anim_outer").removeClass("tab1").addClass("tab2");
				tab2_anim();
			}
		}

		////follow the path -tab 2 animation
		function tab2_anim(control) {
			masterTimeline.pause();
			const timeDuration = 1.5, fadeOpacity = 0.4;
			let all_label = document.querySelectorAll(".lft_grid .flow_label");
			gsap.set(".shape_path", { opacity: 0 });
			gsap.to(".icon_lines,.lft_grid .flow_label", 0.2, { opacity: 0 });
			gsap.to(".center_grid,.label", 0.2, { opacity: 1 });
			gsap.to(".shape_path", 0.2, { delay: 0.4, opacity: fadeOpacity });

			for (let i = 0; i < all_label.length; i++) {
				let label = all_label[i];
				let svg = label.previousElementSibling;
				let path = svg.querySelector("[data_path]");
				// Length of path
				let pathLength = Math.floor(path.getTotalLength());

				function moveObj(prcnt) {
					prcnt = (prcnt * pathLength) / 100;
					// Get x and y values at a certain point in the line
					let pt = path.getPointAtLength(prcnt);
					pt.x = Math.round(pt.x);
					pt.y = Math.round(pt.y);
					label.style.webkitTransform = 'translate3d(' + pt.x + 'px,' + pt.y + 'px, 0)';
				}

				let delayTime = 4;
				if (i == 0) {
					delayTime = 0;
				}
				let tl = new gsap.timeline();
				tl.set(label, { opacity: 1, })
					.to(svg, 0.5, { opacity: 1 })
					.to(label, {
						duration: timeDuration,
						opacity: 1,
						onUpdate: function (self) {
							moveObj(tl.progress() * 100)
						},
						onComplete: function () {
							gsap.to(label, 0.3, { opacity: 0, })
							gsap.to(svg, 0.3, { opacity: fadeOpacity })
							setTimeout(function () {
								rt_anim();
							}, 500);
						}
					}, "-=0.5");
				masterTimeline.add(tl, "+=" + delayTime);
			};

			function rt_anim() {
				let all_labels = document.querySelectorAll(".rt_grid .flow_label");
				for (let j = 0; j < all_labels.length; j++) {
					let labels = all_labels[j];
					let svgs = labels.previousElementSibling;
					let paths = svgs.querySelector("[data_path]");
					// Length of path
					let pathLengths = Math.floor(paths.getTotalLength());

					function moveObjs(prcnts) {
						prcnts = (prcnts * pathLengths) / 100;
						// Get x and y values at a certain point in the line
						let pts = paths.getPointAtLength(prcnts);
						pts.x = Math.round(pts.x);
						pts.y = Math.round(pts.y);
						labels.style.webkitTransform = 'translate3d(' + pts.x + 'px,' + pts.y + 'px, 0)';
					}

					let tlrs = gsap.timeline();
					tlrs.set(labels, { opacity: 1, })
						.to(svgs, 0.5, { opacity: 1 })
						.to(labels, {
							duration: timeDuration,
							opacity: 1,
							onUpdate: function () {
								moveObjs(tlrs.progress() * 100)
							},
							onComplete: function () {
								gsap.to(labels, 0.3, { opacity: 0, });
								gsap.to(svgs, 0.5, { opacity: fadeOpacity })
							}
						}, "-=0.5");
				};
			}

			if (control == "stop") {
				masterTimeline.pause();
			}
			else {
				masterTimeline.pause();
				setTimeout(function () {
					masterTimeline.restart();
				}, 1000);
			}
		}

		///move icon - tab1 animation
		function tab1_anim() {
			gsap.set(".icon_lines", { delay: 0.2, opacity: 1 });
			gsap.to(".flow_label,.center_grid,.label, .shape_path, .icon_lines .st_line", 0.2, { opacity: 0 });
			gsap.to(".st_line", { delay: 0.3, opacity: 1, stagger: 0.05, });
		}
	}, 1000);
	/////end body ready
});