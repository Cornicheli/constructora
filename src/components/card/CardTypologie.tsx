import { ArrowRight } from '../icons';

interface CardTypologiesProps {
    title: string;
    titleAccent: string;
    image: string;
    lineNum: string;
}

export const CardTypologies = ({
    title,
    titleAccent,
    image,
    lineNum,
}: CardTypologiesProps) => {
    return (
        <div
            className="group relative cursor-pointer overflow-hidden"
            style={{ aspectRatio: '4/5' }}>
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(180deg, rgba(14,33,56,0) 30%, rgba(14,33,56,.85) 100%)',
                }}
            />

            {/* Top left: line label */}
            <div
                className="absolute left-6 top-6 z-10 flex items-center gap-3 text-sm"
                style={{
                    color: '#d9bd91',
                    fontFamily: '"Instrument Serif", "Times New Roman", serif',
                    fontStyle: 'italic',
                }}>
                <span className="block h-px w-6 bg-gold" />
                {lineNum}
            </div>

            {/* Top right: arrow */}
            <div
                className="absolute right-6 top-6 z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/40 text-white transition-all duration-200 group-hover:border-gold group-hover:bg-gold group-hover:text-navy"
                style={{ color: '#fff' }}>
                <ArrowRight />
            </div>

            {/* Bottom: title + specs */}
            <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between text-white">
                <h3
                    className="m-0 font-light leading-[1.05] tracking-[-0.015em]"
                    style={{ fontSize: 30 }}>
                    {title}
                    <em
                        className="block"
                        style={{
                            fontFamily:
                                '"Instrument Serif", "Times New Roman", serif',
                            fontStyle: 'italic',
                            fontWeight: 400,
                            fontSize: 32,
                            color: '#d9bd91',
                        }}>
                        {titleAccent}
                    </em>
                </h3>
                <div className="text-white/78 text-right text-[11px] uppercase tracking-[.18em]">
                    <strong
                        className="block"
                        style={{
                            fontFamily:
                                '"Instrument Serif", "Times New Roman", serif',
                            fontStyle: 'italic',
                            fontWeight: 400,
                            fontSize: 22,
                            letterSpacing: 0,
                            color: '#fff',
                            textTransform: 'none',
                            marginBottom: 4,
                        }}>
                        1 — 3
                    </strong>
                    Dormitorios
                </div>
            </div>
        </div>
    );
};
