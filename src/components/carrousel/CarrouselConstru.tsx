import house1 from '../../assets/image/carrousel/house/house1.jpg?format=webp&quality=80';
import house2 from '../../assets/image/carrousel/house/house2.jpg?format=webp&quality=80';
import house4 from '../../assets/image/carrousel/house/house4.jpg?format=webp&quality=80';
import house5 from '../../assets/image/carrousel/house/house5.jpg?format=webp&quality=80';
import HeroCarousel from './HeroCarousel';
import { ArrowRight } from '../icons';

const slides = [
    { image: house1, alt: 'Fachada de vivienda moderna construida por Home Deluxe' },
    { image: house2, alt: 'Casa residencial con diseño contemporáneo' },
    { image: house4, alt: 'Proyecto de vivienda terminado en Buenos Aires' },
    { image: house5, alt: 'Construcción residencial de alta calidad' },
];

const CarrouselConstru = () => (
    <HeroCarousel
        slides={slides}
        height="90vh"
        minHeight={640}
        maxHeight={860}
        gradient="linear-gradient(180deg, rgba(14,33,56,.45) 0%, rgba(14,33,56,0) 35%, rgba(14,33,56,.65) 100%)">
        {() => (
            <>
                {/* Meta label — top left */}
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
                            background: 'var(--tw-color-gold, #c9a876)',
                            backgroundColor: '#c9a876',
                            display: 'block',
                        }}
                    />
                    <span>Empresa Constructora · 15+ años</span>
                </div>

                {/* Body — two columns: title | side */}
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
                            fontSize: 'clamp(52px, 6.8vw, 104px)',
                            lineHeight: 0.96,
                            letterSpacing: '-.025em',
                        }}>
                        Diseñamos, proyectamos
                        <br />y{' '}
                        <em
                            style={{
                                fontFamily:
                                    '"Instrument Serif", "Times New Roman", serif',
                                fontStyle: 'italic',
                                fontWeight: 400,
                                color: '#d9bd91',
                            }}>
                            construimos.
                        </em>
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
                            Más de 15 años de experiencia y 120.000 m² de obras
                            realizadas. Llevamos a cabo proyectos en variadas
                            condiciones y terrenos, en todo el país.
                        </p>
                        <a
                            href="#proyect"
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
                            Ver proyectos
                            <ArrowRight />
                        </a>
                    </div>
                </div>
            </>
        )}
    </HeroCarousel>
);

export default CarrouselConstru;
