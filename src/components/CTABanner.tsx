import { Link } from 'react-router-dom';

const CTABanner = () => {
    return (
        <section
            className="flex items-center justify-between gap-10 border border-line bg-white"
            style={{
                maxWidth: 1320,
                margin: '100px auto',
                padding: '60px 64px',
                display: 'grid',
                gridTemplateColumns: '1.4fr auto',
                alignItems: 'center',
                gap: 40,
            }}>
            <h3
                className="m-0 font-light leading-[1.15] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(28px, 2.6vw, 40px)' }}>
                ¿Tenés un terreno o un proyecto en mente?
                <br />
                <em
                    style={{
                        fontFamily:
                            '"Instrument Serif", "Times New Roman", serif',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        color: '#0E2138',
                    }}>
                    Conversemos sobre tu casa ideal.
                </em>
            </h3>
            <div className="flex gap-3">
                <Link
                    to="/contact"
                    className="border border-navy bg-navy px-[22px] py-3.5 text-[13px] font-semibold uppercase tracking-[.14em] text-white transition-colors duration-200 hover:bg-[#07172a]"
                    style={{ textDecoration: 'none' }}>
                    Cotizar proyecto
                </Link>
                <a
                    href="#tipologias"
                    className="border border-navy px-[22px] py-3.5 text-[13px] font-semibold uppercase tracking-[.14em] text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
                    style={{ textDecoration: 'none' }}>
                    Ver tipologías
                </a>
            </div>
        </section>
    );
};

export default CTABanner;
