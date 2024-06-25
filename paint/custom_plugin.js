/*---create plugin--*/
class myPaint {
  constructor(options) {
    // Default options
    this.options = {
      container: ".paint",
      w: window.innerWidth,
      h: window.innerHeight,
      x: 0,
      y: 0,
      ui: {
        color: "rgba(0,0,0,1)",
        strokeColor: "rgba(0,0,0,0.8)",
        bgColor: "rgba(255,255,255,0.5)",
        offset: {
          x: 15,
          y: 25,
          w: 200,
          h: 140,
        },
        text: {
          info1: { title: "Pick a Color", w: 0, h: 14, family: "Georgia" },
          info2: { title: "Adjustment", w: 0, h: 14, family: "Georgia" },
          info3: { title: "Brush Info", w: 0, h: 14, family: "Georgia" },
        },
        tips: {
          header: {
            title: "Tips!",
            w: 0,
            h: 14,
            family: "Georgia",
          },
          w: 200,
          painting:
            "≫ Painting: Click Left button of the mouse and drag to paint",
          colorchange:
            "≫ Changing Color: Move mouse and hover to color palette (pick a color) and and click to select.",
          brushsize:
            "≫ Change Brush Size: Mouse wheel up to increase brush size and wheel down to decrease size.",
          erasor:
            "≫ Use erasor: Right click to enable erasor. To disable erasor, please right click again. You can increase or decrease erasor size by scrolling up/down.",
          clearAll: "≫ Clear Canvas: Click 'clear' button to clear the canvas.",
          saveImage:
            "≫ Save as Image: Click to 'save as image' button to save your work as .jpg file",
        },
        cursor: 10,
        icons: {
          pen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAS9QTFRFAAAAxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIp9a075YM1yToqxjIpxjIp9a079a079a073nEz9a079a079a0733Iy9a079a079a079a079a079a079a079a079a079a079a079a079a079a079aw79a079a079a079a079a07JTE9KTdGKjlIMDpFx5E79a079a079a07JzNALDxNL0FUMEJWL0BTW1ZI9a07Iyw3KzlJMEFVMUJVKTZFKjhHL0BTMEJWL0BTMEJWMEJWMEJWMEJWMEJWMEJWMEJWaHfoVAAAAGV0Uk5TAAiTKJCaGbTuIjTX30oBMMP3cQYyvP++Ekvz2DndYQLRpgrcjTPI/8gWErT//w+w9kEGePf4fAND6fqUB0j5cAMUz5B9q03L6cL9824JLdT////4YwWW/92zyv2t8/lSg+r+nAQ3COpYAAAAxUlEQVR4nGNgwAoYmbCLM7OwYhVnY+fgxCbOxc3Di0WYj19AUEgYi4SIqJi4BBZxSSkxaWwWyMiKScnJY3GPgpiYohKmOL+ymJgKFgtU1dTFNDQxxbW0dXSlZDDF9fR1dAwMMcWNjE10TM3MMSUsLHWsrG0wxW3tdEzsHTDFHZ10TJ31MMUZXHR0XLXQBd3cPTy9vH180cX9/AMCg4JDjNDFQ8PCAwMDIzAMj4yKBooHxmBIxAaAxOPiMSQSEoHiSckp6OIANQEb7CBcB1YAAAAASUVORK5CYII=",

          brush:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAfhQTFRFAAAArlIl3GMi0mAklEkm3WMj/HEl3WIibTgiyFsi+3Ur/Hcuy1simEgh7Gok/oNB93AmvFUhxFgh/Xcu52ookEgmhkEh4mUi/H03zmg0rVAg+XMr/4pL7m0ooVEozVwh/oA8/IVFxl0mfD4j42ck/oxP42opjEMgkkUe+3w39n48vFcicEExyVwj/YI/1WEkiUUlb0Ew32go7HAunEkgv1cjzlwjtFMjnEcdyV4m+Ho2zF0kcEQ2UXFut3JD+HQs83Yz8XMv/YA+/YRDyVsjJZGiFr3YUq2vvZJr9YlP/41R/4lK5WopnFArVktDGqnAEcvrKNTvQdTqXre7r5Z074dO/ohJ6HExw10oqG0UlphHPrOzQsrcQtHmSdzzQdfuTsTPj5+K6IFF52gkuVUiilIb1IoH8KIG8KUQsJ48a7GbSMTUQ83gNNr0GdLwGLzXZYJ2rVQplFgX86QG+KoI/a4L/awD55oGxJojc7KPL8fdFsLgELnWK4SSxoIT/bIW/bAQ/a0I/asB76EF/awE+KcCzpITeKRtNI2QTVZS3pMJ/bIV/a4K/awG+akC/KsH/awF96cC+qkE/KoCrW4Sy4UO35YL/a0H/asD5ZkIeUszbkE0yYUP5JoJ9qcI/asC+qoIyYMOeUgtyoYQ4pgJ5pwM6JwIkVoe0YeTcQAAAKh0Uk5TACXKcxDR/6QClv//kzj3//9ZpP/xHBj3/6Zo///8N7b//7AQ6f/qJ0D//ncBi//OCwXV8z5beikfbfyhAjj///rt//9ip////////8kXF+r/////////1VNv////////////7xYIx////////////94NLf3///////////5xkv///////////98Q1P///////////2xayf//2woGZ731//5jA069zNcMqSWYNAAAAPRJREFUeJxjYEACjEzMDNgACysbOzZxDk4ubh5sErx8/AKC2CSEhPlFRLGIi4nzS0hi0yAlLSMrh01CXkFRCZu4soqqmjo2CQ1NLW0dbBK6evoG2MQNjYxNMARNzcwtLK2sbdDFbe3sHRydnF0wNLi6uXt4enn7+KKJ+/kHBAYFh4SGhUegSkRGRcfExsUnJCYlpyCLp6alZ2RmZefk5uUXFCJLFBWXlJaVV1RWVdfUophUV9/Q2NTc0trW3tGJItHV3dPb1z9h4qTJU1DtnjptQlnZ9JYZjTNnoTl39py58+ZP712wEMODDIsWL1k6YdlyVEEASYg7IJvwkawAAAAASUVORK5CYII=",
          erasor:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAYBQTFRFAAAAFYC3E4C2FIC2FYG2E4G2E4G2E4G2FIG2FYC1E4G2E4G2E4G2FoC2FYC1E4G2E4G2FYC2E4G2FIK2FYK3FYG2FIG2Hoe6GoW5E4G2FoG2FYK3HYa5G4W5FIG2FYC2FYG2H4e6GoS4E4G2//v6bLDRFIG2FIG2HIa5GYS4E4G27kY67k1C8ZyXebHPFIK3E4G27kY67kc87kg87ko+XajME4G2E4C27kg87kxA46inE4G2E4G27kY77kg87ktA8JuWeLDOFIG3E4G2FYC27kc870xB7KWiUKHIFYG3E4G2FYC37kc771BF71BEE4C27kg87kk971FG701B7LKwZqzPE4C2FIC27kk9709D7k9D66SiUKDIFYG2FIG2FIG37kg87kk9701C705D4qWlVaLJFIC27kU67kc87kg87ks/7kc87UQ37UY57kc88FVL8FpP7kg87kc870U57kY78FhO71FG7kc77kY77kc77Uc76Ug86Uc86Uc77Ec770Y6PPai+gAAAIB0Uk5TAAcsCxKc+LIgDcL/2Q0JqLUSnv/+IKH//8kJ////Egme///+CpD5////sQmn////+gSN////+475//99DAmn//7//3MCeP////+iA43//wyW//////+EAvP///7/+6IDjv7///t8DAed/v+VAgWI/v/7oQMFkv58CxOm/v//oQv0v99WAAABF0lEQVR4nGNgoBAwMjFjFWdhZWPnwCLOycXNzc3DiyHOx88NAgKC6OJCYHFhEQFRVHExiLi4BLekFKY50jKyINPk4OLyChD1ikogSlkA5jYVVTV1oIC6hqYwWIGyFkRcW0dXT1gfKKDJDQUGYHFDI2MTXVN1dW44MDMHqzeyMDa2tDJFSJhZ2wDFbe2MQcDewVHYCSru7AIyxxUsbuxm7+7hCdZk5uUNMsfHAizu6wc0DSxjZu0PsiAALBwYFAwyLSTUyYk7LBzsoohAkERkEJiKio6JjYuHeCEhESiUlAyxx9g+JTUN6uf0jMysrEBjGMjOgYdSbl5+gQlUuLCoGClcS0rLoDoKyytQYqKyqrqmFgTq6hGCAM2nPDTEuu7AAAAAAElFTkSuQmCC",
          paintCan:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAbZQTFRFAAAAtNListHhtNLitNLiBoGvBHumT5y4tNLiBoGvBoGvBHumtNLi/gNitid6DH6tY6fBts3f/QRltNLitdPit9Tj2Obu+xhx/BFssTeDFoWyE4ezYqrHtdLi2G2l/gNk/gNk/gNktNLiwtvnyt7q55C66Iu35Yy4ibvUg77WwNrowdrnsdDh2Wuj/gNk/gNk/gNk/gNktNLis9Li2keNsyl7NJe9Rp/CCX2nUJy42meh/gNk/gNkLm2j6A5qtCl7AnaeT5y3tNHi6EKL+wNj9wNh/gNk/gNk6A5rA3igAXKXusHX+g5q6gJa/gNkBoGvQWOd8ApomjaCCX6rAXOZAXKXn8fZ9xdw8ANc+ANh8gNe/gNk/gNkBoGvQWOejS9yBXCWAXKY/gNk+gNi9gNg7QJb+QNh/gNkBoGvBoGv5wJY4wJWgjJy/gNk+QNi/gNkBoGv4wJW5AJX/gNkQGKb2whb/gNk/gNk/gNkBoCtAnSaOVaH1Qla/gNk/gNk/gNkBoCtBX+rBHymA3GX/gNk/gNk/gNkAXOYAXKX/gNk/gNkAXOZ/gNk/gNkAXOZAXOZ/gNk/gNkOvNUWwAAAJJ0Uk5TAFJF/4EBqf+Cp///DAGo//+ECHj9vRCo////////+NKRIrP/+vb//////////P/8rRkikOz///////7uT/////////////1i////////Po7//////9qIt////9EE3P///xlB/////0ka3f//2vf/oN7ZGN///9muVf///9rTdBPe//8ZHQkSG987vxvYehMQdTpgjpI8AAABJklEQVR4nGNgIB8w4hBnYmbBKs7Kxs7MgU2ck4sbQ4aHgYGXj5+Li1uAWVAISVxYRFRMXEJSSlpaRpZZTl5BESahpKyiqqampq6hqaWtw6yrp29gCJEwMjbRAwFTfjNzC0tmKz09axuovbZ2YBl7oD0Ojk7OLq5u7hD3cNl6wGQ8vdi9fXz19P0YGPy5gCAgECwTFBziFRoWHhEZFR3DEAuS4IoDy7jEJ4QmMiQlp6SmpTNkZHLB9LhkZeckMjDE5Oq55OUzMGQUQGWA4oVFIOcUAzUXA2monpJSqDhDWXmFnj6IAdZTWVVdAxFnqK2r19MDszIaGpuA7mmGhkVLaxtUgqG9w8sL6B4o6DSMKeuCsrs7EOIMPb1IYdzXj2BPmIglxggDALjHQULFhvHMAAAAAElFTkSuQmCC",
        },
      },
      erasor: {
        pick: false,
      },
      colorPicker: {
        pick: false,
        color: "#000000",
        bgColor: "#ffffff",
        brushType: "round",
        brushSize: { current: 1, max: 50, min: 1 },
      },
      tools: {
        pen: { boundary: {} },
        brush: { boundary: {} },
        erasor: { boundary: {} },
        brushRound: { boundary: {} },
        brushSquare: { boundary: {} },
        paintCan: { boundary: {} },
      },
      drawBox: { isDrawn: "false", coord: {}, boundary: {} },
      resetCanvas: { pick: false, boundary: {} },
      saveAs: { pick: false, boundary: {} },
    };
    // Merge provided options with default options
    if (typeof options === "object") {
      this.options = { ...this.options, ...options };
    }

    //init call
    if (
      document.querySelector(this.options.container) !== null ||
      document.querySelector(this.options.container) != undefined
    ) {
      window.addEventListener("load", this.init());
    } else {
      console.warn(
        "element is not found. \n please use correct selector name ('paint') in your html structure or use your own selector by adding \n new myPaint({ container: '.box' });\n see the documentation to customize it"
      );
    }
  }

  //init functions
  init() {
    this.options.w = window.innerWidth;
    this.options.h = window.innerHeight;

    // Create a container element
    this.elem = document.querySelector(this.options.container);
    this.elem.style.position = "relative";
    this.elem.style.height = this.options.h + "px";
    this.elem.style.width = "100%";
    this.elem.classList.add(this.options.container.substring(1));

    this.canvas = document.createElement("canvas");
    this.canvas.id = "body_canvas";
    this.canvas.width = this.options.w;
    this.canvas.height = this.options.h;
    this.options.canvas = this.canvas;
    this.elem.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });

    //set
    this.create_tool();
    this.tips();
    this.drawPointer();

    //make 'this' accessable for all functions
    this.calcPos = this.calcPos.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.setBrushSize = this.setBrushSize.bind(this);
    this.erasor = this.erasor.bind(this);
    this.draw = this.draw.bind(this);
    this.reposition = this.reposition.bind(this);
    this.adjustment = this.adjustment.bind(this);
    this.clicked = this.clicked.bind(this);
    // this.saveAs = this.saveAs.bind(this);
    // this.resetCanvas = this.resetCanvas.bind(this);

    //bind eventListner
    document.addEventListener("mousemove", this.calcPos);
    document.addEventListener("mousedown", this.start);
    document.addEventListener("mouseup", this.stop);
    window.addEventListener("wheel", this.setBrushSize);
    window.addEventListener("contextmenu", this.erasor);
    window.addEventListener("click", this.clicked);
  }

  //restrict cursor
  calcPos(event) {
    let pos = {
      x: event.clientX - this.canvas.offsetLeft,
      y: event.clientY - this.canvas.offsetTop,
    };
    this.options.x = pos.x;
    this.options.y = pos.y;

    //is pointer inside drawing area
    this.options.x <
      this.options.drawBox.boundary.w + this.options.drawBox.boundary.x &&
    this.options.x > this.options.drawBox.boundary.x &&
    this.options.y <
      this.options.drawBox.boundary.h + this.options.drawBox.boundary.y &&
    this.options.y > this.options.drawBox.boundary.y
      ? (this.options.drawBox.isDrawn = true)
      : (this.options.drawBox.isDrawn = false);

    //is pointer inside color-picker area
    this.options.x > this.options.colorPicker.x &&
    this.options.x < this.options.colorPicker.x + this.options.colorPicker.w &&
    this.options.y > this.options.colorPicker.y &&
    this.options.y < this.options.colorPicker.y + this.options.colorPicker.h
      ? (this.options.colorPicker.pick = true)
      : (this.options.colorPicker.pick = false);

    //is pointer inside clear canvas button
    this.options.x > this.options.resetCanvas.boundary.x &&
    this.options.x <
      this.options.resetCanvas.boundary.x +
        this.options.resetCanvas.boundary.w &&
    this.options.y > this.options.resetCanvas.boundary.y &&
    this.options.y <
      this.options.resetCanvas.boundary.y + this.options.resetCanvas.boundary.h
      ? (this.options.resetCanvas.pick = true)
      : (this.options.resetCanvas.pick = false);

    //is pointer inside save as image button
    this.options.x > this.options.saveAs.boundary.x &&
    this.options.x <
      this.options.saveAs.boundary.x + this.options.saveAs.boundary.w &&
    this.options.y > this.options.saveAs.boundary.y &&
    this.options.y <
      this.options.saveAs.boundary.y + this.options.saveAs.boundary.h
      ? (this.options.saveAs.pick = true)
      : (this.options.saveAs.pick = false);

    this.showPickedColor();
    this.drawPointer();
    this.tips();
    this.saveAs(true);
    this.resetCanvas(true);
  }

  //clicked
  clicked(event) {
    this.saveAs(event);
    this.resetCanvas(event);
  }

  //paint
  start(event) {
    this.pickColor(event);
    document.addEventListener("mousemove", this.draw);
    this.reposition(event);
  }
  stop() {
    document.removeEventListener("mousemove", this.draw);
  }
  reposition(event) {
    this.options.drawBox.coord.x = this.options.drawBox.isDrawn
      ? event.clientX - this.canvas.offsetLeft
      : this.options.drawBox.boundary.x;
    this.options.drawBox.coord.y = this.options.drawBox.isDrawn
      ? event.clientY - this.canvas.offsetTop
      : this.options.drawBox.boundary.y;
  }
  //mouse draw - paint
  draw(event) {
    if (this.options.drawBox.isDrawn) {
      this.ctx.beginPath();
      if (this.options.erasor.pick) {
        this.ctx.strokeStyle = this.options.colorPicker.bgColor;
      } else {
        this.ctx.strokeStyle = this.options.colorPicker.color;
      }
      this.ctx.lineWidth = this.options.colorPicker.brushSize.current;
      this.ctx.lineCap = this.options.colorPicker.brushType;
      this.ctx.moveTo(
        this.options.drawBox.coord.x,
        this.options.drawBox.coord.y
      );
      this.reposition(event);
      this.ctx.lineTo(
        this.options.drawBox.coord.x,
        this.options.drawBox.coord.y
      );
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  //create sidebar
  create_tool() {
    this.ctx.beginPath();

    // outline of box - (pick a color)
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(
      this.options.ui.offset.x,
      this.options.ui.offset.y,
      this.options.ui.offset.w,
      this.options.ui.offset.h,
      5
    );
    this.ctx.fill();
    this.ctx.stroke();

    // title - (pick a color)
    this.ctx.font =
      this.options.ui.text.info1.h + "px " + this.options.ui.text.info1.family;
    this.ctx.textAlign = "start";
    this.ctx.textBaseline = "middle";
    this.ctx.fillStyle = this.options.ui.color;
    this.options.ui.text.info1.w = this.ctx.measureText(
      this.options.ui.text.info1.title
    ).width;
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = "none";
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(
      this.options.ui.offset.x * 2 - 5,
      this.options.ui.offset.y - this.options.ui.text.info1.h,
      this.options.ui.text.info1.w + this.options.ui.offset.x,
      this.options.ui.offset.y,
      5
    );
    this.ctx.stroke();
    this.ctx.clearRect(
      this.options.ui.offset.x * 2 - 5 + 1,
      this.options.ui.offset.y - this.options.ui.text.info1.h - 1,
      this.options.ui.text.info1.w + this.options.ui.offset.x - 2,
      this.options.ui.offset.y
    );
    this.ctx.clearRect(
      this.options.ui.offset.x * 2 - 5 - 1,
      this.options.ui.offset.y - this.options.ui.text.info1.h - 1,
      this.options.ui.text.info1.w + this.options.ui.offset.x + 5,
      this.options.ui.offset.y - this.options.ui.text.info1.h + 3
    );
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.fillText(
      this.options.ui.text.info1.title,
      this.options.ui.offset.x * 2,
      this.options.ui.offset.y
    );

    // Create color gradient - (pick a color)
    this.options.colorPicker.x = this.options.ui.offset.x * 2 - 5;
    this.options.colorPicker.y =
      this.options.ui.offset.y +
      this.options.ui.text.info1.h +
      this.options.ui.offset.x -
      5;
    this.options.colorPicker.w =
      this.options.ui.offset.w - this.options.ui.offset.x - 5;
    this.options.colorPicker.h =
      this.options.ui.offset.h -
      this.options.ui.offset.y -
      this.options.ui.offset.x +
      5;
    var gradient = this.ctx.createLinearGradient(
      this.options.colorPicker.x - 5,
      0,
      this.options.ui.offset.w + 5,
      0
    );
    gradient.addColorStop(0, "rgb(255,0,0)");
    gradient.addColorStop(0.15, "rgb(255,0,255)");
    gradient.addColorStop(0.33, "rgb(0,0,255)");
    gradient.addColorStop(0.49, "rgb(0,255,255)");
    gradient.addColorStop(0.67, "rgb(0,255,0)");
    gradient.addColorStop(0.84, "rgb(255,255,0)");
    gradient.addColorStop(1, "rgb(255,0,0)");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(
      this.options.colorPicker.x,
      this.options.colorPicker.y,
      this.options.colorPicker.w,
      this.options.colorPicker.h
    );

    // Create semi transparent gradient (white -> trans. -> black)
    gradient = this.ctx.createLinearGradient(
      0,
      this.options.colorPicker.y + 5,
      0,
      this.options.ui.offset.h + this.options.ui.offset.x - 5
    );
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.5, "rgba(255,255,255,0)");
    gradient.addColorStop(0.5, "rgba(0,0,0,0)");
    gradient.addColorStop(1, "rgba(0,0,0,1)");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(
      this.options.colorPicker.x,
      this.options.colorPicker.y,
      this.options.colorPicker.w,
      this.options.colorPicker.h
    );
    this.ctx.closePath();

    //init artboard boundary - universal
    this.options.drawBox.x =
      this.options.ui.offset.x +
      this.options.ui.offset.w +
      this.options.ui.offset.x;
    this.options.drawBox.y = this.options.ui.offset.y;
    this.options.drawBox.w =
      this.options.w -
      this.options.ui.offset.x -
      this.options.ui.offset.w -
      this.options.ui.offset.x * 3 -
      this.options.ui.tips.w;
    this.options.drawBox.h = this.options.h - this.options.ui.offset.y * 2;

    //init dynamic artboard boundary - based on brush size
    this.options.drawBox.boundary.x = this.options.drawBox.x;
    this.options.drawBox.boundary.y = this.options.drawBox.y;
    this.options.drawBox.boundary.w = this.options.drawBox.w;
    this.options.drawBox.boundary.h = this.options.drawBox.h;

    //draw artboard
    this.ctx.beginPath();
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = this.options.colorPicker.bgColor;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(
      this.options.drawBox.x - 1,
      this.options.drawBox.y - 1,
      this.options.drawBox.w + 2,
      this.options.drawBox.h + 2,
      5
    );
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    //show picked color-hover
    this.showPickedColor(true);

    //brush info box
    this.brushinfo();

    //Adjustment box
    this.adjustment();

    //save as btn
    this.saveAs(true);

    //reset canvas btn
    this.resetCanvas(true);
  }

  //pick color
  showPickedColor(overwrite) {
    if (
      (!this.options.drawBox.isDrawn && this.options.colorPicker.pick) ||
      overwrite
    ) {
      let p = this.ctx.getImageData(this.options.x, this.options.y, 1, 1).data;
      if (!overwrite) {
        this.ctx.beginPath();
        this.ctx.fillStyle =
          "rgba(" + p[0] + ", " + p[1] + ", " + p[2] + ", 1)";
        this.ctx.lineWidth = "5";
        this.ctx.strokeStyle = "rgba(255,255,255,0.5)";
        this.ctx.roundRect(
          this.options.ui.offset.x +
            this.options.ui.offset.w -
            this.options.ui.offset.x * 2 -
            12,
          this.options.ui.offset.y + 5,
          this.options.ui.offset.x - 2,
          this.options.ui.offset.x,
          3
        );
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
      }
      this.ctx.beginPath();
      if (this.options.erasor.pick) {
        this.ctx.fillStyle = this.options.colorPicker.bgColor;
      } else {
        this.ctx.fillStyle = this.options.colorPicker.color;
      }
      this.ctx.lineWidth = "1";
      this.ctx.strokeStyle = "rgba(0,0,0,0.5)";
      this.ctx.roundRect(
        this.options.ui.offset.x +
          this.options.ui.offset.w -
          this.options.ui.offset.x * 2 +
          5,
        this.options.ui.offset.y + 5,
        this.options.ui.offset.x - 2,
        this.options.ui.offset.x,
        3
      );
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }
  pickColor() {
    if (!this.options.drawBox.isDrawn && this.options.colorPicker.pick) {
      let p = this.ctx.getImageData(this.options.x, this.options.y, 1, 1).data;
      this.options.colorPicker.color =
        "#" + ("000000" + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
      this.showPickedColor(true);
      this.drawPointer();
    }
  }
  rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255) throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
  }

  //+- brush size
  setBrushSize(event) {
    this.brushinfo();
    this.drawPointer();
    if (event.deltaY < 0) {
      // console.log("scrolling up");
      this.options.colorPicker.brushSize.current <
      this.options.colorPicker.brushSize.max
        ? this.options.colorPicker.brushSize.current++
        : (this.options.colorPicker.brushSize.current =
            this.options.colorPicker.brushSize.max);
    } else if (event.deltaY > 0) {
      this.options.colorPicker.brushSize.current >
      this.options.colorPicker.brushSize.min
        ? this.options.colorPicker.brushSize.current--
        : (this.options.colorPicker.brushSize.current =
            this.options.colorPicker.brushSize.min);
    }

    //update artboard boundary - based on brush size
    this.options.drawBox.boundary.x =
      this.options.drawBox.x + this.options.colorPicker.brushSize.current / 2;
    this.options.drawBox.boundary.y =
      this.options.drawBox.y + this.options.colorPicker.brushSize.current / 2;
    this.options.drawBox.boundary.w =
      this.options.drawBox.w - this.options.colorPicker.brushSize.current;
    this.options.drawBox.boundary.h =
      this.options.drawBox.h - this.options.colorPicker.brushSize.current;
  }
  //reset brush size - erasor
  erasor(ev) {
    !this.options.erasor.pick
      ? ((this.options.erasor.pick = true), this.showPickedColor(true))
      : ((this.options.erasor.pick = false), this.showPickedColor(true));
    // console.log(this.options.erasor.pick);
    this.brushinfo();
    ev.preventDefault();
  }

  //Adjustment box
  adjustment() {
    let pos = {
      x: this.options.ui.offset.x,
      y: this.options.ui.offset.y * 2 + this.options.ui.offset.h,
      w: this.options.ui.offset.w,
      h: this.options.ui.offset.h,
    };
    this.ctx.clearRect(pos.x, pos.y, pos.w, pos.h);

    this.ctx.beginPath();
    // outline box - (Adjustment box )
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(pos.x, pos.y, pos.w, pos.h, 5);
    this.ctx.fill();
    this.ctx.stroke();

    // title  - (Adjustment box )
    pos.x = pos.x + this.options.ui.offset.x;
    pos.y = pos.y - this.options.ui.text.info2.h;
    this.ctx.font =
      this.options.ui.text.info2.h + "px " + this.options.ui.text.info2.family;
    this.ctx.textAlign = "start";
    this.ctx.textBaseline = "middle";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.options.ui.text.info2.w = this.ctx.measureText(
      this.options.ui.text.info2.title
    ).width;
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = "none";
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(
      pos.x - 5,
      pos.y,
      this.options.ui.text.info2.w + this.options.ui.offset.x,
      this.options.ui.offset.y,
      5
    );
    this.ctx.stroke();
    this.ctx.clearRect(
      pos.x - 5 + 1,
      pos.y - 1,
      this.options.ui.text.info2.w + this.options.ui.offset.x - 2,
      this.options.ui.offset.y
    );
    this.ctx.clearRect(
      pos.x - 5 - 1,
      pos.y - 1,
      this.options.ui.text.info2.w + this.options.ui.offset.x + 5,
      this.options.ui.offset.y - this.options.ui.text.info2.h + 3
    );
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.fillText(
      this.options.ui.text.info2.title,
      this.options.ui.offset.x * 2,
      pos.y + this.options.ui.text.info2.h * 2 - this.options.ui.offset.y / 2
    );
    this.ctx.closePath();

    pos.y = pos.y + this.options.ui.offset.y + this.options.ui.text.info2.h;

    //checkbox - (pen)
    this.ctx.beginPath();
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(pos.x, pos.y, 25, 25, 3);
    this.ctx.fill();
    this.ctx.stroke();
    this.options.tools.pen.boundary.x = pos.x;
    this.options.tools.pen.boundary.y = pos.y;
    this.options.tools.pen.boundary.w = 25;
    this.options.tools.pen.boundary.h = 25;
    //icon
    this.drawImages(this.ctx, this.options.ui.icons.pen, {
      x: pos.x,
      y: pos.y,
    });
    //text
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.fillText(
      "Pen",
      pos.x,
      pos.y + 25 + this.options.ui.text.info2.h / 2 + 5
    );
    this.ctx.closePath();

    //checkbox - (brush)
    this.ctx.beginPath();
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(pos.x + 55, pos.y, 25, 25, 3);
    this.ctx.fill();
    this.ctx.stroke();
    this.options.tools.brush.boundary.x = pos.x + 55;
    this.options.tools.brush.boundary.y = pos.y;
    this.options.tools.brush.boundary.w = 25;
    this.options.tools.brush.boundary.h = 25;
    //icon
    this.drawImages(this.ctx, this.options.ui.icons.brush, {
      x: pos.x + 55 + 4,
      y: pos.y,
    });
    //text
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.fillText(
      "Brush",
      pos.x + 55,
      pos.y + 25 + this.options.ui.text.info2.h / 2 + 5
    );
    this.ctx.closePath();

    //checkbox - (erasor)
    this.ctx.beginPath();
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(pos.x + 55 * 2, pos.y, 25, 25, 3);
    this.ctx.fill();
    this.ctx.stroke();
    this.options.tools.brush.boundary.x = pos.x + 55 * 2;
    this.options.tools.brush.boundary.y = pos.y;
    this.options.tools.brush.boundary.w = 25;
    this.options.tools.brush.boundary.h = 25;
    //icon
    this.drawImages(this.ctx, this.options.ui.icons.paintCan, {
      x: pos.x + 55 * 2,
      y: pos.y,
    });
    //text
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.fillText(
      "Bucket",
      pos.x + 55 * 2,
      pos.y + 25 + this.options.ui.text.info2.h / 2 + 5
    );
    this.ctx.closePath();

    pos.y =
      pos.y + this.options.ui.offset.y + this.options.ui.text.info2.h * 2 + 5;
    //brush type - (rounded)
    this.ctx.beginPath();
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(pos.x, pos.y, 25, 25, 3);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.options.tools.brushRound.boundary.x = pos.x;
    this.options.tools.brushRound.boundary.y = pos.y;
    this.options.tools.brushRound.boundary.w = 25;
    this.options.tools.brushRound.boundary.h = 25;
    //icon
    this.ctx.beginPath();
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.arc(pos.x + 12.5, pos.y + 12.5, 8, 0, 2 * Math.PI, true);
    this.ctx.fill();
    this.ctx.stroke();
    //text
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.fillText(
      "Round",
      pos.x,
      pos.y + this.options.ui.text.info2.h * 2 + 8
    );
    this.ctx.closePath();

    pos.x = pos.x + 55;
    //brush type - (square)
    this.ctx.beginPath();
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(pos.x, pos.y, 25, 25, 3);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.options.tools.brushRound.boundary.x = pos.x;
    this.options.tools.brushRound.boundary.y = pos.y;
    this.options.tools.brushRound.boundary.w = 25;
    this.options.tools.brushRound.boundary.h = 25;
    //icon
    this.ctx.beginPath();
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(pos.x + 5.5, pos.y + 5.5, 14, 14, 0);
    this.ctx.fill();
    this.ctx.stroke();
    //text
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.fillText(
      "Square",
      pos.x,
      pos.y + this.options.ui.text.info2.h * 2 + 8
    );
    this.ctx.closePath();

    //paintCan -(fill canvas)
    pos.x = pos.x + 55;
    this.ctx.beginPath();
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(pos.x, pos.y, 25, 25, 3);
    this.ctx.fill();
    this.ctx.stroke();
    this.options.tools.paintCan.boundary.x = pos.x;
    this.options.tools.paintCan.boundary.y = pos.y;
    this.options.tools.paintCan.boundary.w = 25;
    this.options.tools.paintCan.boundary.h = 25;
    //icon
    this.drawImages(this.ctx, this.options.ui.icons.erasor, {
      x: pos.x,
      y: pos.y,
    });
    //text
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.fillText(
      "Erasor",
      pos.x,
      pos.y + 25 + this.options.ui.text.info2.h / 2 + 5
    );
    this.ctx.closePath();
  }

  //reset canvas
  resetCanvas(val) {
    this.options.resetCanvas.pick ? (this.elem.style.cursor = "pointer") : null;
    let pos = {
      x: this.options.ui.offset.x,
      y:
        this.options.drawBox.y +
        this.options.drawBox.h -
        this.options.ui.offset.y -
        80,
      w: this.options.ui.offset.w,
      h: 40,
    };
    this.ctx.clearRect(pos.x, pos.y, pos.w, pos.h);
    this.options.resetCanvas.boundary.x = pos.x;
    this.options.resetCanvas.boundary.y = pos.y;
    this.options.resetCanvas.boundary.w = pos.w;
    this.options.resetCanvas.boundary.h = pos.h;
    this.ctx.beginPath();
    //box - (clear canvas)
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle =
      this.options.resetCanvas.pick && val ? "#ffffff" : "#f95e34";
    this.ctx.strokeStyle = "#ffffff";
    this.ctx.roundRect(pos.x, pos.y, pos.w, pos.h, 5);
    this.ctx.fill();
    this.ctx.stroke();
    //text - (clear canvas)
    this.ctx.fillStyle =
      this.options.resetCanvas.pick && val ? "#000000" : "#ffffff";
    this.ctx.font = "20px " + this.options.ui.text.info1.family;
    this.ctx.textAlign = "start";
    this.ctx.textBaseline = "middle";
    let tw = this.ctx.measureText("Clear Canvas").width;
    this.ctx.fillText("Clear Canvas", pos.x + (tw / 2 - 15), pos.y + 20);
    this.ctx.closePath();
    if (
      this.options.resetCanvas.pick &&
      val.type == "click" &&
      val.target == this.canvas
    ) {
      this.ctx.clearRect(
        this.options.drawBox.x,
        this.options.drawBox.y,
        this.options.drawBox.w,
        this.options.drawBox.h
      );
      this.ctx.beginPath();
      this.ctx.lineWidth = "1";
      this.ctx.fillStyle = this.options.colorPicker.bgColor;
      this.ctx.strokeStyle = this.options.ui.strokeColor;
      this.ctx.roundRect(
        this.options.drawBox.x - 1,
        this.options.drawBox.y - 1,
        this.options.drawBox.w + 2,
        this.options.drawBox.h + 2,
        5
      );
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  //save as image
  saveAs(val) {
    this.options.saveAs.pick ? (this.elem.style.cursor = "pointer") : null;
    let pos = {
      x: this.options.ui.offset.x,
      y: this.options.drawBox.y + this.options.drawBox.h - 40,
      w: this.options.ui.offset.w,
      h: 40,
    };
    this.ctx.clearRect(pos.x, pos.y, pos.w, pos.h);
    this.options.saveAs.boundary.x = pos.x;
    this.options.saveAs.boundary.y = pos.y;
    this.options.saveAs.boundary.w = pos.w;
    this.options.saveAs.boundary.h = pos.h;
    this.ctx.beginPath();
    //box - (clear canvas)
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle =
      this.options.saveAs.pick && val ? "#ffffff" : "#34882e";
    this.ctx.strokeStyle = "#ffffff";
    this.ctx.roundRect(pos.x, pos.y, pos.w, pos.h, 5);
    this.ctx.fill();
    this.ctx.stroke();
    //text - (clear canvas)
    this.ctx.fillStyle =
      this.options.saveAs.pick && val ? "#000000" : "#ffffff";
    this.ctx.font = "20px " + this.options.ui.text.info1.family;
    this.ctx.textAlign = "start";
    this.ctx.textBaseline = "middle";
    let tw = this.ctx.measureText("Save as Image").width;
    this.ctx.fillText("Save as Image", pos.x + (tw / 2 - 20), pos.y + 20);
    this.ctx.closePath();
    if (
      this.options.saveAs.pick &&
      val.type == "click" &&
      val.target == this.canvas
    ) {
      const imageContentRaw = this.ctx.getImageData(
        this.options.drawBox.x,
        this.options.drawBox.y,
        this.options.drawBox.w,
        this.options.drawBox.h
      );
      var fakecanvas = document.createElement("canvas");
      fakecanvas.width = window.innerWidth;
      fakecanvas.height = window.innerHeight;
      this.elem.appendChild(fakecanvas);
      fakecanvas.getContext("2d").putImageData(imageContentRaw, 0, 0);
      const results = fakecanvas.toDataURL("image/png");
      this.elem.removeChild(fakecanvas);
      const link = document.createElement("a");
      link.href = results;
      link.download = `canvas_image_${Date.now()}.png`;
      this.elem.appendChild(link);
      link.click();
      this.elem.removeChild(link);
    }
  }

  async drawImages(ctx, imgsrc, p) {
    const img = await this.loadImage(imgsrc);
    ctx.drawImage(img, p.x + 2, p.y + 2, 20, 20);
  }
  loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  //show brush info
  brushinfo() {
    let pos = {
      x: this.options.ui.offset.x,
      y: this.options.ui.offset.y * 3 + this.options.ui.offset.h * 2,
      w: this.options.ui.offset.w,
      h: this.options.ui.offset.h,
    };
    this.ctx.clearRect(pos.x, pos.y, pos.w, pos.h);

    this.ctx.beginPath();
    // outline box - (brush info )
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(pos.x, pos.y, pos.w, pos.h, 5);
    this.ctx.fill();
    this.ctx.stroke();

    // title  - (brush info )
    this.ctx.font =
      this.options.ui.text.info3.h + "px " + this.options.ui.text.info3.family;
    this.ctx.textAlign = "start";
    this.ctx.textBaseline = "middle";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.options.ui.text.info3.w = this.ctx.measureText(
      this.options.ui.text.info3.title
    ).width;
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = "none";
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(
      pos.x + this.options.ui.offset.x - 5,
      pos.y - this.options.ui.text.info3.h,
      this.options.ui.text.info3.w + this.options.ui.offset.x,
      this.options.ui.offset.y,
      5
    );
    this.ctx.stroke();
    this.ctx.clearRect(
      pos.x + this.options.ui.offset.x - 5 + 1,
      pos.y - this.options.ui.text.info3.h - 1,
      this.options.ui.text.info3.w + this.options.ui.offset.x - 2,
      this.options.ui.offset.y
    );
    this.ctx.clearRect(
      pos.x + this.options.ui.offset.x - 5 - 1,
      pos.y - this.options.ui.text.info3.h - 1,
      this.options.ui.text.info3.w + this.options.ui.offset.x + 5,
      this.options.ui.offset.y - this.options.ui.text.info3.h + 3
    );
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.fillText(
      this.options.ui.text.info3.title,
      this.options.ui.offset.x * 2,
      pos.y + this.options.ui.text.info3.h - this.options.ui.offset.y / 2
    );

    //line 1 - mode
    pos.x = this.options.ui.offset.x * 2;
    pos.y = pos.y + this.options.ui.text.info3.h * 2 + 3;
    pos.h = this.options.ui.text.info3.h;
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.fillText(
      "Mode : " +
        (!this.options.erasor.pick
          ? "Paint" +
            (this.options.colorPicker.brushSize.current <
            this.options.colorPicker.brushSize.max / 2
              ? " (Pen)"
              : " (Brush)")
          : "erasor"),
      pos.x,
      pos.y
    );

    //line 2 - size
    pos.y = pos.y + pos.h * 2 - 3;
    this.ctx.fillStyle = this.options.ui.color;
    this.ctx.fillText(
      "Size : " + this.options.colorPicker.brushSize.current,
      pos.x,
      pos.y
    );

    //line 3 - brush type
    pos.y = pos.y + pos.h * 2 - 3;
    this.ctx.fillText(
      "Brush type : " + this.options.colorPicker.brushType,
      pos.x,
      pos.y
    );

    //line 4 - color
    pos.y = pos.y + pos.h * 2 - 3;
    this.ctx.fillText("Color (Hex code):", pos.x, pos.y);
    this.ctx.fillText(
      !this.options.erasor.pick
        ? this.options.colorPicker.color
        : this.options.colorPicker.bgColor,
      pos.x,
      pos.y + pos.h
    );
    this.ctx.closePath();
  }

  //draw mouse Pointer
  drawPointer() {
    this.elem.style.cursor = "none";
    let crs = document.querySelector(".canvas_cursor");
    if (crs != undefined || crs != null) {
      crs.classList.add("active");
      crs.style.color = this.options.erasor.pick
        ? this.options.colorPicker.bgColor
        : this.options.colorPicker.color;
      crs.style.setProperty(
        "--size",
        this.options.colorPicker.brushSize.current + "px"
      );
      let crs_img = crs.querySelector("img");
      if (this.options.erasor.pick) {
        crs_img.src = this.options.ui.icons.erasor;
      } else {
        if (
          this.options.colorPicker.brushSize.current <
          this.options.colorPicker.brushSize.max / 2
        ) {
          crs_img.src = this.options.ui.icons.pen;
        } else {
          crs_img.src = this.options.ui.icons.brush;
        }
      }
      if (this.options.drawBox.isDrawn) {
        crs.style.transform = `translate(${this.options.x}px, ${this.options.y}px)`;
      } else {
        if (this.options.colorPicker.pick) {
          this.elem.style.cursor = "crosshair";
        } else {
          this.elem.style.cursor = "default";
        }
      }
    } else {
      let crs = document.createElement("span");
      crs.classList.add("canvas_cursor");
      let set_val =
        "display:block; width:30px; height: 30px; position:absolute; left:0; top:0; z-index:5;pointer-events:none;line-height:0;margin-top:-30px;" +
        "color:" +
        (this.options.erasor.pick
          ? this.options.colorPicker.bgColor
          : this.options.colorPicker.color) +
        "; --size:" +
        this.options.colorPicker.brushSize.current +
        "px";
      crs.setAttribute("style", set_val);
      crs.style.transform = `translate(${window.innerWidth / 2}px, ${
        window.innerHeight / 2
      }px)`;
      this.elem.appendChild(crs);
      let crs_img = document.createElement("img");
      crs_img.src = this.options.ui.icons.pen;
      crs_img.setAttribute("style", "height: 30px;width:30px;");
      crs.appendChild(crs_img);
    }
  }

  //show tips
  tips() {
    let tls = {
      x:
        this.options.drawBox.x +
        this.options.drawBox.w +
        this.options.ui.offset.x,
      y: this.options.ui.offset.y,
      w: this.options.ui.tips.w,
      h: this.options.drawBox.h,
    };
    this.ctx.clearRect(tls.x, tls.y, tls.w, tls.h);
    this.ctx.beginPath();
    // outline box - (Tips)
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = this.options.ui.bgColor;
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    this.ctx.roundRect(tls.x, tls.y, tls.w, tls.h, 5);
    this.ctx.fill();
    this.ctx.stroke();

    // title - (Tips)
    this.ctx.font =
      this.options.ui.tips.header.h +
      "px " +
      this.options.ui.tips.header.family;
    this.ctx.textAlign = "start";
    this.ctx.textBaseline = "middle";
    this.ctx.fillStyle = this.options.ui.color;
    this.options.ui.tips.header.w = this.ctx.measureText(
      this.options.ui.tips.header.title
    ).width;
    this.ctx.lineWidth = "1";
    this.ctx.fillStyle = "none";
    this.ctx.strokeStyle = this.options.ui.strokeColor;
    tls.x = tls.x + this.options.ui.offset.x - 5;
    tls.y = tls.y - this.options.ui.tips.header.h;
    this.ctx.roundRect(
      tls.x,
      tls.y,
      this.options.ui.tips.header.w + this.options.ui.offset.x,
      this.options.ui.offset.y,
      5
    );
    this.ctx.stroke();
    this.ctx.clearRect(
      tls.x + 1,
      tls.y - 1,
      this.options.ui.tips.header.w + this.options.ui.offset.x - 2,
      this.options.ui.offset.y
    );
    this.ctx.clearRect(
      tls.x - 1,
      tls.y - 1,
      this.options.ui.tips.header.w + this.options.ui.offset.x + 5,
      this.options.ui.offset.y - this.options.ui.tips.header.h + 3
    );
    this.ctx.fillStyle = this.options.ui.color;
    tls.x = tls.x + 5;
    tls.y = tls.y + this.options.ui.tips.header.h * 2;
    this.ctx.fillText(
      this.options.ui.tips.header.title,
      tls.x,
      tls.y - this.options.ui.offset.y / 2
    );

    //info 1
    tls.y = tls.y + this.options.ui.offset.y / 2 + 5;
    tls.w = this.options.ui.tips.w - this.options.ui.offset.x * 2;
    tls.h = this.options.ui.tips.header.h + 3;
    let nxtY = this.printAtWordWrap(
      this.options.ui.tips.painting,
      tls.x,
      tls.y,
      tls.h,
      tls.w
    );

    //info 2
    nxtY = this.printAtWordWrap(
      this.options.ui.tips.colorchange,
      tls.x,
      nxtY + this.options.ui.tips.header.h * 2,
      tls.h,
      tls.w
    );

    //info 3
    nxtY = this.printAtWordWrap(
      this.options.ui.tips.brushsize,
      tls.x,
      nxtY + this.options.ui.tips.header.h * 2,
      tls.h,
      tls.w
    );

    //info 4
    nxtY = this.printAtWordWrap(
      this.options.ui.tips.erasor,
      tls.x,
      nxtY + this.options.ui.tips.header.h * 2,
      tls.h,
      tls.w
    );

    //info 5
    nxtY = this.printAtWordWrap(
      this.options.ui.tips.clearAll,
      tls.x,
      nxtY + this.options.ui.tips.header.h * 2,
      tls.h,
      tls.w
    );

    //info 6
    nxtY = this.printAtWordWrap(
      this.options.ui.tips.saveImage,
      tls.x,
      nxtY + this.options.ui.tips.header.h * 2,
      tls.h,
      tls.w
    );

    this.ctx.closePath();
  }
  printAtWordWrap(text, x, y, lineHeight, fitWidth) {
    fitWidth = fitWidth || 0;

    if (fitWidth <= 0) {
      this.ctx.fillText(text, x, y);
      return;
    }
    let words = text.split(" "),
      currentLine = 0,
      idx = 1;
    let totY = y + lineHeight * currentLine;
    while (words.length > 0 && idx <= words.length) {
      var str = words.slice(0, idx).join(" ");
      var w = this.ctx.measureText(str).width;
      if (w > fitWidth) {
        if (idx == 1) {
          idx = 2;
        }
        totY = y + lineHeight * currentLine;
        this.ctx.fillText(words.slice(0, idx - 1).join(" "), x, totY);
        currentLine++;
        words = words.splice(idx - 1);
        idx = 1;
      } else {
        idx++;
      }
    }
    if (idx > 0) {
      totY = y + lineHeight * currentLine;
      this.ctx.fillText(words.join(" "), x, totY);
    }

    return totY;
  }
}

//call function
new myPaint();
