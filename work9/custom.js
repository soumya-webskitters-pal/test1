window.addEventListener("load", () => {
  const elem = document.getElementById("matter_container");
  const ele = elem.querySelectorAll(".physicsDiv");
  if (ele != undefined || ele != null) {
    // module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Events = Matter.Events,
      Body = Matter.Body,
      Composite = Matter.Composite;

    class Sketch {
      constructor() {
        // create an engine
        this.engine = Engine.create();
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        // create a renderer
        this.render = Render.create({
          element: elem,
          engine: this.engine,
          options: {
            width: this.width,
            height: this.height,
            showAngleIndicator: true,
            showVelocity: true,
          },
        });
        this.engine.world.gravity.x = 0;
        this.engine.world.gravity.y = 5;
        // create two boxes and a ground
        this.createBodies();
        this.createWall();

        this.setupMouse();
        // run the renderer
        Render.run(this.render);

        // create runner
        var runner = Runner.create();

        // run the engine
        Runner.run(runner, this.engine);

        window.addEventListener("resize", () => {
          this.onResize();
        });
        Events.on(runner, "afterTick", () => {
          this.updateHtmlElems();
        });
      }

      updateHtmlElems() {
        if (this.htmlBods) {
          this.htmlBods.map((bod) => {
            bod.update();
          });
        }
      }

      onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.render.options.height = this.height;
        this.render.options.width = this.width;
        this.render.canvas.height = this.height;
        this.render.canvas.width = this.width;

        Composite.clear(this.engine.world, false);

        // create two boxes and a ground
        this.createBodies();
        this.createWall();
        this.setupMouse();
      }

      setupMouse() {
        // add mouse control
        var mouse = Matter.Mouse.create(this.render.canvas),
          mouseConstraint = Matter.MouseConstraint.create(this.engine, {
            mouse: mouse,
            constraint: {
              stiffness: 0.2,
              render: {
                visible: false,
              },
            },
          });

        Composite.add(this.engine.world, mouseConstraint);

        // add events to listen drag
        // Events.on(mouseConstraint, "startdrag", function (event) {
        //   event.body.collisionFilter.category = 0x0008; // move body to new category to avoid collision
        // });
        // Events.on(mouseConstraint, "enddrag", function (event) {
        //   event.body.collisionFilter.category = 0x0001; // return body to default category to activate collision
        // });

        // keep the mouse in sync with rendering
        this.render.mouse = mouse;
      }

      createWall() {
        var wall1 = Bodies.rectangle(this.width / 2, this.height + 30, 1, 1, {
          isStatic: true,
        });
        Body.scale(wall1, this.width, 60);
        var wall2 = Bodies.rectangle(this.width / 2, -30, 1, 1, {
          isStatic: true,
        });
        Body.scale(wall2, this.width, 60);
        var wall3 = Bodies.rectangle(this.width + 30, this.height / 2, 1, 1, {
          isStatic: true,
        });
        Body.scale(wall3, 60, this.height);
        var wall4 = Bodies.rectangle(-30, this.height / 2, 1, 1, {
          isStatic: true,
        });
        Body.scale(wall4, 60, this.height);
        this.walls = [];
        this.walls.push(wall1, wall2, wall3, wall4);
        Composite.add(this.engine.world, this.walls);
      }
      createBodies() {
        var htmlElems = [...ele];

        var bodies = [];
        this.htmlBods = [];
        htmlElems.map((elem) => {
          elem.style.transform = "";
          elem.style.webkitTransform = "";
          elem.style.msTransform = "";

          elem.classList.remove("abs");
          var b = elem.getBoundingClientRect();
          elem.classList.add("abs");

          var bod = Bodies.rectangle(
            b.left + b.width / 2,
            b.top + b.height / 2,
            1,
            1,{
              inertia: 1,
              density : 1,
              restitution: 0,
              friction : 1,
            }
          );
          bod.htmlElementOffset = { top: b.top, left: b.left };
          Body.scale(bod, b.width, b.height);
          
          bod.htmlElement = elem;

          bod.update = () => {
            var xpos = bod.position.x,
              ypos = bod.position.y,
              angle = bod.angle;

            var transform =
              "translate(" +
              elem.clientWidth / -2 +
              "px, " +
              elem.clientHeight / -2 +
              "px) translate(" +
              xpos +
              "px, " +
              ypos +
              "px) rotate(" +
              angle +
              "rad) scale3d(1,1,1)";

            //align center after movement
            Body.applyForce(
              bod,
              bod.position,
              Matter.Vector.mult(
                Matter.Vector.sub(
                  Matter.Vector.create(this.width / 2, this.height / 2),
                  bod.position
                ),
                0.05
              )
            );

            elem.style.transform = transform;
            elem.style.webkitTransform = transform;
            elem.style.msTransform = transform;
          };

          this.htmlBods.push(bod);
          bodies.push(bod);
        });

        // add all of the bodies to the world
        Composite.add(this.engine.world, bodies);
      }
    }
    new Sketch();
  }
});
