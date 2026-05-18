import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, CloseX } from '../icons';
import { Eyebrow } from '../ui';
import type { StepData } from '../../types';

export type { StepSpec, StepData } from '../../types';

interface ShowModal {
    isVisible: boolean;
    isClose: () => void;
    stepsData: StepData[];
    initialIndex: number;
}

export const ModalPiscinas = ({
    isVisible,
    isClose,
    stepsData,
    initialIndex,
}: ShowModal) => {
    const [stepIdx, setStepIdx] = useState(initialIndex);
    const [imgIdx, setImgIdx] = useState(0);

    useEffect(() => {
        setStepIdx(initialIndex);
        setImgIdx(0);
    }, [initialIndex, isVisible]);

    const goToStep = useCallback(
        (i: number) => {
            setStepIdx((i + stepsData.length) % stepsData.length);
            setImgIdx(0);
        },
        [stepsData.length],
    );

    useEffect(() => {
        if (!isVisible) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') isClose();
            if (e.key === 'ArrowLeft') goToStep(stepIdx - 1);
            if (e.key === 'ArrowRight') goToStep(stepIdx + 1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isVisible, stepIdx, goToStep, isClose]);

    useEffect(() => {
        document.body.style.overflow = isVisible ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isVisible]);

    if (!isVisible || !stepsData.length) return null;

    const step = stepsData[stepIdx];
    const images = step.carouselImages;
    const currentImg = images[imgIdx] ?? step.image;

    const prevImg = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImgIdx(i => (i - 1 + images.length) % images.length);
    };
    const nextImg = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImgIdx(i => (i + 1) % images.length);
    };

    return (
        <div
            className="fixed inset-0 z-50 grid place-items-center p-10"
            style={{
                background: 'rgba(8,17,30,.68)',
                backdropFilter: 'blur(10px)',
            }}
            onClick={isClose}>
            {/* Modal box */}
            <div
                className="w-full overflow-hidden bg-paper"
                style={{
                    maxWidth: 1100,
                    maxHeight: '88vh',
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1fr',
                }}
                onClick={e => e.stopPropagation()}>
                {/* ── Left: image panel ── */}
                <div
                    className="relative min-h-[480px]"
                    style={{ background: '#000' }}>
                    {/* Image */}
                    <img
                        key={`${stepIdx}-${imgIdx}`}
                        src={currentImg}
                        alt={step.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ transition: 'opacity .4s' }}
                    />

                    {/* Counter */}
                    <div
                        className="absolute left-[22px] top-[22px] flex items-baseline gap-1"
                        style={{ color: '#fff' }}>
                        <span
                            className="font-serif italic leading-none"
                            style={{ fontSize: 28 }}>
                            {String(stepIdx + 1).padStart(2, '0')}
                        </span>
                        <span style={{ opacity: 0.4, fontSize: 14 }}>/</span>
                        <span style={{ opacity: 0.55, fontSize: 14 }}>
                            {String(stepsData.length).padStart(2, '0')}
                        </span>
                    </div>

                    {/* Prev / Next arrows */}
                    <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-[18px]">
                        <button
                            className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border text-white transition hover:bg-white/30"
                            style={{
                                background: 'rgba(255,255,255,.14)',
                                borderColor: 'rgba(255,255,255,.4)',
                                backdropFilter: 'blur(8px)',
                            }}
                            onClick={prevImg}
                            aria-label="Anterior">
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border text-white transition hover:bg-white/30"
                            style={{
                                background: 'rgba(255,255,255,.14)',
                                borderColor: 'rgba(255,255,255,.4)',
                                backdropFilter: 'blur(8px)',
                            }}
                            onClick={nextImg}
                            aria-label="Siguiente">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                {/* ── Right: body panel ── */}
                <div
                    className="flex flex-col overflow-y-auto"
                    style={{ padding: '36px 36px 28px' }}>
                    {/* Top row: eyebrow + close */}
                    <div className="mb-7 flex items-center justify-between">
                        <Eyebrow label={`Etapa ${step.id}`} />
                        <button
                            onClick={isClose}
                            aria-label="Cerrar"
                            className="grid h-[34px] w-[34px] place-items-center rounded-full border border-line text-mute transition hover:border-navy hover:bg-navy hover:text-white">
                            <CloseX />
                        </button>
                    </div>

                    {/* Title */}
                    <h3
                        className="m-0 font-light tracking-[-0.02em] text-ink"
                        style={{
                            fontSize: 'clamp(22px, 2.4vw, 32px)',
                            lineHeight: 1.05,
                        }}>
                        {step.title.split(' ').slice(0, -1).join(' ')}{' '}
                        <em className="font-serif not-italic text-navy">
                            {step.title.split(' ').slice(-1)[0]}
                        </em>
                    </h3>

                    {/* Subtitle */}
                    <p className="mb-5 mt-2 text-[13px] text-mute">
                        {step.sub}
                    </p>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-[1.65] text-mute">
                        {step.desc}
                    </p>

                    {/* Specs */}
                    <ul
                        className="m-0 mb-7 list-none p-0"
                        style={{ display: 'grid', gap: 10 }}>
                        {step.specs.map((sp, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-3 text-[13.5px]"
                                style={{
                                    paddingBottom: 10,
                                    borderBottom:
                                        i < step.specs.length - 1
                                            ? '1px dashed #e6e2d8'
                                            : 'none',
                                }}>
                                <span className="flex-1 text-mute">{sp.k}</span>
                                <span className="font-semibold text-ink">
                                    {sp.v}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Step thumbnails */}
                    <div className="mt-auto flex gap-2 border-t border-line pt-[18px]">
                        {stepsData.map((s, i) => (
                            <button
                                key={s.id}
                                onClick={() => goToStep(i)}
                                className="hover:opacity-85 min-w-0 flex-1 transition"
                                style={{
                                    aspectRatio: '16/12',
                                    backgroundImage: `url('${s.image}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: i === stepIdx ? 1 : 0.55,
                                    border:
                                        i === stepIdx
                                            ? '2px solid #0E2138'
                                            : '2px solid transparent',
                                }}
                                aria-label={s.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
