"use strict";

/* global THREE */

function main() {
  //HELPER
  const gui = new dat.GUI();

  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  // renderer.toneMapping = THREE.ACESFilmicToneMapping;
  // renderer.outputEncoding = THREE.sRGBEncoding;
  // renderer.toneMappingExposure =1;

  var mixer;
  const clock = new THREE.Clock();

  //show loader
  const loadingPara = document.createElement("p");
  loadingPara.innerText = "Please Wait, loading...";
  canvas.parentElement.append(loadingPara);

  const camera = new THREE.PerspectiveCamera(45, 2, 0.01, 50);
  camera.position.set(0, 10, 20);

  // const controls = new THREE.OrbitControls(camera, canvas);
  // controls.target.set(0, 5, 0);
  // controls.update();

  const mouse = new THREE.Vector2();
  const target = new THREE.Vector2();
  const windowHalf = new THREE.Vector2(
    window.innerWidth / 2,
    window.innerHeight / 2
  );
  canvas.addEventListener("mousemove", onMouseMove, false);
  canvas.addEventListener("mouseleave", onMouseLeave, false);

  const scene = new THREE.Scene();
  scene.background = null;

  const texture = new THREE.TextureLoader().load("images/map.jpg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  // texture.repeat.set( 0.5, 0.5 );
  texture.mapping = THREE.EquirectangularReflectionMapping;

  {
    const light = new THREE.AmbientLight("white", 1.7);
    light.name = "ambientLight";
    scene.add(light);
  }
  //cyan_pointLight
  {
    const light = new THREE.PointLight("#00f7ff", 0.25, 0.2);
    light.position.set(-21, 156, -21);
    light.name = "cyan_pointLight";
    scene.add(light);
  }

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.Math.degToRad(camera.fov * 0.5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);

    const direction = new THREE.Vector3()
      .subVectors(camera.position, boxCenter)
      .multiply(new THREE.Vector3(1, 0, 1))
      .normalize();

    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
    // camera.near = boxSize / 100;
    // camera.far = boxSize * 100;
    camera.updateProjectionMatrix();
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  {
    new THREE.GLTFLoader().load(
      // resource URL
      "images/web.glb",
      // called when the resource is loaded
      function (gltf) {
        const root = gltf.scene;
        root.name = "graphBox";
        root.rotation.x = 0.45;
        root.rotation.y = 5.7;
        
        // console.log(root);
        gltf.scene.traverse(function (node) {
          // console.log(node);
          if (node instanceof THREE.Mesh) {
            node.material.roughness = 1.6;
            node.material.envMapIntensity = 1.3;
            node.material.envMap = texture;
            node.material.flatShading = true;
            node.material.needsUpdate = true;
          }
        });

        scene.add(root);

        mixer = new THREE.AnimationMixer(root);
        mixer.clipAction(gltf.animations[0]).play();

        //HELPER shape
        const cubeFolder = gui.addFolder("shape rotation");
        cubeFolder.add(root.rotation, "x", 0, Math.PI * 2);
        cubeFolder.add(root.rotation, "y", 0, Math.PI * 2);
        cubeFolder.add(root.rotation, "z", 0, Math.PI * 2);
        cubeFolder.open();

        const box = new THREE.Box3().setFromObject(root);
        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());
        frameArea(boxSize * 0.8, boxSize, boxCenter, camera);

        // controls.maxDistance = boxSize;
        // controls.minDistance = boxSize / 1.5;
        // controls.target.copy(boxCenter);
        // controls.update();
      },
      // called while loading is progressing
      function (xhr) {
        // canvas.
        // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        let pr = ((xhr.loaded / xhr.total) * 100).toFixed(0);
        if (pr < 100) {
          loadingPara.innerText = "Please Wait, " + pr + "% loaded";
        } else {
          loadingPara.innerText = pr + "% loaded";
          canvas.classList.add("show");
          setTimeout(() => {
            loadingPara.remove();
          }, 3000);
        }
      },
      // called when loading has errors
      function (error) {
        console.error(error);
      }
    );
  }

  const list = document.querySelectorAll("#graph_list li");
  if (list != null || list != undefined) {
    list.forEach(function (el, i) {
      el.addEventListener("mouseenter", function (e) {
        list.forEach(function (m) {
          m.classList.remove("active");
        });
        e.target.classList.add("active");
        toggleElement(i + 1);
      });
      el.addEventListener("mouseleave", function (e) {
        // console.log(e.target,i);
        toggleElement(null);
        list.forEach(function (m) {
          m.classList.remove("active");
        });
      });

      el.addEventListener("touchenter", function (e) {
        list.forEach(function (m) {
          m.classList.remove("active");
        });
        e.target.classList.add("active");
        toggleElement(i + 1);
      });
      el.addEventListener("touchleave", function (e) {
        // console.log(e.target,i);
        toggleElement(null);
        list.forEach(function (m) {
          m.classList.remove("active");
        });
      });
    });
  }
  // console.log(list);
  function toggleElement(itemno) {
    var rootChild = [false, false, false, false];
    // console.log(rootChild.length, itemno);
    if (itemno != null && rootChild.length > itemno) {
      rootChild[itemno] = true;
    } else {
      rootChild = [true, true, true, true];
    }
    // console.log(rootChild);
    scene.getObjectByName("model_geo").visible = rootChild[0]; //op1
    scene.getObjectByName("Animation").visible = rootChild[1]; //op2
    scene.getObjectByName("FULCRUM_LAW").visible = rootChild[2]; //op3
    scene.getObjectByName("Legal_foundation").visible = rootChild[3]; //op4
  }

  function onMouseMove(event) {
    mouse.x = event.clientX - windowHalf.x;
    mouse.y = event.clientY - windowHalf.x;
  }
  function onMouseLeave(event) {
    mouse.x = 0;
    mouse.y = 0;
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    if (window.innerWidth < 991) {
    }
    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    target.x = (1 - mouse.x) * 0.0005;
    target.y = (1 - mouse.y) * -0.0003;
    scene.rotation.x += 0.05 * (target.y - scene.rotation.x);
    scene.rotation.y += 0.05 * (target.x - scene.rotation.y);

    if (mixer != undefined) {
      mixer.update(clock.getDelta());
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
