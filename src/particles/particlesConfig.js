const particlesConfig = {
  background: {
  color: {
      value: "#1033BC",
      image: 'radial-gradient(rgb(74, 0, 0), rgb(0, 0, 0));',
      animation: {
        enable: true,
        speed: 150,
        sync: false
    }
  },
  },
  fpsLimit: 120,
  interactivity: {
  events: {
      onClick: {
      enable: false,
      mode: "push",
      },
      onHover: {
      enable: true,
      mode: "grab",
      },
      resize: true,
  },
  modes: {
      bubble: {
      distance: 400,
      duration: 2,
      opacity: 0.8,
      size: 40,
      },
      push: {
      quantity: 4,
      },
      repulse: {
      distance: 200,
      duration: 1.4,
      },
  },
  },
  particles: {
  color: {
      value: "#ffffff",
  },
  links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
  },
  collisions: {
      enable: true,
  },
  move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 2,
      straight: false,
  },
  number: {
      density: {
      enable: true,
      area: 1000,
      },
      value: 90,
  },
  opacity: {
      value: 0.5,
  },
  shape: {
      type: "circle",
  },
  size: {
      random: true,
      value: 3,
  },
  },
  detectRetina: true,
}

export default particlesConfig;