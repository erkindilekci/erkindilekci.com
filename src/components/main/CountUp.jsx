import { useEffect, useState } from "react";

export default function CountUp({ end, suffix = "", duration = 1500 }) {
    const [val, setVal] = useState(0);

    useEffect(() => {
        let raf;
        const startTime = performance.now();
        function tick(now) {
            const t = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(ease * end));
            if (t < 1) raf = requestAnimationFrame(tick);
        }
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [end, duration]);

    return <>{val}{suffix}</>;
}
