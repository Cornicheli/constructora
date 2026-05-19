import {
    CarrouselPisci,
    CarrouselMultiPisci,
    CardModels,
    Footer,
    WhatsappChat,
    Eyebrow,
} from '../components';
import SEO from '../components/SEO';
import piscina1 from '../assets/image/carrousel/piscinas/piscina1.webp';

const piscinasJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Home Deluxe — Construcción de Piscinas',
    description:
        'Diseño y construcción de piscinas con más de 15 años de experiencia y 200+ obras realizadas en AMBA y Córdoba.',
    url: 'https://homedeluxe.com.ar/piscinas',
    telephone: '+54-11-36821653',
    email: 'constructorahomedeluxe@gmail.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle 5 4340',
        addressLocality: 'Berazategui',
        addressRegion: 'Buenos Aires',
        addressCountry: 'AR',
    },
    areaServed: ['Buenos Aires', 'AMBA', 'Córdoba'],
    sameAs: [
        'https://www.facebook.com/constructorahomedeluxe/',
        'https://www.instagram.com/constructorahomedeluxe',
    ],
};

const Piscinas = () => {
    return (
        <span id="piscinas" className="relative">
            <SEO
                title="Construcción de Piscinas en Buenos Aires"
                description="Diseño y construcción de piscinas con más de 15 años de experiencia. +200 obras realizadas en AMBA y Córdoba. Calidad, responsabilidad y cumplimiento."
                canonical="/piscinas"
                jsonLd={piscinasJsonLd}
            />
            <CarrouselPisci />

            {/* About pools — 2 column grid */}
            <section className="bg-paper" id="aboutus">
                <div
                    className="mx-auto grid grid-cols-1 items-start gap-[80px] px-10 lg:grid-cols-[1.05fr_1fr]"
                    style={{
                        maxWidth: 1240,
                        paddingTop: 120,
                        paddingBottom: 100,
                    }}
                >
                    {/* Image column */}
                    <div
                        className="relative overflow-hidden"
                        style={{
                            aspectRatio: '4/5',
                            background: `linear-gradient(180deg, rgba(14,33,56,0) 60%, rgba(14,33,56,.5) 100%), url(${piscina1}) center/cover`,
                        }}
                    >
                        {/* Vertical decorative text */}
                        <span
                            className="absolute hidden text-[11px] font-medium uppercase text-mute lg:block"
                            style={{
                                left: -34,
                                top: 24,
                                writingMode: 'vertical-rl',
                                transform: 'rotate(180deg)',
                                letterSpacing: '.32em',
                            }}
                        >
                            Home Deluxe — 2009 / 2026
                        </span>

                        {/* Badge */}
                        <div
                            className="absolute backdrop-blur-[8px]"
                            style={{
                                bottom: 24,
                                left: 24,
                                background: 'rgba(250,250,247,.92)',
                                padding: '14px 18px',
                                border: '1px solid rgba(255,255,255,.5)',
                            }}
                        >
                            <div
                                className="font-serif italic leading-none"
                                style={{ fontSize: 28, color: '#0E2138' }}
                            >
                                15
                                <em
                                    className="font-normal"
                                    style={{ color: '#c9a876' }}
                                >
                                    +
                                </em>
                            </div>
                            <div
                                className="uppercase text-mute"
                                style={{
                                    fontSize: 11,
                                    letterSpacing: '.18em',
                                    fontWeight: 500,
                                    marginTop: 6,
                                }}
                            >
                                Años de experiencia
                            </div>
                        </div>
                    </div>

                    {/* Content column */}
                    <div>
                        <Eyebrow
                            label="Quiénes Somos"
                            className="mb-[24px]"
                        />

                        <h2
                            className="font-light leading-[1.05] tracking-[-0.02em] text-ink"
                            style={{
                                fontSize: 'clamp(36px, 3.4vw, 52px)',
                                margin: '0 0 28px',
                            }}
                        >
                            Una empresa dedicada a la construcción de
                            piscinas,{' '}
                            <em
                                className="font-serif italic font-normal"
                                style={{ color: '#d9bd91' }}
                            >
                                diseño y ejecución.
                            </em>
                        </h2>

                        <p
                            className="text-ink"
                            style={{
                                fontSize: 17,
                                lineHeight: 1.55,
                                maxWidth: 520,
                                margin: '0 0 22px',
                            }}
                        >
                            Con más de{' '}
                            <strong className="font-semibold">15 años</strong>{' '}
                            de experiencia en el rubro te brindamos
                            responsabilidad y cumplimiento en la realización de
                            tu proyecto soñado.
                        </p>

                        <p
                            className="text-mute"
                            style={{
                                fontSize: 15,
                                lineHeight: 1.65,
                                maxWidth: 520,
                                margin: '0 0 36px',
                            }}
                        >
                            Contamos con más de{' '}
                            <strong className="font-semibold text-navy">
                                200 obras realizadas
                            </strong>{' '}
                            en AMBA y Córdoba. Tenemos un equipo de
                            profesionales altamente calificados y las
                            herramientas necesarias para lograr la piscina de
                            tus sueños.
                        </p>

                        {/* Stats */}
                        <div
                            className="grid grid-cols-3 border-t border-line pt-[28px]"
                            style={{ maxWidth: 520 }}
                        >
                            <div>
                                <p className="font-extralight leading-none tracking-[-0.02em] text-navy text-[40px]">
                                    15
                                    <em
                                        className="font-serif italic font-normal"
                                        style={{ color: '#c9a876' }}
                                    >
                                        +
                                    </em>
                                </p>
                                <p className="mt-2 text-[12px] font-medium uppercase tracking-[.18em] text-mute">
                                    Años
                                </p>
                            </div>
                            <div>
                                <p className="font-extralight leading-none tracking-[-0.02em] text-navy text-[40px]">
                                    200
                                    <em
                                        className="font-serif italic font-normal"
                                        style={{ color: '#c9a876' }}
                                    >
                                        +
                                    </em>
                                </p>
                                <p className="mt-2 text-[12px] font-medium uppercase tracking-[.18em] text-mute">
                                    Obras
                                </p>
                            </div>
                            <div>
                                <p className="font-extralight leading-none tracking-[-0.02em] text-navy text-[40px]">
                                    2
                                </p>
                                <p className="mt-2 text-[12px] font-medium uppercase tracking-[.18em] text-mute">
                                    Provincias
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CarrouselMultiPisci />
            <CardModels />
            <Footer />
            <WhatsappChat />
        </span>
    );
};

export default Piscinas;
