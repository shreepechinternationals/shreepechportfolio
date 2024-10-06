// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const Threejs = () => {
//   const mountRef = useRef(null);
//   const sceneRef = useRef(null);
//   const cameraRef = useRef(null);
//   const rendererRef = useRef(null);
//   const planeRef = useRef(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     const width = mount.clientWidth;
//     const height = 370; // Fixed height for the footer background

//     // Scene setup
//     const scene = new THREE.Scene();
//     sceneRef.current = scene;

//     // Camera setup
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.z = 200; // Ensure the camera is far enough
//     cameraRef.current = camera;

//     // Renderer setup with transparent background
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setClearColor(0x000000, 0); // Transparent background
//     renderer.setSize(width, height);
//     mount.appendChild(renderer.domElement);
//     rendererRef.current = renderer;

//     // Create a plane with ocean-like colors
//     const geometry = new THREE.PlaneGeometry(width, height, 100, 100);
//     const colors = new Float32Array(geometry.attributes.position.count * 3); // 3 for r, g, b
//     geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

//     const material = new THREE.MeshPhongMaterial({
//       vertexColors: true,
//       shininess: 100,
//       side: THREE.DoubleSide,
//     });

//     const plane = new THREE.Mesh(geometry, material);
//     scene.add(plane);
//     planeRef.current = plane;

//     // Add lights
//     const light = new THREE.PointLight(0xffffff, 1, 500);
//     light.position.set(0, 250, 100);
//     scene.add(light);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     // Update colors dynamically (darker oceanic gradient)
//     const updateColors = () => {
//       const positions = geometry.attributes.position.array;
//       const colors = geometry.attributes.color.array;

//       for (let i = 0; i < positions.length; i += 3) {
//         const z = positions[i + 2];
//         const color = new THREE.Color();

//         // Darker oceanic gradient based on Z position
//         const baseColor1 = new THREE.Color(0x000080); // Dark Blue
//         const baseColor2 = new THREE.Color(0x1e90ff); // Dodger Blue

//         // Interpolating colors based on Z position
//         const t = (z + 50) / 100; // Normalize z position for blending
//         color.lerpColors(baseColor1, baseColor2, t); // Mix the two colors

//         // Set the color array for the vertices
//         colors[i] = color.r;
//         colors[i + 1] = color.g;
//         colors[i + 2] = color.b;
//       }

//       geometry.attributes.color.needsUpdate = true;
//     };

//     // Animate ocean-like waves
//     let animationId;
//     const animate = () => {
//       animationId = requestAnimationFrame(animate);

//       const time = Date.now() * 0.0005; // Slower animation for oceanic effect
//       const vertices = plane.geometry.attributes.position.array;

//       for (let i = 0; i < vertices.length; i += 3) {
//         const x = vertices[i];
//         const y = vertices[i + 1];

//         // Distance-based wave pattern for more realistic ocean waves
//         const distance = Math.sqrt(x * x + y * y);

//         // Create more complex wave movement using sine and cosine for rolling waves
//         vertices[i + 2] = Math.sin(distance * 0.03 + time) * 10 + 
//                           Math.cos(distance * 0.05 + time * 0.7) * 10;
//       }

//       plane.geometry.attributes.position.needsUpdate = true;
//       updateColors();
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       const newWidth = mount.clientWidth;
//       camera.aspect = newWidth / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(newWidth, height);

//       plane.geometry.dispose();
//       plane.geometry = new THREE.PlaneGeometry(newWidth, height, 100, 100);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', handleResize);
//       mount.removeChild(renderer.domElement);
//       scene.remove(plane);
//       plane.geometry.dispose();
//       material.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} id="threejs-background" />;
// };

// export default Threejs;

// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const Threejs = () => {
//   const mountRef = useRef(null);
//   const sceneRef = useRef(null);
//   const cameraRef = useRef(null);
//   const rendererRef = useRef(null);
//   const planeRef = useRef(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     const width = mount.clientWidth;
//     const height = 370; // Fixed height for the footer background

//     // Scene setup
//     const scene = new THREE.Scene();
//     sceneRef.current = scene;

//     // Camera setup
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.z = 200; // Ensure the camera is far enough
//     cameraRef.current = camera;

//     // Renderer setup with transparent background
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setClearColor(0x000000, 0); // Transparent background
//     renderer.setSize(width, height);
//     mount.appendChild(renderer.domElement);
//     rendererRef.current = renderer;

//     // Create a plane for waves
//     const geometry = new THREE.PlaneGeometry(width, height, 100, 100);
//     const colors = new Float32Array(geometry.attributes.position.count * 3); // 3 for r, g, b
//     geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

//     const material = new THREE.MeshPhongMaterial({
//       vertexColors: true,
//       shininess: 100,
//       side: THREE.DoubleSide,
//     });

//     const plane = new THREE.Mesh(geometry, material);
//     scene.add(plane);
//     planeRef.current = plane;

//     // Add lights
//     const light = new THREE.PointLight(0xffffff, 1, 500);
//     light.position.set(0, 250, 100);
//     scene.add(light);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     // Update colors dynamically for ocean
//     const updateColors = () => {
//       const positions = geometry.attributes.position.array;
//       const colors = geometry.attributes.color.array;

//       for (let i = 0; i < positions.length; i += 3) {
//         const z = positions[i + 2];
//         const color = new THREE.Color();

//         // Ocean colors based on Z position
//         const baseColor1 = new THREE.Color(0x000080); // Dark Blue
//         const baseColor2 = new THREE.Color(0x1e90ff); // Dodger Blue

//         // Interpolating colors based on Z position
//         const t = (z + 50) / 100; // Normalize z position for blending
//         color.lerpColors(baseColor1, baseColor2, t); // Mix the two colors

//         // Set the color array for the vertices
//         colors[i] = color.r;
//         colors[i + 1] = color.g;
//         colors[i + 2] = color.b;
//       }

//       geometry.attributes.color.needsUpdate = true;
//     };

//     // Animate ocean waves with a horizontal effect
//     let animationId;
//     const animate = () => {
//       animationId = requestAnimationFrame(animate);

//       const time = Date.now() * 0.001; // Control speed of wave animation
//       const vertices = plane.geometry.attributes.position.array;

//       for (let i = 0; i < vertices.length; i += 3) {
//         const x = vertices[i];
//         const y = vertices[i + 1];

//         // Create wave movement with horizontal patterns
//         const waveHeight = Math.sin(x * 0.1 + time) * 5; // Horizontal wave effect
//         vertices[i + 2] = waveHeight; // Apply wave height to z-axis
//       }

//       plane.geometry.attributes.position.needsUpdate = true;
//       updateColors();
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       const newWidth = mount.clientWidth;
//       camera.aspect = newWidth / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(newWidth, height);

//       plane.geometry.dispose();
//       plane.geometry = new THREE.PlaneGeometry(newWidth, height, 100, 100);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', handleResize);
//       mount.removeChild(renderer.domElement);
//       scene.remove(plane);
//       plane.geometry.dispose();
//       material.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} id="threejs-background" />;
// };

// export default Threejs;

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Threejs = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const cubes = useRef([]);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = 350; // Fixed height for the footer background

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 250; // Ensure the camera is far enough
    cameraRef.current = camera;

    // Renderer setup with transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Define colors for cubes
    const colors = [
      '#FFFFFF', '#2CC2C3', '#28B0BD', 
      '#00008B', '#DC143C', '#143094'
    ];

    // Create cubes and add them to the scene
    const createCubes = () => {
      for (let i = 0; i < 150; i++) {
        const geometry = new THREE.SphereGeometry(0.5, 16, 16);
        const material = new THREE.MeshBasicMaterial({ color: colors[i % colors.length] });
        const cube = new THREE.Mesh(geometry, material);
        
        // Set random position for each cube
        cube.position.x = Math.random() * width - width / 2;
        cube.position.y = Math.random() * height - height / 2;
        cube.position.z = Math.random() * -50;

        // Scale cubes to be more visually appealing
        cube.scale.set(Math.random() + 0.5, Math.random() + 0.5, Math.random() + 0.5);
        
        cubes.current.push(cube);
        scene.add(cube);
      }
    };

    createCubes();

    // Animate cubes to simulate code being transferred
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      cubes.current.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Move the cubes towards the camera
        cube.position.z += 0.1;

        // Reset position if cube goes beyond a certain threshold
        if (cube.position.z > 100) {
          cube.position.z = Math.random() * -50;
          cube.position.x = Math.random() * width - width / 2;
          cube.position.y = Math.random() * height - height / 2;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = mount.clientWidth;
      camera.aspect = newWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      cubes.current.forEach(cube => scene.remove(cube));
    };
  }, []);

  return <div ref={mountRef} id="threejs-background" />;
};

export default Threejs;

