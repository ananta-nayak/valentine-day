import React, { useRef, useEffect, useCallback } from 'react';

const PARTICLE_COUNT = 140;
const CONNECT_RADIUS = 220;
const PARTICLE_LINK_DISTANCE = 130;
const LINE_OPACITY_NETWORK = 0.35;
const LINE_OPACITY_ORIGIN_MAX = 0.85;
const DOT_RADIUS = 1.4;

function CursorConstellation() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1e4, y: -1e4 });
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  const initParticles = useCallback((w, h) => {
    const arr = [];
    const cols = Math.max(1, Math.floor(Math.sqrt(PARTICLE_COUNT * (w / h))));
    const rows = Math.ceil(PARTICLE_COUNT / cols);
    const stepX = w / (cols + 1);
    const stepY = h / (rows + 1);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      arr.push({
        x: stepX * (col + 1) + (Math.random() - 0.5) * stepX * 0.6,
        y: stepY * (row + 1) + (Math.random() - 0.5) * stepY * 0.6,
      });
    }
    return arr;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    let particles = [];

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = initParticles(w, h);
      particles = particlesRef.current;
    };

    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const onLeave = () => {
      mouseRef.current.x = -1e4;
      mouseRef.current.y = -1e4;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const cursorActive = mx > 0 && my > 0 && mx < w && my < h;

      if (cursorActive) {
        const sorted = particles
          .map((p) => {
            const dx = p.x - mx;
            const dy = p.y - my;
            return { p, dist: Math.sqrt(dx * dx + dy * dy) };
          })
          .filter((d) => d.dist < CONNECT_RADIUS)
          .sort((a, b) => a.dist - b.dist);

        sorted.forEach(({ p, dist }) => {
          const t = 1 - dist / CONNECT_RADIUS;
          const alpha = t * t * LINE_OPACITY_ORIGIN_MAX;
          const lineWidth = 0.7 + t * 0.6;
          ctx.beginPath();
          ctx.moveTo(mx, my);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        });

        ctx.beginPath();
        ctx.arc(mx, my, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < PARTICLE_LINK_DISTANCE) {
            const t = 1 - dist / PARTICLE_LINK_DISTANCE;
            const alpha = t * LINE_OPACITY_NETWORK * (0.7 + 0.3 * Math.sin((i + j) * 0.5));
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.6 + t * 0.4;
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

export default CursorConstellation;
