import { CardService } from './card/CardService';
import { Card } from './card/Card';
import { Eyebrow } from './ui';
import {
    materiales,
    manoObra,
    caldera,
    ionizador,
    autocebante,
    pintura,
} from '../assets/image/service';
import {
    excavacion,
    armadura,
    hormigon,
    revestimiento,
    deObra,
    encofrado03,
    encofrado02,
    encofrado01,
} from '../assets/image/construccion';
import { useState } from 'react';
import { ModalPiscinas, StepData } from './modal/ModalPiscinas';
import {
    revestimiento01,
    revestimiento04,
    revestimiento05,
} from '../assets/image/revestimiento';
import { marcado01, marcado02 } from '../assets/image/marcado';
import {
    excavacion02,
    excavacion03,
    excavacion04,
} from '../assets/image/excavacion';
import {
    armaduraAcero01,
    armaduraAcero02,
    armaduraAcero03,
} from '../assets/image/armaduraAcero';
import { hormigonado02, hormigonado03 } from '..//assets/image/hormigonado';
import {
    obraFinalizada01,
    obraFinalizada02,
    obraFinalizada03,
} from '../assets/image/finalizada';

const servicesData = [
    {
        index: 1,
        title: 'Materiales',
        description: 'Provisión de materiales certificados y de alta calidad.',
        image: materiales,
        alt: 'materiales',
    },
    {
        index: 2,
        title: 'Mano de Obra',
        description:
            'Equipo técnico calificado con más de 15 años de experiencia.',
        image: manoObra,
        alt: 'mano de obra',
    },
    {
        index: 3,
        title: 'Sistema de Filtrado y Bomba',
        description: 'Bomba autocebante y filtrado profesional incluido.',
        image: autocebante,
        alt: 'autocebante',
    },
    {
        index: 4,
        title: 'Luces y Accesorios',
        description: 'Iluminación LED sumergible y accesorios premium.',
        image: ionizador,
        alt: 'ionizador',
    },
    {
        index: 5,
        title: 'Sistema de Preclimatización',
        description:
            'Instalación lista para futura climatización de tu piscina.',
        image: caldera,
        alt: 'caldera',
    },
    {
        index: 6,
        title: 'Pintura y Revestimiento',
        description: 'Terminaciones en pintura, venecitas o mosaico.',
        image: pintura,
        alt: 'pintura',
    },
];

const stepsData: StepData[] = [
    {
        id: '01',
        title: 'Marcado y Excavación',
        image: excavacion,
        sub: 'Preparación del terreno',
        desc: 'Realizamos el marcado exacto de la piscina en el terreno y la excavación con maquinaria especializada, respetando las medidas y pendientes del proyecto aprobado.',
        specs: [
            { k: 'Maquinaria', v: 'Miniexcavadora o retroexcavadora' },
            { k: 'Profundidad media', v: '1.5 — 2.2 m' },
            { k: 'Duración estimada', v: '1 — 2 días' },
        ],
        carouselImages: [
            marcado01,
            marcado02,
            excavacion03,
            excavacion04,
            excavacion02,
        ],
    },
    {
        id: '02',
        title: 'Armadura de Acero',
        image: armadura,
        sub: 'Estructura de hierros de alta resistencia',
        desc: 'Colocamos la armadura de hierros del 8 y del 10, atada en bloques y respetando los cálculos estructurales. Esta etapa garantiza la resistencia y durabilidad ante presiones, movimientos del suelo y el peso del agua.',
        specs: [
            { k: 'Diámetro de hierros', v: 'Ø 8 — Ø 10 mm' },
            { k: 'Recubrimiento', v: '≥ 3 cm' },
            { k: 'Duración estimada', v: '2 — 4 días' },
            { k: 'Norma de cálculo', v: 'CIRSOC 201' },
        ],
        carouselImages: [armaduraAcero01, armaduraAcero02, armaduraAcero03],
    },
    {
        id: '03',
        title: 'Proceso de Encofrado',
        image: encofrado01,
        sub: 'Molde estructural de la piscina',
        desc: 'Instalamos el encofrado que definirá la forma definitiva de la piscina. Se utilizan tableros de alta resistencia y apuntalamiento adecuado para soportar la presión del hormigón proyectado.',
        specs: [
            { k: 'Material', v: 'Fenólico o metálico' },
            { k: 'Tolerancia dimensional', v: '± 5 mm' },
            { k: 'Duración estimada', v: '1 — 3 días' },
        ],
        carouselImages: [encofrado01, encofrado02, encofrado03],
    },
    {
        id: '04',
        title: 'Hormigonado',
        image: hormigon,
        sub: 'Colada monolítica de hormigón',
        desc: 'Se realiza el hormigonado con mezcla H-25 por vibrado y compactación continua para eliminar vacíos de aire. El proceso monolítico asegura impermeabilidad y máxima resistencia estructural.',
        specs: [
            { k: 'Resistencia', v: 'H-25 (250 kg/cm²)' },
            { k: 'Espesor de paredes', v: '15 — 20 cm' },
            { k: 'Duración estimada', v: '1 día + 28 días curado' },
        ],
        carouselImages: [hormigonado02, hormigonado03],
    },
    {
        id: '05',
        title: 'Revestimiento y Pintura',
        image: revestimiento,
        sub: 'Terminaciones y acabados finales',
        desc: 'Aplicamos el revestimiento final según la elección del cliente: pintura de caucho clorado, venecitas, porcelanato o mosaicos. Incluye impermeabilización de juntas y tratamiento de bordes.',
        specs: [
            { k: 'Opciones', v: 'Pintura / Venecitas / Mosaico' },
            { k: 'Impermeabilización', v: 'Membrana líquida' },
            { k: 'Duración estimada', v: '3 — 7 días' },
        ],
        carouselImages: [revestimiento01, revestimiento04, revestimiento05],
    },
    {
        id: '06',
        title: 'Entrega de Obra',
        image: deObra,
        sub: 'Puesta en marcha y entrega',
        desc: 'Realizamos el llenado inicial, puesta en marcha del sistema de filtrado, prueba de iluminación y entrega de manual de uso y mantenimiento. La piscina queda lista para disfrutar.',
        specs: [
            { k: 'Garantía estructural', v: '5 años' },
            { k: 'Garantía de estanqueidad', v: '1 año' },
            { k: 'Incluye', v: 'Manual de mantenimiento' },
        ],
        carouselImages: [obraFinalizada01, obraFinalizada02, obraFinalizada03],
    },
];

const CardModels = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedStepIndex, setSelectedStepIndex] = useState(0);

    const handleOpenModal = (id: string) => {
        const idx = stepsData.findIndex(s => s.id === id);
        setSelectedStepIndex(idx >= 0 ? idx : 0);
        setShowModal(true);
    };

    return (
        <div>
            {/* ── Nuestros Servicios ── */}
            <section
                className="px-10 py-[110px]"
                style={{ background: '#fafaf7' }}>
                <div style={{ maxWidth: 1320, margin: '0 auto' }}>
                    {/* Head — 2 col */}
                    <div
                        className="mb-14"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 60,
                            alignItems: 'end',
                        }}>
                        <div>
                            <Eyebrow label="Qué ofrecemos" className="mb-3" />
                            <h2
                                className="m-0 font-light tracking-[-0.02em] text-ink"
                                style={{
                                    fontSize: 'clamp(36px, 3.4vw, 52px)',
                                    lineHeight: 1.05,
                                }}>
                                Nuestros{' '}
                                <em className="font-serif not-italic text-navy">
                                    servicios
                                </em>
                            </h2>
                        </div>
                        <p
                            className="m-0 self-end text-[14px] leading-[1.6] text-mute"
                            style={{ maxWidth: 380, justifySelf: 'end' }}>
                            Cobertura integral: materiales, mano de obra
                            calificada y sistemas técnicos para que tu piscina
                            funcione de forma impecable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
                        {servicesData.map(s => (
                            <CardService
                                key={s.index}
                                index={s.index}
                                title={s.title}
                                description={s.description}
                                image={s.image}
                                alt={s.alt}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Proceso de Construcción ── */}
            <section
                className="relative overflow-hidden px-10 py-[110px]"
                style={{ background: '#0E2138' }}>
                <div style={{ maxWidth: 1320, margin: '0 auto' }}>
                    {/* Head — centered */}
                    <div className="mb-16 text-center">
                        <Eyebrow
                            label="Cómo trabajamos"
                            centered
                            className="mb-3"
                        />
                        <h2
                            className="m-0 font-light tracking-[-0.02em] text-paper"
                            style={{
                                fontSize: 'clamp(36px, 3.4vw, 52px)',
                                lineHeight: 1.05,
                            }}>
                            Proceso de{' '}
                            <em className="font-serif not-italic text-gold-soft">
                                Construcción
                            </em>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
                        {stepsData.map(step => (
                            <Card
                                key={step.id}
                                id={step.id}
                                stepNum={step.id}
                                isOpenModal={handleOpenModal}
                                title={step.title}
                                image={step.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <ModalPiscinas
                isVisible={showModal}
                isClose={() => setShowModal(false)}
                stepsData={stepsData}
                initialIndex={selectedStepIndex}
            />
        </div>
    );
};

export default CardModels;
