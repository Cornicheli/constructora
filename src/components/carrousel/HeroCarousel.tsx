import { ReactNode } from 'react';
import { useHeroCarousel } from '../../hooks/useHeroCarousel';
import { ChevronLeft, ChevronRight } from '../icons';
import { HeroCarouselSlide } from '../../types';

interface HeroCarouselProps {
    slides: HeroCarouselSlide[];
    height: string;
    minHeight: number;
    maxHeight: number;
    gradient: string;
    children: (current: number) => ReactNode;
}

const HeroCarousel = ({
    slides,
    height,
    minHeight,
    maxHeight,
    gradient,
    children,
}: HeroCarouselProps) => {
    const { current, goTo, fillRefs } = useHeroCarousel({
        slideCount: slides.length,
    });

    return (
        <section
            style={{
                position: 'relative',
                height,
                minHeight,
                maxHeight,
                overflow: 'hidden',
                background: '#000',
            }}>
            {/* Slides */}
            {slides.map((slide, i) =>
                i === 0 ? (
                    // First slide: <img> so the browser can fetch it with highest priority (LCP fix)
                    <div
                        key={0}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: current === 0 ? 1 : 0,
                            transition: 'opacity 1s ease',
                        }}>
                        <img
                            src={slide.image}
                            alt={slide.alt ?? ''}
                            {...({ fetchpriority: 'high' } as {})}
                            loading="eager"
                            decoding="sync"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                filter: 'contrast(1.05) saturate(1.08)',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: gradient,
                            }}
                        />
                    </div>
                ) : (
                    <div
                        key={i}
                        role="img"
                        aria-label={slide.alt ?? `Slide ${i + 1}`}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: i === current ? 1 : 0,
                            transition: 'opacity 1s ease',
                            willChange: 'opacity',
                            transform: 'translateZ(0)',
                            filter: 'contrast(1.05) saturate(1.08)',
                        }}>
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: gradient,
                            }}
                        />
                    </div>
                ),
            )}

            {/* Inset frame */}
            <div
                style={{
                    position: 'absolute',
                    inset: 28,
                    border: '1px solid rgba(255,255,255,.18)',
                    pointerEvents: 'none',
                    zIndex: 10,
                }}
            />

            {/* Content */}
            {children(current)}

            {/* Controls — bottom: counter | bars | arrows */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 28,
                    left: 72,
                    right: 72,
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    alignItems: 'center',
                    gap: 28,
                    color: '#fff',
                    zIndex: 20,
                }}>
                {/* Counter */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 4,
                        fontVariantNumeric: 'tabular-nums',
                        fontSize: 12,
                        letterSpacing: '.08em',
                    }}>
                    <span
                        style={{
                            fontFamily:
                                '"Instrument Serif", "Times New Roman", serif',
                            fontStyle: 'italic',
                            fontSize: 36,
                            lineHeight: 1,
                        }}>
                        {String(current + 1).padStart(2, '0')}
                    </span>
                    <span style={{ opacity: 0.4, margin: '0 6px' }}>/</span>
                    <span style={{ opacity: 0.55 }}>
                        {String(slides.length).padStart(2, '0')}
                    </span>
                </div>

                {/* Progress bars */}
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            style={{
                                flex: 1,
                                height: 1,
                                background:
                                    i === current
                                        ? 'rgba(255,255,255,.32)'
                                        : 'rgba(255,255,255,.22)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                            <span
                                ref={el => {
                                    fillRefs.current[i] = el;
                                }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: i < current ? '0%' : '100%',
                                    background: '#fff',
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Arrow buttons */}
                <div style={{ display: 'flex', gap: 8 }}>
                    <button
                        onClick={() => goTo(current - 1)}
                        aria-label="Anterior"
                        style={{
                            width: 44,
                            height: 44,
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,.35)',
                            color: '#fff',
                            display: 'grid',
                            placeItems: 'center',
                            cursor: 'pointer',
                            transition: 'background .2s, border-color .2s',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background =
                                'rgba(255,255,255,.12)';
                            (e.currentTarget as HTMLElement).style.borderColor =
                                '#fff';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background =
                                'transparent';
                            (e.currentTarget as HTMLElement).style.borderColor =
                                'rgba(255,255,255,.35)';
                        }}>
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={() => goTo(current + 1)}
                        aria-label="Siguiente"
                        style={{
                            width: 44,
                            height: 44,
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,.35)',
                            color: '#fff',
                            display: 'grid',
                            placeItems: 'center',
                            cursor: 'pointer',
                            transition: 'background .2s, border-color .2s',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background =
                                'rgba(255,255,255,.12)';
                            (e.currentTarget as HTMLElement).style.borderColor =
                                '#fff';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background =
                                'transparent';
                            (e.currentTarget as HTMLElement).style.borderColor =
                                'rgba(255,255,255,.35)';
                        }}>
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;
