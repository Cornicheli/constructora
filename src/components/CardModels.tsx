import '../style/card.css';
import { Card } from './card/Card';
import { CardService } from './card/CardService';
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
import { ModalPiscinas } from './modal/ModalPiscinas';
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

const CardModels = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const imageMap: { [key: string]: string[] } = {
        1: [marcado01, marcado02, excavacion03, excavacion04, excavacion02],
        2: [armaduraAcero01, armaduraAcero02, armaduraAcero03],
        3: [encofrado01, encofrado02, encofrado03],
        4: [hormigonado02, hormigonado03],
        5: [revestimiento01, revestimiento04, revestimiento05],
        6: [obraFinalizada01, obraFinalizada02, obraFinalizada03],
    };

    const cardsData = [
        {
            id: '1',
            title: 'Marcado y Excavacion',
            image: excavacion,
            carouselImages: [
                marcado01,
                marcado02,
                excavacion03,
                excavacion04,
                excavacion02,
            ],
        },
        {
            id: '3',
            title: 'Armadura de Acero',
            image: armadura,
            carouselImages: [armaduraAcero01, armaduraAcero02, armaduraAcero03],
        },
        {
            id: '4',
            title: 'Proceso de Encofrado',
            image: encofrado01,
            carouselImages: [encofrado01, encofrado02, encofrado03],
        },
        {
            id: '5',
            title: 'Hormigonado',
            image: hormigon,
            carouselImages: [hormigonado02, hormigonado03],
        },
        {
            id: '6',
            title: 'Revestimiento/Pintura',
            image: revestimiento,
            carouselImages: [revestimiento01, revestimiento04, revestimiento05],
        },
        {
            id: '7',
            title: 'Entrega de Obra',
            image: deObra,
            carouselImages: [
                obraFinalizada01,
                obraFinalizada02,
                obraFinalizada03,
            ],
        },
    ];

    const handleOpenModal = (id: string) => {
        setSelectedImages(imageMap[id]); // Establece las imágenes según el id
        setShowModal(true);
    };

    return (
        <main className="flex h-auto flex-col items-center justify-center">
            <h1 className="my-10 text-center text-4xl font-bold text-[#0E2230]">
                Nuestros servicios
            </h1>
            <div className="mb-12 flex w-full flex-col-reverse flex-wrap items-center justify-around xl:flex-row">
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 grid-rows-4 gap-14 lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-2">
                        <CardService
                            title={'Materiales'}
                            image={materiales}
                            alt={'materiales'}
                        />
                        <CardService
                            title={'Mano de Obra'}
                            image={manoObra}
                            alt={'mano de obra'}
                        />
                        <CardService
                            title={'Sistema de Filtrado y Bomba Autocebante'}
                            image={autocebante}
                            alt={'autocebante'}
                        />
                        <CardService
                            title={'Luces y Accesorios'}
                            image={ionizador}
                            alt={'ionizador'}
                        />
                        <CardService
                            title={'Sistema de Preclimatizacion'}
                            image={caldera}
                            alt={'caldera'}
                        />
                        <CardService
                            title={'Pintura y Revestimiento'}
                            image={pintura}
                            alt={'pintura'}
                        />
                    </div>
                </div>
            </div>

            <section className="bg-[#0E2230]">
                <h1 className="m-5 text-center text-4xl font-bold text-white">
                    Proceso De Construcción
                </h1>

                <div className="flex flex-row flex-wrap items-center justify-center gap-10 pb-10">
                    {/* <Card
                                    id={'1'}
                                    isOpenModal={() => setShowModal(true)}
                                    title={'Demarcado'}
                                    image={marcado}
                              /> */}
                    <Card
                        id={1}
                        isOpenModal={handleOpenModal}
                        title={'Marcado y Excavacion'}
                        image={excavacion}
                    />
                    <Card
                        id={2}
                        isOpenModal={handleOpenModal}
                        title={'Armadura de Acero'}
                        image={armadura}
                    />
                    <Card
                        id={3}
                        isOpenModal={handleOpenModal}
                        title={'Proceso de Encofrado'}
                        image={encofrado01}
                    />
                    <Card
                        id={4}
                        isOpenModal={handleOpenModal}
                        title={'Hormigonado'}
                        image={hormigon}
                    />
                    <Card
                        id={5}
                        isOpenModal={handleOpenModal}
                        title={'Revestimiento/Pintura'}
                        image={revestimiento}
                    />
                    <Card
                        id={6}
                        isOpenModal={handleOpenModal}
                        title={'Entrega de Obra'}
                        image={deObra}
                    />
                    <ModalPiscinas
                        isVisible={showModal}
                        isClose={() => {
                            setShowModal(false);
                        }}
                        images={selectedImages}
                    />
                </div>
            </section>
        </main>
    );
};

export default CardModels;
