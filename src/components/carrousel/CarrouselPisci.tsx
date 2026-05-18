import piscina11 from '../../assets/image/carrousel/piscinas/piscina12.jpg';
import piscina2 from '../../assets/image/carrousel/piscinas/piscina2.webp';
import piscina4 from '../../assets/image/carrousel/piscinas/piscina4.jpg';
import piscina01 from '../../assets/Carrusel/piscina01.jpg';
import piscina5 from '../../assets/image/carrousel/piscinas/piscina5.webp';
import HeroCarousel from './HeroCarousel';
import { ArrowRight } from '../icons';

const slides = [
    { image: piscina11 },
    { image: piscina2 },
    { image: piscina01 },
    { image: piscina4 },
    { image: piscina5 },
];

const CarrouselPisci = () => (
    <HeroCarousel
        slides={slides}
        height="86vh"
        minHeight={620}
        maxHeight={820}
        gradient="linear-gradient(180deg, rgba(14,33,56,.35) 0%, rgba(14,33,56,0) 35%, rgba(14,33,56,.6) 100%)">
        {() => (
            <>
                {/* Meta label */}
                <div
                    style={{
                        position: 'absolute',
                        top: 56,
                        left: 72,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        color: '#fff',
                        fontSize: 12,
                        letterSpacing: '.28em',
                        textTransform: 'uppercase',
                        fontWeight: 500,
                        zIndex: 20,
                    }}>
                    <span
                        style={{
                            width: 36,
                            height: 1,
                            backgroundColor: '#c9a876',
                            display: 'block',
                        }}
                    />
                    <span>Piscinas Industrializadas · 15+ años</span>
                </div>

                {/* Body — two columns */}
                <div
                    style={{
                        position: 'absolute',
                        left: 72,
                        right: 72,
                        bottom: 110,
                        color: '#fff',
                        display: 'grid',
                        gridTemplateColumns: '1.4fr 1fr',
                        alignItems: 'end',
                        gap: 60,
                        zIndex: 20,
                    }}>
                    <h1
                        style={{
                            margin: 0,
                            fontWeight: 200,
                            fontSize: 'clamp(48px, 6.2vw, 92px)',
                            lineHeight: 0.98,
                            letterSpacing: '-.025em',
                        }}>
                        Diseñamos y{' '}
                        <em
                            style={{
                                fontFamily:
                                    '"Instrument Serif", "Times New Roman", serif',
                                fontStyle: 'italic',
                                fontWeight: 400,
                                color: '#d9bd91',
                            }}>
                            construimos
                        </em>
                        <br />
                        tu piscina ideal.
                    </h1>

                    <div style={{ paddingBottom: 8 }}>
                        <p
                            style={{
                                fontSize: 15,
                                lineHeight: 1.55,
                                color: 'rgba(255,255,255,.78)',
                                maxWidth: 380,
                                margin: '0 0 22px',
                            }}>
                            Más de 200 obras realizadas en AMBA y Córdoba.
                            Equipos altamente calificados con la tecnología
                            necesaria para lograr la piscina de tus sueños.
                        </p>
                        <a
                            href="#aboutus"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 12,
                                padding: '14px 22px',
                                background: 'rgba(255,255,255,.08)',
                                border: '1px solid rgba(255,255,255,.35)',
                                color: '#fff',
                                fontSize: 13,
                                letterSpacing: '.14em',
                                textTransform: 'uppercase',
                                fontWeight: 500,
                                backdropFilter: 'blur(6px)',
                                textDecoration: 'none',
                                transition: 'background .2s',
                            }}
                            onMouseEnter={e =>
                                ((
                                    e.currentTarget as HTMLElement
                                ).style.background = 'rgba(255,255,255,.16)')
                            }
                            onMouseLeave={e =>
                                ((
                                    e.currentTarget as HTMLElement
                                ).style.background = 'rgba(255,255,255,.08)')
                            }>
                            Ver servicios
                            <ArrowRight />
                        </a>
                    </div>
                </div>
            </>
        )}
    </HeroCarousel>
);

export default CarrouselPisci;
