import { useEffect, useRef } from 'react';

/**
 * Magnetic button：游標接近時元素會被輕微「吸」過去，模擬磁性感。
 * 套在 button / a 的 ref 上即可。
 *
 * @example
 * const ref = useMagnetic<HTMLAnchorElement>({ strength: 0.3 });
 * <a ref={ref} className="...">點我</a>
 */
export function useMagnetic<T extends HTMLElement>(options: {
    strength?: number;
    radius?: number;
} = {}) {
    const { strength = 0.25, radius = 120 } = options;
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // 尊重 reduced-motion
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

        let raf = 0;

        const move = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.hypot(dx, dy);

            if (dist > radius) {
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(() => {
                    el.style.transform = '';
                });
                return;
            }

            const pull = 1 - dist / radius;
            const tx = dx * strength * pull;
            const ty = dy * strength * pull;
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
            });
        };

        const reset = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                el.style.transform = '';
            });
        };

        window.addEventListener('mousemove', move);
        el.addEventListener('mouseleave', reset);

        return () => {
            window.removeEventListener('mousemove', move);
            el.removeEventListener('mouseleave', reset);
            cancelAnimationFrame(raf);
            el.style.transform = '';
        };
    }, [strength, radius]);

    return ref;
}
