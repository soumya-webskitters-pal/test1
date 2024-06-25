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
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMappingExposure = 1;

  var mixer;
  const clock = new THREE.Clock();

  //show loader
  const loadingPara = document.createElement("p");
  loadingPara.innerText = "Please Wait, loading...";
  canvas.parentElement.append(loadingPara);

  const camera = new THREE.PerspectiveCamera(45, 2, 0.01, 50);
  camera.position.set(0, 10, 20);
  //HELPER camera
  const cameraFolder = gui.addFolder("Camera");
  cameraFolder.add(camera.position, "x", 0, 10);
  cameraFolder.add(camera.position, "y", 0, 10);
  cameraFolder.add(camera.position, "z", 0, 10);
  cameraFolder.open();

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
  texture.wrapS = texture.wrapT =THREE.RepeatWrapping;
  // texture.repeat.set( 0.5, 0.5 );
  texture.mapping = THREE.EquirectangularReflectionMapping;

  {
    const light = new THREE.AmbientLight("white", 1);
    light.name = "ambientLight";
    scene.add(light);
  }
/*
  //cyan_pointLight
  {
    const light = new THREE.PointLight("#0d7271", 0.7, 1);
    light.position.set(-21, 156, -21);
    light.name = "cyan_pointLight";
    scene.add(light);
    scene.add(new THREE.PointLightHelper(light, 1));
    //HELPER light
    const cubeFolder = gui.addFolder("cyan_pointLight");
    cubeFolder.add(light.position, "x", -500, 500);
    cubeFolder.add(light.position, "y", -500, 500);
    cubeFolder.add(light.position, "z", -500, 500);
    cubeFolder.open();
  }
  //dark_blue_pointLight
  {
    const light = new THREE.PointLight("#061a5d", 0.8, 1);
    light.position.set(24, 68, -21);
    light.name = "dark_blue_pointLight";
    scene.add(light);
    scene.add(new THREE.PointLightHelper(light, 1));

    //HELPER light
    const cubeFolder = gui.addFolder("dark_blue_pointLight");
    cubeFolder.add(light.position, "x", -500, 500);
    cubeFolder.add(light.position, "y", -500, 500);
    cubeFolder.add(light.position, "z", -500, 500);
    cubeFolder.open();
  }
  //dark_blue2_pointLight
  {
    const light = new THREE.PointLight("#061a5d", 0.8, 1);
    light.position.set(45, -11, -11);
    light.name = "dark_blue2_pointLight";
    scene.add(light);
    scene.add(new THREE.PointLightHelper(light, 1));

    //HELPER light
    const cubeFolder = gui.addFolder("dark_blue2_pointLight");
    cubeFolder.add(light.position, "x", -500, 500);
    cubeFolder.add(light.position, "y", -500, 500);
    cubeFolder.add(light.position, "z", -500, 500);
    cubeFolder.open();
  }
  //pink_pointLight
  {
    const light = new THREE.PointLight("#920e78", 0.5, 0.5);
    light.position.set(-209, -198, 111);
    light.name = "pink_pointLight";
    scene.add(light);
    scene.add(new THREE.PointLightHelper(light, 1));

    //HELPER light
    const cubeFolder = gui.addFolder("pink_pointLight");
    cubeFolder.add(light.position, "x", -500, 500);
    cubeFolder.add(light.position, "y", -500, 500);
    cubeFolder.add(light.position, "z", -500, 500);
    cubeFolder.open();
  }
  //pink2_pointLight
  {
    const light = new THREE.PointLight("#920e78", 0.5, 0.5);
    light.position.set(-33, -11, 12);
    light.name = "pink2_pointLight";
    scene.add(light);
    scene.add(new THREE.PointLightHelper(light, 1));

    //HELPER light
    const cubeFolder = gui.addFolder("pink2_pointLight");
    cubeFolder.add(light.position, "x", -500, 500);
    cubeFolder.add(light.position, "y", -500, 500);
    cubeFolder.add(light.position, "z", -500, 500);
    cubeFolder.open();
  }
  //pink3_pointLight
  {
    const light = new THREE.PointLight("#920e78", 0.02, 1);
    light.position.set(260, -33, -126);
    light.name = "pink3_pointLight";
    scene.add(light);
    scene.add(new THREE.PointLightHelper(light, 1));

    //HELPER light
    const cubeFolder = gui.addFolder("pink3_pointLight");
    cubeFolder.add(light.position, "x", -500, 500);
    cubeFolder.add(light.position, "y", -500, 500);
    cubeFolder.add(light.position, "z", -500, 500);
    cubeFolder.open();
  }
  //yellow_pointLight
  {
    const light = new THREE.PointLight("#978e07", 0.3, 0.5);
    light.position.set(-225, -304, 12);
    light.name = "yellow_pointLight";
    scene.add(light);
    scene.add(new THREE.PointLightHelper(light, 1));

    //HELPER light
    const cubeFolder = gui.addFolder("yellow_pointLight");
    cubeFolder.add(light.position, "x", -500, 500);
    cubeFolder.add(light.position, "y", -500, 500);
    cubeFolder.add(light.position, "z", -500, 500);
    cubeFolder.open();
  }
  //green_pointLight
  {
    const light = new THREE.PointLight("#074d23", 0.3, 0.8);
    light.position.set(-165, -145, -45);
    light.name = "green_pointLight";
    scene.add(light);
    scene.add(new THREE.PointLightHelper(light, 1));

    //HELPER light
    const cubeFolder = gui.addFolder("green_pointLight");
    cubeFolder.add(light.position, "x", -500, 500);
    cubeFolder.add(light.position, "y", -500, 500);
    cubeFolder.add(light.position, "z", -500, 500);
    cubeFolder.open();
  }
  //light_green_pointLight
  {
    const light = new THREE.PointLight("#477d08", 0.3, 0.8);
    light.position.set(35, 1, -11);
    light.name = "light_green_pointLight";
    scene.add(light);
    scene.add(new THREE.PointLightHelper(light, 1));

    //HELPER light
    const cubeFolder = gui.addFolder("light_green_pointLight");
    cubeFolder.add(light.position, "x", -500, 500);
    cubeFolder.add(light.position, "y", -500, 500);
    cubeFolder.add(light.position, "z", -500, 500);
    cubeFolder.open();
  }
*/

// //cyan_pointLight
// {
//   const light = new THREE.PointLight("#0d7271", 0.3, 0.2);
//   light.position.set(-21, 156, -21);
//   light.name = "cyan_pointLight";
//   scene.add(light);
// }
//dark_blue2_pointLight
// {
//   const light = new THREE.PointLight("#061a5d", 0.4, 0.5);
//   light.position.set(45, -11, -11);
//   light.name = "dark_blue2_pointLight";
//   scene.add(light);
// }
//pink_pointLight
// {
//   const light = new THREE.PointLight("#510742", 0.5, 0.5);
//   light.position.set(-209, -198, 111);
//   light.name = "pink_pointLight";
//   scene.add(light);
//   scene.add(new THREE.PointLightHelper(light, 1));

//   //HELPER light
//   const cubeFolder = gui.addFolder("pink_pointLight");
//   cubeFolder.add(light.position, "x", -500, 500);
//   cubeFolder.add(light.position, "y", -500, 500);
//   cubeFolder.add(light.position, "z", -500, 500);
//   cubeFolder.open();
// }
/*
//pink2_pointLight
{
  const light = new THREE.PointLight("#920e78", 0.5, 0.5);
  light.position.set(-33, -11, 12);
  light.name = "pink2_pointLight";
  scene.add(light);
  scene.add(new THREE.PointLightHelper(light, 1));

  //HELPER light
  const cubeFolder = gui.addFolder("pink2_pointLight");
  cubeFolder.add(light.position, "x", -500, 500);
  cubeFolder.add(light.position, "y", -500, 500);
  cubeFolder.add(light.position, "z", -500, 500);
  cubeFolder.open();
}
//pink3_pointLight
{
  const light = new THREE.PointLight("#920e78", 0.02, 1);
  light.position.set(260, -33, -126);
  light.name = "pink3_pointLight";
  scene.add(light);
  scene.add(new THREE.PointLightHelper(light, 1));

  //HELPER light
  const cubeFolder = gui.addFolder("pink3_pointLight");
  cubeFolder.add(light.position, "x", -500, 500);
  cubeFolder.add(light.position, "y", -500, 500);
  cubeFolder.add(light.position, "z", -500, 500);
  cubeFolder.open();
}
//yellow_pointLight
{
  const light = new THREE.PointLight("#978e07", 0.3, 0.5);
  light.position.set(-225, -304, 12);
  light.name = "yellow_pointLight";
  scene.add(light);
  scene.add(new THREE.PointLightHelper(light, 1));

  //HELPER light
  const cubeFolder = gui.addFolder("yellow_pointLight");
  cubeFolder.add(light.position, "x", -500, 500);
  cubeFolder.add(light.position, "y", -500, 500);
  cubeFolder.add(light.position, "z", -500, 500);
  cubeFolder.open();
}
//green_pointLight
{
  const light = new THREE.PointLight("#074d23", 0.3, 0.8);
  light.position.set(-165, -145, -45);
  light.name = "green_pointLight";
  scene.add(light);
  scene.add(new THREE.PointLightHelper(light, 1));

  //HELPER light
  const cubeFolder = gui.addFolder("green_pointLight");
  cubeFolder.add(light.position, "x", -500, 500);
  cubeFolder.add(light.position, "y", -500, 500);
  cubeFolder.add(light.position, "z", -500, 500);
  cubeFolder.open();
}
//light_green_pointLight
{
  const light = new THREE.PointLight("#477d08", 0.3, 0.8);
  light.position.set(35, 1, -11);
  light.name = "light_green_pointLight";
  scene.add(light);
  scene.add(new THREE.PointLightHelper(light, 1));

  //HELPER light
  const cubeFolder = gui.addFolder("light_green_pointLight");
  cubeFolder.add(light.position, "x", -500, 500);
  cubeFolder.add(light.position, "y", -500, 500);
  cubeFolder.add(light.position, "z", -500, 500);
  cubeFolder.open();
}*/

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
      "images/animation.glb",
      // called when the resource is loaded
      function (gltf) {
        const root = gltf.scene;
        root.name = "graphBox";
        root.rotation.x = 0.65;
        root.rotation.y = 5.7;
        gltf.scene.traverse(function (node) {
          if (node instanceof THREE.Mesh) {
            // node.castShadow = false;
            // node.receiveShadow = false;
            // node.material.side = THREE.DoubleSide;
            // node.material.metalness = 0.5;
            // node.material.clearcoat = 1;
            // node.material.depthWrite = true;
            node.material.roughness = 1.8;
            node.material.envMapIntensity = 1.95;
            node.material.envMap = texture;
            node.material.needsUpdate = true;
            node.material.flatShading =true
          }
        });

        scene.add(root);

        mixer = new THREE.AnimationMixer(root);
        mixer.clipAction(gltf.animations[0]).play();

        //HELPER shape
        const cubeFolder = gui.addFolder("shape");
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
        }
      },
      // called when loading has errors
      function (error) {
        console.error(error);
      }
    );
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
    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    target.x = (1 - mouse.x) * 0.0002;
    target.y = (1 - mouse.y) * 0.0002;
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
