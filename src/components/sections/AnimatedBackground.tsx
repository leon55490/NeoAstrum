import React, { useRef, useEffect } from 'react';

const STAR_COUNT = 80;
const STAR_COLOR = '#3b82f6';
const STAR_SIZE = 2;
const STAR_SPEED = 0.8;

function randomBetween(a: number, b: number) {
	return a + Math.random() * (b - a);
}

const AnimatedBackground: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const stars = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let width = (canvas.width = window.innerWidth);
		let height = (canvas.height = window.innerHeight);

		function resize() {
			if (!canvas) return;
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		}
		window.addEventListener('resize', resize);

		// Inicializa estrellas
		stars.current = Array.from({ length: STAR_COUNT }, () => ({
			x: randomBetween(0, width),
			y: randomBetween(0, height),
			vx: randomBetween(-STAR_SPEED, STAR_SPEED),
			vy: randomBetween(-STAR_SPEED, STAR_SPEED),
		}));

		function draw() {
			if (!ctx) return;
			ctx.clearRect(0, 0, width, height);

			// Dibuja líneas entre estrellas cercanas
			for (let i = 0; i < STAR_COUNT; i++) {
				for (let j = i + 1; j < STAR_COUNT; j++) {
					const a = stars.current[i];
					const b = stars.current[j];
					const dist = Math.hypot(a.x - b.x, a.y - b.y);
					if (dist < 120) {
						ctx.strokeStyle = 'rgba(59,130,246,0.15)';
						ctx.lineWidth = 1;
						ctx.beginPath();
						ctx.moveTo(a.x, a.y);
						ctx.lineTo(b.x, b.y);
						ctx.stroke();
					}
				}
			}

			// Dibuja estrellas
			for (const star of stars.current) {
				ctx.beginPath();
				ctx.arc(star.x, star.y, STAR_SIZE, 0, Math.PI * 2);
				ctx.fillStyle = STAR_COLOR;
				ctx.shadowColor = STAR_COLOR;
				ctx.shadowBlur = 8;
				ctx.fill();
				ctx.shadowBlur = 0;
			}
		}

		function update() {
			for (const star of stars.current) {
				star.x += star.vx;
				star.y += star.vy;
				if (star.x < 0 || star.x > width) star.vx *= -1;
				if (star.y < 0 || star.y > height) star.vy *= -1;
			}
		}

		function animate() {
			update();
			draw();
			requestAnimationFrame(animate);
		}

		animate();

		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 w-full h-full pointer-events-none z-0"
			style={{ position: 'absolute', top: 0, left: 0 }}
		/>
	);
};

export default AnimatedBackground;
