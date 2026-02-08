import { useRef, useEffect } from 'react';

const NODES = 48;
const CONNECT_DIST = 180;
const DOT_RADIUS = 1.2;
const LINE_OPACITY = 0.06;

function initNodes(width, height) {
  return Array.from({ length: NODES }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    pulse: Math.random() * Math.PI * 2,
  }));
}

export default function NetworkBackground() {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      nodesRef.current = initNodes(width, height);
    };
    setSize();
    window.addEventListener('resize', setSize);

    const draw = () => {
      const nodes = nodesRef.current;
      const t = Date.now() * 0.001;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const d = Math.hypot(dx, dy);
          if (d < CONNECT_DIST) {
            const pulse = Math.sin(t + nodes[i].pulse) * 0.5 + 0.5;
            const alpha = LINE_OPACITY * (1 - d / CONNECT_DIST) * (0.4 + 0.6 * pulse);
            ctx.strokeStyle = `rgba(255, 77, 109, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));

        const glow = Math.sin(t * 2 + n.pulse) * 0.3 + 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 143, 163, ${glow * 0.6})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, DOT_RADIUS * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 77, 109, ${glow * 0.08})`;
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.9 }}
      aria-hidden
    />
  );
}
