const sun = document.getElementById('sun');
const mercury = document.getElementById('mercury');
const venus = document.getElementById('venus');
const earth = document.getElementById('earth');
const mars = document.getElementById('mars');

let angle = 0;

function movePlanets() {
  angle += 0.04; // Increment the angle for animation

  // Define the orbit radius and speed for each planet
  const mercuryOrbit = 100+80;
  const venusOrbit = 150+50;
  const earthOrbit = 200+50;
  const marsOrbit = 250+50;

  // Move planets along their orbits using trigonometry
  mercury.style.left = `${Math.cos(angle) * mercuryOrbit}px`;
  mercury.style.top = `${Math.sin(angle) * mercuryOrbit}px`;

  venus.style.left = `${Math.cos(angle * 0.75) * venusOrbit}px`;
  venus.style.top = `${Math.sin(angle * 0.75) * venusOrbit}px`;

  earth.style.left = `${Math.cos(angle * 0.5) * earthOrbit}px`;
  earth.style.top = `${Math.sin(angle * 0.5) * earthOrbit}px`;

  mars.style.left = `${Math.cos(angle * 0.25) * marsOrbit}px`;
  mars.style.top = `${Math.sin(angle * 0.25) * marsOrbit}px`;

  requestAnimationFrame(movePlanets);
}

movePlanets();
