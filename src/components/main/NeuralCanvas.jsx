import { useEffect, useRef } from "react";

const MAX_DIST = 135;

export default function NeuralCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let rafId;
        let nodes = [];

        const isMobile = () => window.innerWidth < 768;

        const initNodes = () => {
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;
            const count = isMobile() ? 24 : 50;
            nodes = Array.from({ length: count }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.22,
                vy: (Math.random() - 0.5) * 0.22,
                r: Math.random() * 1.8 + 1,
                phase: Math.random() * Math.PI * 2,
            }));
        };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            ctx.scale(dpr, dpr);
            initNodes();
        };

        resize();
        window.addEventListener("resize", resize);

        const draw = () => {
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;
            const t = Date.now() / 1000;
            ctx.clearRect(0, 0, w, h);

            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > w) n.vx *= -1;
                if (n.y < 0 || n.y > h) n.vy *= -1;
            }

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i], b = nodes[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MAX_DIST) {
                        const alpha = (1 - dist / MAX_DIST) * 0.09;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(16,185,129,${alpha})`;
                        ctx.lineWidth = 0.55;
                        ctx.stroke();
                    }
                }
            }

            for (const n of nodes) {
                const pulse = (Math.sin(t * 1.1 + n.phase) + 1) / 2;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(16,185,129,${0.1 + pulse * 0.18})`;
                ctx.fill();
            }

            rafId = requestAnimationFrame(draw);
        };

        rafId = requestAnimationFrame(draw);
        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        />
    );
}
