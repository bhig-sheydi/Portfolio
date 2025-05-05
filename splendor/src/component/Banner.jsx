import React, { useRef, useEffect } from 'react';
import me from '../assets/me.png';

const Banner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const width = canvas.width;
    const height = canvas.height;

    const colors = [
      'rgba(255, 105, 180, 1)',
      'rgba(139, 69, 19, 1)',
      'rgba(30, 144, 255, 1)',
      'rgba(255, 165, 0, 1)',
      'rgba(34, 139, 34, 1)',
      'rgba(148, 0, 211, 1)',
      'rgba(0, 255, 255, 1)'
    ];

    const baseY = height / 2;
    const strips = [];

    const STRIP_COUNT = 25; // Reduced for performance
    const POINT_COUNT = 120; // Fewer points per path

    for (let i = 0; i < STRIP_COUNT; i++) {
      const color = colors[i % colors.length];
      strips.push({
        x: -Math.random() * 300,
        y: baseY + (i - STRIP_COUNT / 2) * 8,
        amp: 20 + Math.random() * 15,
        freq: 0.01 + Math.random() * 0.003,
        speed: 4 + Math.random() * 1.5,
        color,
        pathPoints: []
      });
    }

    let animationFrame;
    let frameCount = 0;
    let isDarkMode = document.documentElement.classList.contains('dark');

    const draw = () => {
      animationFrame = requestAnimationFrame(draw);
      frameCount++;
      if (frameCount % 3 !== 0) return; // Only draw every 3rd frame

      ctx.fillStyle = isDarkMode ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.015)';
      ctx.fillRect(0, 0, width, height);

      strips.forEach(stream => {
        stream.x += stream.speed;
        if (stream.x > width + 300) stream.x = -300;

        const path = [];
        for (let i = 0; i < POINT_COUNT; i++) {
          const x = stream.x + i;
          const y = stream.y +
            Math.sin((stream.x + i) * stream.freq) * stream.amp +
            Math.sin((stream.x + i) * 0.002);
          path.push({ x, y });
        }

        stream.pathPoints.push(path);
        if (stream.pathPoints.length > 10) stream.pathPoints.shift(); // Less history

        stream.pathPoints.forEach(points => {
          ctx.save();
          ctx.shadowColor = stream.color;
          ctx.shadowBlur = 6; // Lowered from 10
          ctx.strokeStyle = stream.color;
          ctx.lineWidth = 0.2;
          ctx.globalAlpha = 0.2; // Less intensive
          ctx.beginPath();
          points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
          ctx.stroke();
          ctx.restore();

          ctx.beginPath();
          points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
          ctx.strokeStyle = stream.color;
          ctx.lineWidth = 0.1;
          ctx.globalAlpha = 0.5;
          ctx.stroke();
        });
      });

      ctx.globalAlpha = 1.0;
    };

    // Dark mode detection only on change
    const observer = new MutationObserver(() => {
      isDarkMode = document.documentElement.classList.contains('dark');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none font-[sans-serif]">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full dark:bg-black bg-white" />
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-between py-10">
        <div className="mt-10 text-center space-y-4">
          <h1
            className="text-[8vw] md:text-[6vw] lg:text-[5vw] font-black tracking-[0.08em] uppercase"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: "linear-gradient(to right, #ffd89b, #ff7c7c, #9c27b0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 20px rgba(255, 215, 100, 0.6), 0 0 60px rgba(255, 105, 180, 0.25)"
            }}
          >
            Vevakpor Godsanointed
          </h1>

          <h2
            className="text-[5vw] md:text-[2.5vw] lg:text-[2vw] font-semibold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "linear-gradient(to right, #00ffff, #3f51b5, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 14px rgba(0, 255, 255, 0.2)"
            }}
          >
            Data Analyst / Fullstack Developer / App Developer / Robotics Engineer
          </h2>
        </div>

        <div className="flex justify-center items-center flex-1">
          <img
            src={me}
            alt="Portrait"
            className="max-h-[65vh] max-w-[50vw] object-contain rounded-full border-[6px] border-white/10 shadow-[0_30px_80px_rgba(255,255,255,0.2)]"
          />
        </div>

        <div className="h-[5vh]" />
      </div>
    </div>
  );
};

export default Banner;
