import { ArrowRight } from '../icons';

interface CardServiceProps {
    title: string;
    description: string;
    image: string;
    alt: string;
    index?: number;
}

export const CardService = ({
    title,
    description,
    image,
    alt,
    index,
}: CardServiceProps) => {
    return (
        <article className="group flex flex-col overflow-hidden border border-line bg-paper transition duration-300 hover:-translate-y-[3px] hover:border-navy hover:shadow-[0_12px_32px_-18px_rgba(14,33,56,.18)]">
            {/* Image */}
            <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '16/10' }}>
                <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={image}
                    alt={alt}
                />
                {index !== undefined && (
                    <span
                        className="absolute left-[14px] top-3.5 font-serif italic text-white/80"
                        style={{
                            fontSize: 16,
                            textShadow: '0 1px 8px rgba(0,0,0,.35)',
                        }}>
                        {String(index).padStart(2, '0')}
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="flex items-start justify-between gap-4 px-5 py-[18px]">
                <div>
                    <h3 className="m-0 text-[17px] font-semibold tracking-[-0.01em] text-ink">
                        {title}
                    </h3>
                    <p className="m-0 mt-1.5 text-[13px] leading-[1.55] text-mute">
                        {description}
                    </p>
                </div>
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-line text-navy transition-all duration-200 group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                    <ArrowRight />
                </div>
            </div>
        </article>
    );
};
