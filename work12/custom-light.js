"use strict";

/* global THREE */
//load 3d model
function loadModel(modelEl) {
  //HELPER
  const gui = new dat.GUI();
  const canvas = document.getElementById(modelEl);
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure =1;

  //show loader
  const loadingPara = document.createElement("p");
  loadingPara.innerText = "Please Wait, loading...";
  canvas.parentElement.append(loadingPara);
  loadingPara.style.cssText = `
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index:-1
`;

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 2.7, 7.5);

  const mouse = new THREE.Vector2();
  const target = new THREE.Vector2();
  const windowHalf = new THREE.Vector2(
    window.innerWidth / 2,
    window.innerHeight / 2
  );
  canvas.addEventListener("mousemove", onMouseMove, false);

  const scene = new THREE.Scene();
  scene.background = null;
  // scene.background = new THREE.Color("#d6d6d6");
  {
    const light = new THREE.AmbientLight("white",0.5);
    scene.add(light);
  }
  {
    const directionalLight =new THREE.DirectionalLight('white', 1);
    directionalLight.position.set(-8.15, 10, -0.075);
    scene.add(directionalLight);
  }
  {
    var material = new THREE.MeshBasicMaterial({ color: "none" });
    var cube; 
    var outlineMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
var outlineMesh;
  }
  {
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const outlineMaterial = new THREE.MeshBasicMaterial( { color: "gray", side: THREE.BackSide } );
    // console.log(outlineMaterial);
    new THREE.OBJLoader().load(
      // resource URL
      "house.obj",
      // called when the resource is loaded
      function (objf) {
        const root = objf;
        root.name = "home";
        root.rotation.y = 2.1;
        root.position.x = 1.5;

        // console.log(objf);
        objf.traverse(function (node) {
          // console.log(node);
          if (node instanceof THREE.Mesh) {
            // console.log(node);
            // node.material = outlineMaterial;
            node.material.flatShading = true;
            node.material.needsUpdate = true;
            // node.material.wireframe = true;
            // node.castShadow = true;
            // node.receiveShadow = true;
            // node.material.depthBias =2.1;
            // node.material.depthMult=200;
            // node.material.normalBias=1;
            // node.material.normalMult=1;
            node.material.blendDst =10;
            console.log(node);
            
//             cube = new THREE.Mesh(node.geometry, material);
//             scene.add(cube);
//             outlineMesh  = new THREE.Mesh(node.geometry, outlineMaterial);
// outlineMesh.scale.set(1.01, 1.01, 1.01);
// scene.add(outlineMesh);
// node.visible=false;
          }
        });
        scene.add(root);
      },
      // called while loading is progressing
      function (xhr) {
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
  
  //  camera.lookAt(scene.position);	

  function onMouseMove(event) {
    mouse.x = event.clientX - windowHalf.x;
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
    target.x = (mouse.x - 1) * 0.0004;
    scene.rotation.y += 0.05 * (target.x - scene.rotation.y);

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

loadModel("house");
