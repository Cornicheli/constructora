import {
    CarrouselPisci,
    CarrouselMultiPisci,
    CardModels,
    Footer,
    WhatsappChat,
    Eyebrow,
} from '../components';
import cascadaPiscina from '../assets/cascadaPiscina.mp4';

const Piscinas = () => {
    return (
        <span id="piscinas" className="relative">
            <CarrouselPisci />

            {/* About pools — 2 column grid */}
            <section className="bg-paper py-20" id="aboutus">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        {/* Video */}
                        <figure className="overflow-hidden rounded-2xl">
                            <video
                                className="h-full w-full rounded-2xl object-cover"
                                src={cascadaPiscina}
                                autoPlay
                                loop
                                muted
                                controls={false}
                            />
                        </figure>

                        {/* Content */}
                        <div>
                            <Eyebrow label="Quiénes Somos" className="mb-4" />

                            <h2 className="mb-4 text-[clamp(1.75rem,3vw,2.75rem)] font-extralight tracking-tight text-ink">
                                Construcción de{' '}
                                <em className="font-serif not-italic text-navy">
                                    piscinas
                                </em>
                            </h2>

                            <p className="mb-6 text-base leading-relaxed text-mute">
                                Somos una empresa dedicada a la construcción de
                                piscinas, diseño y ejecución. Con más de{' '}
                                <span className="font-semibold text-ink">
                                    15 años
                                </span>{' '}
                                de experiencia en el rubro te brindamos
                                responsabilidad y cumplimiento en la realización
                                de tu proyecto soñado.
                            </p>

                            <p className="mb-8 text-base leading-relaxed text-mute">
                                Contamos con más de 200 obras realizadas en AMBA
                                y Córdoba, y un equipo de profesionales
                                altamente calificados con las herramientas
                                necesarias para lograr la piscina de tus sueños.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 border-t border-line pt-8">
                                <div>
                                    <p className="text-3xl font-extralight text-navy">
                                        <em className="font-serif not-italic">
                                            15+
                                        </em>
                                    </p>
                                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-mute">
                                        Años de exp.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extralight text-navy">
                                        <em className="font-serif not-italic">
                                            200+
                                        </em>
                                    </p>
                                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-mute">
                                        Obras realizadas
                                    </p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extralight text-navy">
                                        <em className="font-serif not-italic">
                                            2
                                        </em>
                                    </p>
                                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-mute">
                                        Regiones
                                    </p>
                                </div>
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
