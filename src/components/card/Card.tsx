import { ArrowRight, ImageIcon } from '../icons';

interface PropsCard {
    title: string;
    image: string;
    subTitle?: string;
    pill?: string;
    photoCount?: number;
    stepNum?: string;
    isOpenModal?: (id: string) => void;
    id?: string | number;
    variant?: 'light' | 'dark';
}

export const Card = ({
    title,
    image,
    subTitle,
    pill,
    photoCount,
    stepNum,
    isOpenModal,
    id,
    variant = 'dark',
}: PropsCard) => {
    const isClickable = !!isOpenModal;
    const isLight = variant === 'light';

    return (
        <article
            className={`group flex flex-col overflow-hidden border transition duration-300 hover:-translate-y-[3px] ${
                isLight
                    ? 'border-line bg-white hover:border-navy hover:shadow-[0_8px_30px_rgba(14,33,56,.10)]'
                    : 'border-navy-line bg-navy-2 hover:border-gold'
            } ${isClickable ? 'cursor-pointer' : ''}`}
            style={{ position: 'relative' }}
            onClick={() =>
                isOpenModal && id !== undefined && isOpenModal(String(id))
            }>
            {/* Image */}
            <div
                className={`relative overflow-hidden ${isLight ? 'aspect-[16/11]' : 'aspect-[16/10]'}`}>
                <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(14,33,56,0) 50%, rgba(14,33,56,.85))',
                    }}
                />
                {/* Dark overlay gradient */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(14,33,56,0) 50%, rgba(14,33,56,.85))',
                    }}
                />

                {/* Step number badge */}
                {stepNum && (
                    <span
                        className="absolute left-[16px] top-[14px] z-10 grid h-11 w-11 place-items-center rounded-full font-serif italic text-white"
                        style={{
                            fontSize: 22,
                            background: 'rgba(14,33,56,.55)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,.25)',
                        }}>
                        {stepNum}
                    </span>
                )}

                {/* Pill label */}
                {pill && (
                    <span
                        className={`absolute left-3.5 top-3.5 px-2.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[.18em] text-navy backdrop-blur-sm ${
                            isLight ? 'bg-white/[.92]' : 'bg-white/90'
                        }`}>
                        {pill}
                    </span>
                )}

                {/* Photo count */}
                {photoCount !== undefined && (
                    <span
                        className="absolute right-3.5 top-3.5 flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium text-white"
                        style={{ background: 'rgba(14,33,56,.7)' }}>
                        <ImageIcon size={11} />
                        {photoCount}
                    </span>
                )}
            </div>

            {/* Body */}
            <div
                className={`flex items-center justify-between gap-3 py-5 ${isLight ? 'px-[22px]' : 'px-5'}`}>
                <div>
                    <h3
                        className={`m-0 font-semibold tracking-[-0.005em] ${
                            isLight
                                ? 'text-[18px] text-ink'
                                : 'text-[16px] text-white'
                        }`}>
                        {title}
                    </h3>
                    {subTitle && (
                        <p
                            className={`mt-1 font-serif text-sm italic ${isLight ? 'text-mute' : 'text-mute-dark'}`}>
                            {subTitle}
                        </p>
                    )}
                </div>
                <div
                    className={`flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                        isLight
                            ? 'border-line text-navy group-hover:border-navy group-hover:bg-navy group-hover:text-white'
                            : 'border-navy-line text-white group-hover:border-gold group-hover:bg-gold group-hover:text-navy'
                    }`}>
                    <ArrowRight />
                </div>
            </div>
        </article>
    );
};
