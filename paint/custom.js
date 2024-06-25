window.addEventListener("load", () => {
  const elem = document.querySelector(".paint");
  if (elem != undefined || elem != null) {
    elem.style.position = "relative";
    const canvas = document.createElement("canvas");
    elem.appendChild(canvas);
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    const options = {
      w: window.innerWidth,
      h: window.innerHeight,
      x: 0,
      y: 0,
      ui: {
        offset: {
          x: 15,
          y: 25,
          w: 200,
          h: 120,
        },
        text: {
          info1: { title: "Pick a Color", w: 0, h: 14, family: "Georgia" },
          info2: { title: "Brush Info", w: 0, h: 14, family: "Georgia" },
          info3: { title: "Tips!", w: 0, h: 14, family: "Georgia" },
        },
        cursor: 10,
      },
      eraser: {
        pick: false,
      },
      colorPicker: {
        pick: false,
        color: "#000000",
        bgColor: "#ffffff",
        brushType: "round",
        brushSize: { current: 1, max: 50, min: 1 },
      },
      drawBox: { isDrawn: "false", coord: {} },
      tips: {
        painting:
          "≫ Painting: Click Left button of the mouse and drag to paint",
        colorchange:
          "≫ Changing Color: Move mouse and hover to color palette (pick a color) and and click to select.",
        brushsize:
          "≫ Chnage Brush Size: Mouse wheel up to increase brush size and wheel down to decrease size.",
        eraser:
          "≫ Use eraser: Right click to enable eraser. To disable erasor, please right click again. You can increase or decrease erasor size by scrolling up/down.",
      },
    };

    function setCanvasSize() {
      (options.w = window.innerWidth),
        (options.h = window.innerHeight),
        (canvas.width = options.w),
        (canvas.height = options.h);
    }

    //restrict cursor
    document.addEventListener("mousemove", calcPos);
    function calcPos(event) {
      let pos = {
        x: event.clientX - canvas.offsetLeft,
        y: event.clientY - canvas.offsetTop,
      };
      options.x = pos.x;
      options.y = pos.y;

      //is pointer inside drawing area
      options.x < options.drawBox.w + options.drawBox.x &&
      options.x > options.drawBox.x &&
      options.y < options.drawBox.h + options.drawBox.y &&
      options.y > options.drawBox.y
        ? (options.drawBox.isDrawn = true)
        : (options.drawBox.isDrawn = false);

      //is pointer inside color-picker area
      options.x > options.colorPicker.x &&
      options.x < options.colorPicker.x + options.colorPicker.w &&
      options.y > options.colorPicker.y &&
      options.y < options.colorPicker.y + options.colorPicker.h
        ? (options.colorPicker.pick = true)
        : (options.colorPicker.pick = false);

      showPickedColor();
      drawPointer();
      tips();
    }

    //paint
    document.addEventListener("mousedown", start);
    document.addEventListener("mouseup", stop);
    function start(event) {
      pickColor(event);
      document.addEventListener("mousemove", draw);
      reposition(event);
    }
    function stop() {
      document.removeEventListener("mousemove", draw);
    }
    function reposition(event) {
      options.drawBox.coord.x = options.drawBox.isDrawn
        ? event.clientX - canvas.offsetLeft
        : options.drawBox.x;
      options.drawBox.coord.y = options.drawBox.isDrawn
        ? event.clientY - canvas.offsetTop
        : options.drawBox.y;
    }
    //mouse draw - paint
    function draw(event) {
      if (options.drawBox.isDrawn) {
        ctx.beginPath();
        if (options.eraser.pick) {
          ctx.strokeStyle = options.colorPicker.bgColor;
        } else {
          ctx.strokeStyle = options.colorPicker.color;
        }
        ctx.lineWidth = options.colorPicker.brushSize.current;
        ctx.lineCap = options.colorPicker.brushType;
        ctx.moveTo(options.drawBox.coord.x, options.drawBox.coord.y);
        reposition(event);
        ctx.lineTo(options.drawBox.coord.x, options.drawBox.coord.y);
        ctx.stroke();
        ctx.closePath();
      }
    }

    //create sidebar
    function create_tool() {
      ctx.beginPath();

      // outline box
      ctx.lineWidth = "1";
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.roundRect(
        options.ui.offset.x,
        options.ui.offset.y,
        options.ui.offset.w,
        options.ui.offset.h,
        5
      );
      ctx.fill();
      ctx.stroke();

      // title
      ctx.font = options.ui.text.info1.h + "px " + options.ui.text.info1.family;
      ctx.textAlign = "start";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000";
      options.ui.text.info1.w = ctx.measureText(
        options.ui.text.info1.title
      ).width;
      ctx.lineWidth = "1";
      ctx.fillStyle = "none";
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.roundRect(
        options.ui.offset.x * 2 - 5,
        options.ui.offset.y - options.ui.text.info1.h,
        options.ui.text.info1.w + options.ui.offset.x,
        options.ui.offset.y,
        5
      );
      ctx.stroke();
      ctx.clearRect(
        options.ui.offset.x * 2 - 5 + 1,
        options.ui.offset.y - options.ui.text.info1.h - 1,
        options.ui.text.info1.w + options.ui.offset.x - 2,
        options.ui.offset.y
      );
      ctx.clearRect(
        options.ui.offset.x * 2 - 5 - 1,
        options.ui.offset.y - options.ui.text.info1.h - 1,
        options.ui.text.info1.w + options.ui.offset.x + 5,
        options.ui.offset.y - options.ui.text.info1.h + 3
      );
      ctx.fillStyle = "#000";
      ctx.fillText(
        options.ui.text.info1.title,
        options.ui.offset.x * 2,
        options.ui.offset.y
      );

      // Create color gradient
      options.colorPicker.x = options.ui.offset.x * 2 - 5;
      options.colorPicker.y =
        options.ui.offset.y + options.ui.text.info1.h + options.ui.offset.x - 5;
      options.colorPicker.w = options.ui.offset.w - options.ui.offset.x - 5;
      options.colorPicker.h =
        options.ui.offset.h - options.ui.offset.y - options.ui.offset.x + 5;
      var gradient = ctx.createLinearGradient(
        options.colorPicker.x - 5,
        0,
        options.ui.offset.w + 5,
        0
      );
      gradient.addColorStop(0, "rgb(255,0,0)");
      gradient.addColorStop(0.15, "rgb(255,0,255)");
      gradient.addColorStop(0.33, "rgb(0,0,255)");
      gradient.addColorStop(0.49, "rgb(0,255,255)");
      gradient.addColorStop(0.67, "rgb(0,255,0)");
      gradient.addColorStop(0.84, "rgb(255,255,0)");
      gradient.addColorStop(1, "rgb(255,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(
        options.colorPicker.x,
        options.colorPicker.y,
        options.colorPicker.w,
        options.colorPicker.h
      );

      // Create semi transparent gradient (white -> trans. -> black)
      gradient = ctx.createLinearGradient(
        0,
        options.colorPicker.y + 5,
        0,
        options.ui.offset.h + options.ui.offset.x - 5
      );
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.5, "rgba(255,255,255,0)");
      gradient.addColorStop(0.5, "rgba(0,0,0,0)");
      gradient.addColorStop(1, "rgba(0,0,0,1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(
        options.colorPicker.x,
        options.colorPicker.y,
        options.colorPicker.w,
        options.colorPicker.h
      );
      ctx.closePath();

      //artboard boundary
      options.drawBox.x =
        options.ui.offset.x + options.ui.offset.w + options.ui.offset.x;
      options.drawBox.y = options.ui.offset.y;
      options.drawBox.w =
        options.w -
        options.ui.offset.x -
        options.ui.offset.w -
        options.ui.offset.x * 2;
      options.drawBox.h = options.h - options.ui.offset.y * 2;

      //draw artboard
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.fillStyle = options.colorPicker.bgColor;
      ctx.strokeStyle = "#000000";
      ctx.roundRect(
        options.drawBox.x - 1,
        options.drawBox.y - 1,
        options.drawBox.w + 2,
        options.drawBox.h + 2,
        5
      );
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      //show picked color-hover
      showPickedColor(true);

      //brush info box
      brushinfo();
    }

    //pick color
    function showPickedColor(overwrite) {
      if ((!options.drawBox.isDrawn && options.colorPicker.pick) || overwrite) {
        let p = ctx.getImageData(options.x, options.y, 1, 1).data;
        if (!overwrite) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(" + p[0] + ", " + p[1] + ", " + p[2] + ", 1)";
          ctx.lineWidth = "5";
          ctx.strokeStyle = "rgba(255,255,255,0.5)";
          ctx.roundRect(
            options.ui.offset.x +
              options.ui.offset.w -
              options.ui.offset.x * 2 -
              12,
            options.ui.offset.y + 5,
            options.ui.offset.x - 2,
            options.ui.offset.x,
            3
          );
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
        ctx.beginPath();
        if (options.eraser.pick) {
          ctx.fillStyle = options.colorPicker.bgColor;
        } else {
          ctx.fillStyle = options.colorPicker.color;
        }
        ctx.lineWidth = "1";
        ctx.strokeStyle = "rgba(0,0,0,0.5)";
        ctx.roundRect(
          options.ui.offset.x +
            options.ui.offset.w -
            options.ui.offset.x * 2 +
            5,
          options.ui.offset.y + 5,
          options.ui.offset.x - 2,
          options.ui.offset.x,
          3
        );
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }
    }
    function pickColor() {
      if (!options.drawBox.isDrawn && options.colorPicker.pick) {
        let p = ctx.getImageData(options.x, options.y, 1, 1).data;
        options.colorPicker.color =
          "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        showPickedColor(true);
        drawPointer();
      }
    }
    function rgbToHex(r, g, b) {
      if (r > 255 || g > 255 || b > 255) throw "Invalid color component";
      return ((r << 16) | (g << 8) | b).toString(16);
    }

    //+- brush size
    window.addEventListener("wheel", setBrushSize);
    function setBrushSize(event) {
      brushinfo();
      drawPointer();
      if (event.deltaY < 0) {
        // console.log("scrolling up");
        options.colorPicker.brushSize.current <
        options.colorPicker.brushSize.max
          ? options.colorPicker.brushSize.current++
          : (options.colorPicker.brushSize.current =
              options.colorPicker.brushSize.max);
      } else if (event.deltaY > 0) {
        options.colorPicker.brushSize.current >
        options.colorPicker.brushSize.min
          ? options.colorPicker.brushSize.current--
          : (options.colorPicker.brushSize.current =
              options.colorPicker.brushSize.min);
      }
    }
    //reset brush size -eraser
    window.addEventListener("contextmenu", eraser);
    function eraser(ev) {
      !options.eraser.pick
        ? ((options.eraser.pick = true), showPickedColor(true))
        : ((options.eraser.pick = false), showPickedColor(true));
      // console.log(options.eraser.pick);
      brushinfo();
      ev.preventDefault();
    }
    //show brush info
    function brushinfo() {
      ctx.clearRect(
        options.ui.offset.x,
        options.ui.offset.y * 2 + options.ui.offset.h,
        options.ui.offset.w,
        options.ui.offset.h
      );

      ctx.beginPath();
      // outline box
      ctx.lineWidth = "1";
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.roundRect(
        options.ui.offset.x,
        options.ui.offset.y * 2 + options.ui.offset.h,
        options.ui.offset.w,
        options.ui.offset.h,
        5
      );
      ctx.fill();
      ctx.stroke();

      // title
      ctx.font = options.ui.text.info2.h + "px " + options.ui.text.info2.family;
      ctx.textAlign = "start";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000";
      options.ui.text.info2.w = ctx.measureText(
        options.ui.text.info2.title
      ).width;
      ctx.lineWidth = "1";
      ctx.fillStyle = "none";
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.roundRect(
        options.ui.offset.x + 10,
        options.ui.offset.y * 2 + options.ui.offset.h - options.ui.text.info2.h,
        options.ui.text.info2.w + options.ui.offset.x,
        options.ui.offset.y,
        5
      );
      ctx.stroke();
      ctx.clearRect(
        options.ui.offset.x + 10 + 1,
        options.ui.offset.y * 2 +
          options.ui.offset.h -
          options.ui.text.info2.h -
          1,
        options.ui.text.info2.w + options.ui.offset.x - 2,
        options.ui.offset.y
      );
      ctx.clearRect(
        options.ui.offset.x + 10 - 1,
        options.ui.offset.y * 2 +
          options.ui.offset.h -
          options.ui.text.info2.h -
          1,
        options.ui.text.info2.w + options.ui.offset.x + 5,
        options.ui.offset.y - options.ui.text.info2.h + 3
      );
      ctx.fillStyle = "#000";
      ctx.fillText(
        options.ui.text.info2.title,
        options.ui.offset.x + 15,
        options.ui.offset.y * 2 +
          options.ui.offset.h +
          options.ui.text.info2.h -
          options.ui.offset.y / 2
      );

      ctx.fillStyle = "#000";
      ctx.fillText(
        "Mode : " +
          (!options.eraser.pick
            ? "Paint" +
              (options.colorPicker.brushSize.current <
              options.colorPicker.brushSize.max / 2
                ? " (Pen)"
                : " (Brush)")
            : "Eraser"),
        options.ui.offset.x + 15,
        options.ui.offset.y * 3 +
          options.ui.offset.h +
          options.ui.text.info2.h -
          options.ui.offset.y / 2 +
          3
      );

      ctx.fillStyle = "#000";
      ctx.fillText(
        "Size : " + options.colorPicker.brushSize.current,
        options.ui.offset.x + 15,
        options.ui.offset.y * 3 +
          options.ui.offset.h +
          options.ui.text.info2.h -
          options.ui.offset.y / 2 +
          28
      );

      ctx.fillText(
        "Color (Hex code):",
        options.ui.offset.x + 15,
        options.ui.offset.y * 3 +
          options.ui.offset.h +
          options.ui.text.info2.h -
          options.ui.offset.y / 2 +
          55
      );
      ctx.fillText(
        !options.eraser.pick
          ? options.colorPicker.color
          : options.colorPicker.bgColor,
        options.ui.offset.x + 15,
        options.ui.offset.y * 3 +
          options.ui.offset.h +
          options.ui.text.info2.h -
          options.ui.offset.y / 2 +
          70
      );
      ctx.closePath();
    }

    //draw mouse Pointer
    function drawPointer() {
      elem.style.cursor = "none";
      let crs = document.querySelector(".canvas_cursor");
      if (crs != undefined || crs != null) {
        crs.classList.add("active");
        crs.style.color = options.eraser.pick
          ? options.colorPicker.bgColor
          : options.colorPicker.color;
        crs.style.setProperty(
          "--size",
          options.colorPicker.brushSize.current + "px"
        );
        let crs_img = crs.querySelector("img");
        if (options.eraser.pick) {
          crs_img.src = "eraser.png";
        } else {
          if (
            options.colorPicker.brushSize.current <
            options.colorPicker.brushSize.max / 2
          ) {
            crs_img.src = "point_brush.png";
          } else {
            crs_img.src = "big_brush.png";
          }
        }
        if (options.drawBox.isDrawn) {
          crs.style.transform = `translate(${options.x}px, ${options.y}px)`;
        } else {
          if (options.colorPicker.pick) {
            elem.style.cursor = "crosshair";
          } else {
            elem.style.cursor = "default";
          }
        }
      } else {
        let crs = document.createElement("span");
        crs.classList.add("canvas_cursor");
        let set_val =
          "display:block; width:30px; height: 30px; position:absolute; left:0; top:0; z-index:5;pointer-events:none;line-height:0;" +
          "color:" +
          (options.eraser.pick
            ? options.colorPicker.bgColor
            : options.colorPicker.color) +
          "; --size:" +
          options.colorPicker.brushSize.current +
          "px";
        crs.setAttribute("style", set_val);
        crs.style.transform = `translate(${window.innerWidth / 2}px, ${
          window.innerHeight / 2
        }px)`;
        elem.appendChild(crs);
        let crs_img = document.createElement("img");
        crs_img.src = "point_brush.png";
        crs_img.setAttribute("style", "height: 30px;width:30px;");
        crs.appendChild(crs_img);
      }
    }

    //show tips
    function tips() {
      let tls = {
        x: options.ui.offset.x,
        y: options.ui.offset.y * 3 + options.ui.offset.h * 2,
        w: options.ui.offset.w,
        h: options.ui.offset.h,
      };
      ctx.clearRect(tls.x, tls.y, tls.w, tls.h);
      ctx.beginPath();
      // outline box
      ctx.lineWidth = "1";
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.roundRect(tls.x, tls.y, tls.w, tls.h * 3 + options.ui.offset.x, 5);
      ctx.fill();
      ctx.stroke();

      // title
      ctx.font = options.ui.text.info3.h + "px " + options.ui.text.info3.family;
      ctx.textAlign = "start";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000";
      options.ui.text.info3.w = ctx.measureText(
        options.ui.text.info3.title
      ).width;
      ctx.lineWidth = "1";
      ctx.fillStyle = "none";
      ctx.strokeStyle = "rgba(0,0,0,1)";
      tls.x = tls.x + options.ui.offset.x - 5;
      tls.y = tls.y - options.ui.text.info3.h;
      ctx.roundRect(
        tls.x,
        tls.y,
        options.ui.text.info3.w + options.ui.offset.x,
        options.ui.offset.y,
        5
      );
      ctx.stroke();
      ctx.clearRect(
        tls.x + 1,
        tls.y - 1,
        options.ui.text.info3.w + options.ui.offset.x - 2,
        options.ui.offset.y
      );
      ctx.clearRect(
        tls.x - 1,
        tls.y - 1,
        options.ui.text.info3.w + options.ui.offset.x + 5,
        options.ui.offset.y - options.ui.text.info3.h + 3
      );
      ctx.fillStyle = "#000";
      tls.x = tls.x + 5;
      tls.y = tls.y + options.ui.text.info3.h * 2;
      ctx.fillText(
        options.ui.text.info3.title,
        tls.x,
        tls.y - options.ui.offset.y / 2
      );

      //print info texts
      tls.y = tls.y + options.ui.offset.y / 2 + 5;
      tls.w = options.ui.offset.w - options.ui.offset.x * 2;
      tls.h = options.ui.text.info3.h + 3;
      let nxtY = printAtWordWrap(
        ctx,
        options.tips.painting,
        tls.x,
        tls.y,
        tls.h,
        tls.w
      );

      tls.y = nxtY + options.ui.offset.y;
      nxtY = printAtWordWrap(
        ctx,
        options.tips.colorchange,
        tls.x,
        tls.y,
        tls.h,
        tls.w
      );

      tls.y = nxtY + options.ui.offset.y;
      nxtY = printAtWordWrap(
        ctx,
        options.tips.brushsize,
        tls.x,
        tls.y,
        tls.h,
        tls.w
      );

      tls.y = nxtY + options.ui.offset.y;
      nxtY = printAtWordWrap(
        ctx,
        options.tips.eraser,
        tls.x,
        tls.y,
        tls.h,
        tls.w
      );

      ctx.closePath();
    }
    function printAtWordWrap(ctx, text, x, y, lineHeight, fitWidth) {
      fitWidth = fitWidth || 0;

      if (fitWidth <= 0) {
        ctx.fillText(text, x, y);
        return;
      }
      let words = text.split(" "),
        currentLine = 0,
        idx = 1;
      let totY = y + lineHeight * currentLine;
      while (words.length > 0 && idx <= words.length) {
        var str = words.slice(0, idx).join(" ");
        var w = ctx.measureText(str).width;
        if (w > fitWidth) {
          if (idx == 1) {
            idx = 2;
          }
          totY = y + lineHeight * currentLine;
          ctx.fillText(words.slice(0, idx - 1).join(" "), x, totY);
          currentLine++;
          words = words.splice(idx - 1);
          idx = 1;
        } else {
          idx++;
        }
      }
      if (idx > 0) {
        totY = y + lineHeight * currentLine;
        ctx.fillText(words.join(" "), x, totY);
      }

      return totY;
    }

    //call functions
    setCanvasSize();
    create_tool(options);
    tips();
    drawPointer();

    ///end
  }
});
