import { useState, useEffect, useCallback, useRef } from 'react';

interface UseHeroCarouselOptions {
    slideCount: number;
    duration?: number;
}

export const useHeroCarousel = ({
    slideCount,
    duration = 6500,
}: UseHeroCarouselOptions) => {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const fillRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const startTimer = useCallback(
        (idx: number) => {
            if (timerRef.current) clearTimeout(timerRef.current);

            const fill = fillRefs.current[idx];
            if (fill) {
                fill.style.transition = 'none';
                fill.style.right = '100%';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        fill.style.transition = `right linear ${duration}ms`;
                        fill.style.right = '0%';
                    });
                });
            }

            timerRef.current = setTimeout(() => {
                setCurrent(c => (c + 1) % slideCount);
            }, duration);
        },
        [slideCount, duration],
    );

    const goTo = useCallback(
        (idx: number) => {
            const next = (idx + slideCount) % slideCount;
            fillRefs.current.forEach((f, k) => {
                if (!f) return;
                if (k < next) {
                    f.style.transition = 'none';
                    f.style.right = '0%';
                } else if (k > next) {
                    f.style.transition = 'none';
                    f.style.right = '100%';
                }
            });
            setCurrent(next);
            startTimer(next);
        },
        [slideCount, startTimer],
    );

    useEffect(() => {
        startTimer(0);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [startTimer]);

    useEffect(() => {
        startTimer(current);
    }, [current, startTimer]);

    return { current, goTo, fillRefs };
};
