import React, { Component, useEffect } from "react";
// import ParticlesBg from "particles-bg";
import { tsParticles } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import DollarIMG from "/dollarIMG.png"

export const ParticleBackground = () => {
  useEffect(() => {
    const loadParticles = async () => {
      // Load the stars preset into tsParticles
      await loadStarsPreset(tsParticles);

      // Initialize tsParticles with the 'stars' preset
      await tsParticles.load("tsparticles", {
        preset: "stars", // Use the stars preset
        background: {
          color: {
            value: "#0000000"
          },
          image: url(),
          position: "50% 50%",
          repeat: "no-repeat",
          size: "20%",
          opacity: 1
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "repulse" },
            onHover: { enable: true, mode: "bubble" },
            resize: true
          }
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          opacity: {
            value: { min: 0.1, max: 1 },
            anim: { enable: true, speed: 1 }
          },
          size: {
            value: { min: 1, max: 3 },
            anim: { enable: true, speed: 5 }
          },
          move: {
            enable: true,
            speed: { min: 0.1, max: 1 }
          }
        }
      });
    };

    loadParticles(); // Call the async function when component is mounted
  }, []);

  return <div id="tsparticles" style={{ position: "absolute", width: "100%", height: "100%" }}></div>;
}

