import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.12, once = true) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) obs.unobserve(el);
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold, once]);

    return [ref, inView];
}
