interface CardServiceProps {
    title: string;
    description: string;
    image: string;
    alt: string;
    index?: number;
}

export const CardService = ({ title, description, image, alt, index }: CardServiceProps) => {
    return (
        <article className="group overflow-hidden border border-line bg-paper flex flex-col transition duration-300 hover:-translate-y-[3px] hover:border-navy hover:shadow-[0_12px_32px_-18px_rgba(14,33,56,.18)]">
            {/* Image */}
            <div className="overflow-hidden relative" style={{ aspectRatio: '16/10' }}>
                <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={image}
                    alt={alt}
                />
                {index !== undefined && (
                    <span
                        className="absolute top-3.5 left-[14px] text-white/80 font-serif italic"
                        style={{ fontSize: 16, textShadow: '0 1px 8px rgba(0,0,0,.35)' }}>
                        {String(index).padStart(2, '0')}
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="flex items-start justify-between px-5 py-[18px] gap-4">
                <div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-ink m-0">
                        {title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.55] text-mute m-0">
                        {description}
                    </p>
                </div>
                <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-full border border-line flex items-center justify-center text-navy transition-all duration-200 group-hover:bg-navy group-hover:text-white group-hover:border-navy">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </article>
    );
};
