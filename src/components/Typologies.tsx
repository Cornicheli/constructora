import lineaClasica from '../assets/image/typologies/clasica.jpeg';
import lineaModerna from '../assets/image/typologies/moderna.jpeg';
import lineaPremium from '../assets/image/typologies/premium.jpeg';
import { CardTypologies } from './card/CardTypologie';
import { Eyebrow } from './ui';

const Typologies = () => {
    return (
        <section
            className="relative overflow-hidden px-10 py-[110px]"
            style={{
                background: '#0E2138',
                backgroundImage:
                    'radial-gradient(50% 40% at 100% 100%, rgba(201,168,118,.08), transparent 70%), radial-gradient(40% 30% at 0% 0%, rgba(255,255,255,.04), transparent 70%)',
            }}
            id="tipologias">
            <div
                className="relative"
                style={{ maxWidth: 1320, margin: '0 auto' }}>
                {/* Head — centered */}
                <div
                    className="mx-auto mb-4 text-center"
                    style={{ maxWidth: 760 }}>
                    <Eyebrow
                        label="Líneas estandarizadas"
                        centered
                        className="mb-3"
                        variant="dark"
                    />
                    <h2
                        className="m-0 text-center font-light leading-[1.05] tracking-[-0.02em] text-paper"
                        style={{ fontSize: 'clamp(36px, 3.4vw, 52px)' }}>
                        Tipologías
                    </h2>
                    <p
                        className="mx-auto mt-[22px] text-[15px] leading-[1.6] text-mute-dark"
                        style={{ maxWidth: 680 }}>
                        La empresa ofrece tipologías estandarizadas de{' '}
                        <strong className="text-paper">
                            1, 2 y 3 dormitorios
                        </strong>{' '}
                        en una sola planta, en sus líneas Clásica, Moderna y
                        Premium. Además, dispone de un departamento
                        especializado para el desarrollo de proyectos a medida.
                    </p>
                    <p className="mt-3.5 text-[13px] text-mute-dark">
                        <em
                            style={{
                                fontFamily:
                                    '"Instrument Serif", "Times New Roman", serif',
                                fontStyle: 'italic',
                                color: '#d9bd91',
                            }}>
                            Terminaciones avanzadas:
                        </em>{' '}
                        tomado de juntas interior / exterior con revoque
                        plástico exterior aplicado.
                    </p>
                </div>

                {/* Cards grid */}
                <div
                    className="mt-16 grid gap-[18px]"
                    style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    <CardTypologies
                        image={lineaClasica}
                        title="Línea"
                        titleAccent="Clásica"
                        lineNum="Línea 01"
                    />
                    <CardTypologies
                        image={lineaModerna}
                        title="Línea"
                        titleAccent="Moderna"
                        lineNum="Línea 02"
                    />
                    <CardTypologies
                        image={lineaPremium}
                        title="Línea"
                        titleAccent="Premium"
                        lineNum="Línea 03"
                    />
                </div>
            </div>
        </section>
    );
};

export default Typologies;
