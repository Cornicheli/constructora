import { useState } from 'react';
import '@/style/card.css';
import { Card } from '@/components/card/Card';
import { CardService } from '@/components/card/CardService';
import { ModalPiscinas } from './modal/ModalPiscinas';
import { servicesPiscinasData } from '@/constant/ArrayPiscinas';
import { dataServiceCarrousel, imageMap } from '@/constant/ArrayPiscinas';
import {
    excavacion,
    armadura,
    hormigon,
    revestimiento,
} from '@/assets/image/construccion';
import { ModalPiscinasService } from './modal/ModalPiscinasService';

const CardModels = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImages, setSelectedImages] = useState<any>([]);
    console.log('selectedImages', selectedImages);
    const [showModalService, setShowModalService] = useState<boolean>(false);
    const [selectedImageService, setSelectedImageService] = useState<{
        _id: number;
        title: string;
        image: string[];
    } | null>(null);

    const handleOpenModal = (id: string) => {
        setSelectedImages(imageMap[id]);
        setShowModal(true);
    };

    const handleOpenModalService = (id: number) => {
        const service = dataServiceCarrousel.find(item => item._id === id);
        if (service) {
            setSelectedImageService(service);
            setShowModalService(true);
        }
    };

    return (
        <main className="flex h-auto flex-col items-center justify-center">
            <h1 className="my-10 text-center text-4xl font-bold text-[#0E2230]">
                Nuestros servicios
            </h1>
            <div className="mb-12 flex w-full flex-col-reverse flex-wrap items-center justify-around xl:flex-row">
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 grid-rows-4 gap-14 lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-5 xl:grid-rows-2">
                        {servicesPiscinasData.map((service, index) => (
                            <CardService
                                key={index}
                                onOpenModal={() =>
                                    handleOpenModalService(service._id)
                                }
                                title={service.title}
                                image={service.image}
                                alt={service.alt}
                            />
                        ))}
                    </div>
                    <ModalPiscinasService
                        title={selectedImageService?.title || ''}
                        isVisible={showModalService}
                        isClose={() => setShowModalService(false)}
                        images={selectedImageService?.image || []}
                    />
                </div>
            </div>

            <section className="w-full bg-[#0E2230]">
                <h1 className="m-5 text-center text-4xl font-bold text-white">
                    Proceso De Construcción
                </h1>

                <div className="grid w-full grid-cols-4 grid-rows-1">
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
                        id={4}
                        isOpenModal={handleOpenModal}
                        title={'Hormigonado'}
                        image={hormigon}
                    />
                    <Card
                        id={5}
                        isOpenModal={handleOpenModal}
                        title={'Revestimiento'}
                        image={revestimiento}
                    />

                    <ModalPiscinas
                        title={selectedImages.title}
                        isVisible={showModal}
                        isClose={() => {
                            setShowModal(false);
                        }}
                        images={selectedImages.images}
                    />
                </div>
            </section>
        </main>
    );
};

export default CardModels;
