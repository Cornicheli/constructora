import { useRef, useState, useCallback, useEffect } from 'react';
import {
    dis2,
    dis3,
    dis4,
    dis5,
    dis6,
    dis7,
    dis8,
    dis9,
    dis10,
    dis11,
    dis12,
    dis13,
    dis15,
    dis16,
    dis2a,
    dis3a,
    dis4a,
    dis5a,
    dis6a,
    dis7a,
    dis8a,
    dis9a,
    dis10a,
    dis11a,
    dis12a,
    dis13a,
    dis15a,
    dis16a,
} from '../../assets/piscinas';

const designsData = [
    { num: '01', image: dis2,  imageHover: dis2a,  name: 'Esquinera',      sub: 'L con escalón',       dim: '6 × 4 m' },
    { num: '02', image: dis6,  imageHover: dis6a,  name: 'Rectangular',    sub: 'Con esquina curva',   dim: '8 × 3.5 m' },
    { num: '03', image: dis13, imageHover: dis13a, name: 'Personalizada',  sub: 'Diseño a medida',     dim: 'Variable' },
    { num: '04', image: dis10, imageHover: dis10a, name: 'Rectangular',    sub: 'Línea clásica',       dim: '6 × 3 m' },
    { num: '05', image: dis4,  imageHover: dis4a,  name: 'Cápsula',        sub: 'Bordes curvos',       dim: '7 × 3 m' },
    { num: '06', image: dis9,  imageHover: dis9a,  name: 'Trapezoidal',    sub: 'Asimétrica',          dim: '7 × 3 m' },
    { num: '07', image: dis5,  imageHover: dis5a,  name: 'Riñón',          sub: 'Curvas orgánicas',    dim: '7 × 4 m' },
    { num: '08', image: dis8,  imageHover: dis8a,  name: 'Romana',         sub: 'Con escalera curva',  dim: '8 × 3.5 m' },
    { num: '09', image: dis12, imageHover: dis12a, name: 'Esquinera + Spa', sub: 'Con sector relax',   dim: '7 × 4 m' },
    { num: '10', image: dis15, imageHover: dis15a, name: 'Riñón Premium',  sub: 'Curvas amplias',      dim: '8 × 4 m' },
    { num: '11', image: dis7,  imageHover: dis7a,  name: 'Hexagonal',      sub: 'Geometría suave',     dim: '6 × 4 m' },
    { num: '12', image: dis3,  imageHover: dis3a,  name: 'Redonda',        sub: 'Círculo con spa',     dim: 'Ø 5 m' },
    { num: '13', image: dis16, imageHover: dis16a, name: 'Doble Esquinera', sub: 'Espacio extendido',  dim: '9 × 4 m' },
    { num: '14', image: dis11, imageHover: dis11a, name: 'Doble',          sub: 'Pileta + jacuzzi',    dim: '8 × 3 m' },
];

const CARDS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(designsData.length / CARDS_PER_PAGE);

const CarrouselMultiPisci = () => {
    const stripRef = useRef<HTMLDivElement>(null);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [counter, setCounter] = useState(`01 — 04 de ${String(designsData.length).padStart(2, '0')} modelos`);

    const scrollByPage = (dir: number) => {
        const el = stripRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * el.clientWidth * 0.92, behavior: 'smooth' });
    };

    const updateUI = useCallback(() => {
        const el = stripRef.current;
        if (!el || !el.firstElementChild) return;
        const cardW = el.firstElementChild.getBoundingClientRect().width + 16;
        const first = Math.round(el.scrollLeft / cardW) + 1;
        const last = Math.min(first + CARDS_PER_PAGE - 1, designsData.length);
        setCounter(
            `${String(first).padStart(2, '0')} — ${String(last).padStart(2, '0')} de ${String(designsData.length).padStart(2, '0')} modelos`,
        );
        const page = Math.min(Math.floor((first - 1) / CARDS_PER_PAGE), TOTAL_PAGES - 1);
        setCurrentPage(page);
    }, []);

    useEffect(() => {
        const el = stripRef.current;
        if (!el) return;
        let t: ReturnType<typeof setTimeout>;
        const onScroll = () => {
            clearTimeout(t);
            t = setTimeout(updateUI, 80);
        };
        el.addEventListener('scroll', onScroll, { passive: true });
        setTimeout(updateUI, 50);
        return () => el.removeEventListener('scroll', onScroll);
    }, [updateUI]);

    return (
        <section
            style={{
                background: 'linear-gradient(180deg, rgba(14,33,56,.9) 0%, #0E2138 100%)',
                color: '#fff',
                padding: '110px 0',
                position: 'relative',
            }}>
            <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px', position: 'relative' }}>
                {/* Head */}
                <div
                    className="mb-14"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        alignItems: 'end',
                        gap: 40,
                    }}>
                    <div>
                        <div className="mb-3 flex items-center gap-2.5">
                            <span className="h-px w-7 bg-gold" />
                            <span className="text-[11px] font-semibold uppercase tracking-[.32em] text-gold">
                                Catálogo
                            </span>
                        </div>
                        <h2
                            className="m-0 font-light tracking-[-0.02em] text-paper"
                            style={{ fontSize: 'clamp(36px, 3.4vw, 52px)', lineHeight: 1.05 }}>
                            Diseños{' '}
                            <em className="font-serif not-italic text-gold-soft">disponibles</em>
                        </h2>
                    </div>
                    <p className="m-0 text-[14px] leading-[1.6] text-mute-dark" style={{ maxWidth: 360 }}>
                        Tipologías estandarizadas listas para personalizar según el terreno y las necesidades de cada proyecto.
                    </p>
                </div>
            </div>

            {/* Scroll strip — full bleed */}
            <div style={{ position: 'relative', margin: '0 -0px' }}>
                <div
                    ref={stripRef}
                    style={{
                        display: 'grid',
                        gridAutoFlow: 'column',
                        gridAutoColumns: 'calc((100% - 40px*2 - 16px*3) / 4)',
                        gap: 16,
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        scrollPadding: '0 40px',
                        padding: '4px 40px 4px',
                        scrollbarWidth: 'none',
                        maxWidth: 1320,
                        margin: '0 auto',
                    }}>
                    {designsData.map((d, i) => (
                        <div
                            key={d.num}
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            style={{
                                scrollSnapAlign: 'start',
                                border: `1px solid ${hoveredIdx === i ? 'rgba(201,168,118,.6)' : '#1c3556'}`,
                                background: hoveredIdx === i
                                    ? 'linear-gradient(180deg, rgba(201,168,118,.04), transparent)'
                                    : 'linear-gradient(180deg, rgba(255,255,255,.02), transparent)',
                                padding: 18,
                                aspectRatio: '1/1.05',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'border-color .25s, background .25s, transform .25s',
                                transform: hoveredIdx === i ? 'translateY(-2px)' : 'none',
                                cursor: 'pointer',
                            }}>
                            {/* Number */}
                            <span className="font-serif italic text-gold" style={{ fontSize: 14 }}>
                                {d.num}
                            </span>

                            {/* Image */}
                            <div style={{ flex: 1, display: 'grid', placeItems: 'center', margin: '-4px 0 8px', position: 'relative' }}>
                                <img
                                    src={hoveredIdx === i ? d.imageHover : d.image}
                                    alt={d.name}
                                    style={{
                                        width: '70%',
                                        maxHeight: 130,
                                        height: 'auto',
                                        objectFit: 'contain',
                                        transition: 'opacity .3s ease',
                                    }}
                                />
                            </div>

                            {/* Meta */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', color: 'rgba(255,255,255,.92)' }}>
                                <div>
                                    <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-.01em' }}>
                                        {d.name}
                                    </div>
                                    <div className="font-serif italic text-mute-dark" style={{ fontSize: 13, marginTop: 2 }}>
                                        {d.sub}
                                    </div>
                                </div>
                                <div className="text-mute-dark" style={{ fontSize: 11, letterSpacing: '.12em', fontVariantNumeric: 'tabular-nums' }}>
                                    {d.dim}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
                <div
                    className="mt-10 flex items-center justify-between border-t pt-6"
                    style={{ borderColor: '#1c3556', color: '#9fb0c8' }}>
                    {/* Counter */}
                    <span style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase' }}>
                        {counter}
                    </span>

                    {/* Progress bars */}
                    <div style={{ display: 'flex', gap: 6 }}>
                        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                            <span
                                key={i}
                                style={{
                                    height: 2,
                                    width: i === currentPage ? 44 : 28,
                                    background: i === currentPage ? '#c9a876' : 'rgba(255,255,255,.18)',
                                    transition: 'width .3s, background .3s',
                                }}
                            />
                        ))}
                    </div>

                    {/* Prev / Next */}
                    <div style={{ display: 'flex', gap: 8 }}>
                        <button
                            onClick={() => scrollByPage(-1)}
                            aria-label="Anterior"
                            className="grid h-10 w-10 place-items-center text-white transition"
                            style={{
                                background: 'transparent',
                                border: '1px solid #1c3556',
                                transition: 'border-color .2s, background .2s',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLButtonElement).style.borderColor = '#c9a876';
                                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,118,.08)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.borderColor = '#1c3556';
                                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                            }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 6l-6 6 6 6" /></svg>
                        </button>
                        <button
                            onClick={() => scrollByPage(1)}
                            aria-label="Siguiente"
                            className="grid h-10 w-10 place-items-center text-white transition"
                            style={{
                                background: 'transparent',
                                border: '1px solid #1c3556',
                                transition: 'border-color .2s, background .2s',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLButtonElement).style.borderColor = '#c9a876';
                                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,118,.08)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.borderColor = '#1c3556';
                                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                            }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6l6 6-6 6" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarrouselMultiPisci;
