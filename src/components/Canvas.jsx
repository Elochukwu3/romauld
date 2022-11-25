import React, { useEffect, useRef } from "react";
import lappy from '../texture-img/lappy.png'
const THREE = window.THREE;

export const Canvas = () => {
  const mountRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    console.log(scene.background);
    const camera = new THREE.PerspectiveCamera(
      95,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(500, 500);
    mountRef.current.appendChild(renderer.domElement);
    const texture = new THREE.TextureLoader();
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    const material  = [
        new THREE.MeshBasicMaterial({map: texture.load(lappy)}),
        new THREE.MeshBasicMaterial({map: texture.load(lappy)}),
        new THREE.MeshBasicMaterial({map: texture.load(lappy)}),
        new THREE.MeshBasicMaterial({map: texture.load(lappy)}),
        new THREE.MeshBasicMaterial({map: texture.load(lappy)}),
        new THREE.MeshBasicMaterial({map: texture.load(lappy)}),
    ]
    scene.background = new THREE.Color( {color: "#101c30"} );

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
cube.rotation.y = -0.5 * Math.PI

camera.position.z = 5
camera.position.y = 0;
camera.position.x = .5;

let mouseX = 0, mouseY=0, targetX=0, targetY=0;


    window.addEventListener("mousemove", function (e) {
        mouseX =(e.clientX - window.innerWidth/2) 
        mouseY = (e.clientY - window.innerHeight/2)

    })


    const animate = function (time) {
        targetX = mouseX * 0.001
        targetY = mouseY * 0.001
    //   cube.rotation.y += 0.001
     
      cube.rotation.y = time/1000;

      cube.rotation.x += .5 * (targetY - cube.rotation.x)
      cube.rotation.y += .5 * (targetX - cube.rotation.y)
      cube.rotation.z += .5 * (targetY - cube.rotation.x)
      renderer.render(scene, camera);
      
     window.requestAnimationFrame(animate)
    };

animate()
    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
   

    window.addEventListener("resize", onWindowResize, false);


    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef} className=''></div>;
};

export const MemoizedCanvas = React.memo(Canvas);