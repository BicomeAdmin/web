import { useEffect, useRef, useState } from 'react';

/**
 * 使用 IntersectionObserver 偵測元素進入視窗。
 * 預設觸發一次（onceVisible 停用則每次進出都觸發）。
 *
 * @example
 * const { ref, visible } = useInView<HTMLDivElement>({ threshold: 0.2 });
 * <div ref={ref} className={visible ? 'reveal-in' : 'reveal-init'} />
 */
export function useInView<T extends HTMLElement>(
    options: { threshold?: number; rootMargin?: string; once?: boolean } = {},
) {
    const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = options;
    const ref = useRef<T>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // SSR / 老瀏覽器退路
        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) io.disconnect();
                } else if (!once) {
                    setVisible(false);
                }
            },
            { threshold, rootMargin },
        );

        io.observe(el);
        return () => io.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, visible };
}
