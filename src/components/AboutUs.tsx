import { CardAbout } from './card/CardAbout';
import { Eyebrow } from './ui';
import {
    asesoramiento,
    calculo,
    experiencia,
    direccion,
    inversion,
} from '../assets/image/about';

const AboutUs = () => {
    return (
        <section
            className="relative overflow-hidden bg-navy px-10 py-[120px]"
            style={{
                backgroundImage:
                    'radial-gradient(50% 50% at 80% 0%, rgba(201,168,118,.07), transparent 70%), radial-gradient(50% 40% at 0% 100%, rgba(255,255,255,.04), transparent 70%)',
            }}
            id="aboutus">
            {/* Two-column top: eyebrow+title | description+quote */}
            <div
                className="relative mx-auto"
                style={{
                    maxWidth: 1240,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.3fr',
                    gap: 80,
                    alignItems: 'start',
                }}>
                {/* Left: eyebrow + title */}
                <div>
                    <Eyebrow label="Quiénes somos" className="mb-3" variant="dark" />
                    <h2
                        className="mt-3.5 font-light leading-[1.05] tracking-[-0.02em] text-paper"
                        style={{ fontSize: 'clamp(36px, 3.4vw, 52px)' }}>
                        Una empresa constructora especializada en{' '}
                        <em
                            style={{
                                fontFamily:
                                    '"Instrument Serif", "Times New Roman", serif',
                                fontStyle: 'italic',
                                fontWeight: 400,
                                color: '#d9bd91',
                            }}>
                            proyectos de vivienda.
                        </em>
                    </h2>
                </div>

                {/* Right: description + quote */}
                <div>
                    <p className="max-w-[620px] text-base leading-[1.65] text-mute-dark">
                        Contamos con más de{' '}
                        <strong className="font-semibold text-paper">
                            15 años
                        </strong>{' '}
                        de experiencia en el rubro, sumando más de{' '}
                        <strong className="font-semibold text-paper">
                            120.000 m² de obras realizadas
                        </strong>
                        . Llevamos a cabo diversos tipos de proyectos en
                        variadas condiciones y terrenos, en todo el país.
                    </p>
                    <p
                        className="mt-6"
                        style={{
                            fontFamily:
                                '"Instrument Serif", "Times New Roman", serif',
                            fontStyle: 'italic',
                            fontWeight: 400,
                            fontSize: 22,
                            lineHeight: 1.4,
                            color: '#d9bd91',
                        }}>
                        "Diseñamos, proyectamos y construimos la casa de tus
                        sueños."
                    </p>
                </div>
            </div>

            {/* Services strip */}
            <div
                className="relative mx-auto mt-[70px]"
                style={{ maxWidth: 1240 }}>
                <div
                    className="grid border-t border-navy-line"
                    style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                    <CardAbout
                        num="01"
                        title="Proyecto"
                        subtitle="y Dirección"
                        image={direccion}
                        alt="icon dirección"
                    />
                    <CardAbout
                        num="02"
                        title="Cálculo"
                        subtitle="Estructural"
                        image={calculo}
                        alt="icon calculo"
                    />
                    <CardAbout
                        num="03"
                        title="Proyectos de"
                        subtitle="Inversión"
                        image={inversion}
                        alt="icon inversión"
                    />
                    <CardAbout
                        num="04"
                        title="Asesoramiento"
                        subtitle="Técnico"
                        image={asesoramiento}
                        alt="icon asesoramiento"
                    />
                    <CardAbout
                        num="05"
                        title="Experiencia"
                        subtitle="Profesional"
                        image={experiencia}
                        alt="icon experiencia"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
