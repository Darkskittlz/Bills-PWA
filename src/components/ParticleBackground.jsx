import React, { Component } from "react";
import ParticlesBg from "particles-bg";

export class ParticleBackground extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    let config = {
      num: [7, 7],
      rps: 0.1,
      radius: [1, 60],
      life: [1.9, 3],
      v: [1, 1],
      tha: [-40, 40],
      alpha: [0.8, 0],
      scale: [.1, 0.2],
      position: "all",
      color: ["random", "#ff0000"],
      cross: "dead",
      // emitter: "follow",
      random: 1
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
      });
    }

    return (
      <div>
        <ParticlesBg type="custom" config={config} bg={true} />
      </div>
    );
  }
}

