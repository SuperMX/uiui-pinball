import Matter from 'Matter-js';
import { createBall } from './ball';

export const launch = function launch() {
  let launched = false;

	document.addEventListener("touchstart", function touchstart(e) {
		var x = e.touches.length;
		if (x === 3) {
		let pinball = createBall();
		Matter.Body.setPosition(pinball, { x: 525, y: 650 });
		Matter.Body.setVelocity(pinball, {x: 0, y: 10 });
    }
	}
	);

  document.addEventListener("keydown", function keyDown(e) {
    let keyCode = e.keyCode;
	var x = e.touches[0].clientX;
	var y = e.touches[0].clientY;
    if (keyCode === 38 || keyCode === 32 || x === 3) {
      let pinball = createBall();
      Matter.Body.setPosition(pinball, { x: 525, y: 650 });
      Matter.Body.setVelocity(pinball, {x: 0, y: 10 });
    }

  }
);
};
