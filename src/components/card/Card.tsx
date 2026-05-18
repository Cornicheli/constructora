interface PropsCard {
    title: string;
    image: string;
    subTitle?: string;
    pill?: string;
    photoCount?: number;
    stepNum?: string;
    isOpenModal?: (id: string) => void;
    id?: string | number;
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
}: PropsCard) => {
    const isClickable = !!isOpenModal;

    return (
        <article
            className={`group overflow-hidden border border-navy-line bg-navy-2 flex flex-col transition duration-300 hover:-translate-y-[3px] hover:border-gold ${isClickable ? 'cursor-pointer' : ''}`}
            style={{ position: 'relative' }}
            onClick={() =>
                isOpenModal && id !== undefined && isOpenModal(String(id))
            }>
            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden relative">
                <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={image}
                    alt={title}
                    style={{
                        background: 'linear-gradient(180deg, rgba(14,33,56,0) 50%, rgba(14,33,56,.85))',
                    }}
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(180deg, rgba(14,33,56,0) 50%, rgba(14,33,56,.85))' }} />

                {/* Step number badge */}
                {stepNum && (
                    <span
                        className="absolute top-[14px] left-[16px] z-10 grid h-11 w-11 place-items-center rounded-full font-serif italic text-white"
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
                    <span className="absolute top-3.5 left-3.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-sm text-[10.5px] font-semibold uppercase tracking-[.18em] text-navy">
                        {pill}
                    </span>
                )}

                {/* Photo count */}
                {photoCount !== undefined && (
                    <span className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-2.5 py-1.5 bg-navy/70 text-white text-[11px] font-medium">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="5" width="18" height="14" rx="1" />
                            <path d="M3 17l5-5 4 4 3-3 6 6" />
                        </svg>
                        {photoCount}
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="flex items-center justify-between px-5 py-5 gap-3">
                <div>
                    <h3 className="text-[16px] font-semibold tracking-[-0.005em] text-white m-0">
                        {title}
                    </h3>
                    {subTitle && (
                        <p className="mt-1 text-sm text-mute-dark font-serif italic">
                            {subTitle}
                        </p>
                    )}
                </div>
                <div className="flex-shrink-0 w-[34px] h-[34px] rounded-full border border-navy-line flex items-center justify-center text-white transition-all duration-200 group-hover:bg-gold group-hover:border-gold group-hover:text-navy">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </article>
    );
};
