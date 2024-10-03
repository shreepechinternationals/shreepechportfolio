import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Threejs = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const planeRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = 300; // Fixed height for the footer background

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 300; // Ensure the camera is far enough
    cameraRef.current = camera;

    // Renderer setup with transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a plane with ocean-like colors
    const geometry = new THREE.PlaneGeometry(width, height, 100, 100);
    const colors = new Float32Array(geometry.attributes.position.count * 3); // 3 for r, g, b
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.MeshPhongMaterial({
      vertexColors: true,
      shininess: 100,
      side: THREE.DoubleSide,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    planeRef.current = plane;

    // Add lights
    const light = new THREE.PointLight(0xffffff, 1, 500);
    light.position.set(0, 250, 100);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Update colors dynamically (oceanic gradient)
    const updateColors = () => {
      const positions = geometry.attributes.position.array;
      const colors = geometry.attributes.color.array;

      for (let i = 0; i < positions.length; i += 3) {
        const z = positions[i + 2];
        const color = new THREE.Color();
      
        // Oceanic gradient based on Z position
        // Adjust the colors as needed
        const baseColor1 = new THREE.Color(0x00bfff); // Bright Deep Sky Blue
        const baseColor2 = new THREE.Color(0x7fffd4); // Aquamarine
      
        // Interpolating colors based on Z position
        const t = (z + 50) / 100; // Normalize z position for blending
        color.lerpColors(baseColor1, baseColor2, t); // Mix the two colors
      
        // Set the color array for the vertices
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
      }

      geometry.attributes.color.needsUpdate = true;
    };

    // Animate ocean-like waves
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const time = Date.now() * 0.0003; // Slower animation for smoother waves
      const vertices = plane.geometry.attributes.position.array;

      for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const y = vertices[i + 1];
        const distance = Math.sqrt(x * x + y * y);
        // Smoother sinusoidal wave for oceanic effect
        vertices[i + 2] = Math.sin(distance * 0.04 + time) * 15; // Increased amplitude for larger waves
      }

      plane.geometry.attributes.position.needsUpdate = true;
      updateColors();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = mount.clientWidth;
      camera.aspect = newWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, height);

      plane.geometry.dispose();
      plane.geometry = new THREE.PlaneGeometry(newWidth, height, 100, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      scene.remove(plane);
      plane.geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} id="threejs-background" />;
};

export default Threejs;
