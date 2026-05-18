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
            className={`group flex flex-col overflow-hidden border border-navy-line bg-navy-2 transition duration-300 hover:-translate-y-[3px] hover:border-gold ${isClickable ? 'cursor-pointer' : ''}`}
            style={{ position: 'relative' }}
            onClick={() =>
                isOpenModal && id !== undefined && isOpenModal(String(id))
            }>
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={image}
                    alt={title}
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
                    <span className="absolute left-3.5 top-3.5 bg-white/90 px-2.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[.18em] text-navy backdrop-blur-sm">
                        {pill}
                    </span>
                )}

                {/* Photo count */}
                {photoCount !== undefined && (
                    <span className="absolute right-3.5 top-3.5 flex items-center gap-1.5 bg-navy/70 px-2.5 py-1.5 text-[11px] font-medium text-white">
                        <ImageIcon size={11} />
                        {photoCount}
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="flex items-center justify-between gap-3 px-5 py-5">
                <div>
                    <h3 className="m-0 text-[16px] font-semibold tracking-[-0.005em] text-white">
                        {title}
                    </h3>
                    {subTitle && (
                        <p className="mt-1 font-serif text-sm italic text-mute-dark">
                            {subTitle}
                        </p>
                    )}
                </div>
                <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full border border-navy-line text-white transition-all duration-200 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
                    <ArrowRight />
                </div>
            </div>
        </article>
    );
};
