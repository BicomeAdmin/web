import { useEffect, useState } from 'react';

/**
 * 數字 count-up 動畫。啟動後在 duration 時間內從 0 線性到 target。
 * 用 requestAnimationFrame，尊重 prefers-reduced-motion（直接跳終值）。
 */
export function useCountUp(
    target: number,
    options: { duration?: number; start?: boolean } = {},
) {
    const { duration = 1800, start = true } = options;
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;

        // Reduced motion：直接顯示終值
        if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
            setValue(target);
            return;
        }

        let frame = 0;
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutCubic：開頭快、結尾慢
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [target, duration, start]);

    return value;
}
