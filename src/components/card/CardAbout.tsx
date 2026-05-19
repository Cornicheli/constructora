interface CardAboutProps {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
    num: string;
}

export const CardAbout = ({
    title,
    subtitle,
    image,
    alt,
    num,
}: CardAboutProps) => {
    return (
        <div
            className="group flex flex-col gap-[18px] border-r border-navy-line px-[22px] py-[30px] transition-colors duration-200 last:border-r-0 hover:bg-white/[0.02]"
            style={{ paddingBottom: 4 }}>
            <div
                className="font-serif text-xs italic tracking-[.04em] text-gold"
                style={{
                    fontFamily: '"Instrument Serif", "Times New Roman", serif',
                    fontStyle: 'italic',
                }}>
                {num}
            </div>
            <img
                className="h-12 w-12 object-contain transition-opacity duration-200"
                style={{
                    filter: 'brightness(0) saturate(100%) invert(78%) sepia(30%) saturate(400%) hue-rotate(5deg) brightness(95%)',
                    opacity: 0.85,
                }}
                src={image}
                alt={alt}
                loading="lazy"
                decoding="async"
            />
            <h4 className="m-0 text-[12px] font-semibold uppercase leading-[1.45] tracking-[.22em] text-paper transition-colors duration-200">
                {title}
                <br />
                {subtitle}
            </h4>
        </div>
    );
};
