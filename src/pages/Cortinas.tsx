import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from '../components/card/Card';
import {
    ImgCortinasCarrousel,
    ImgCortinas,
    carouselItemsRoller,
    carrouselCortinas,
} from '@/constant';
import { ModalCarrousel } from '@/components/modal/ModalCarrousel';
import ImgDetailsCortinas from '@/constant/ImgDetailsCortinas.json';
import { CardCortina } from '@/components/card';

export const Cortinas = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImages, setSelectedImages] = useState<{
        title: string;
        images: string[];
    } | null>(null);
    console.log('selectedImages', selectedImages);

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const handleOpenModal = (id: string) => {
        const selectedCategory =
            carouselItemsRoller[id as keyof typeof carouselItemsRoller];
        if (selectedCategory) {
            setSelectedImages({
                title: selectedCategory.title,
                images: selectedCategory.images,
            });
            setShowModal(true);
        }
    };

    return (
        <div className="bg h-auto w-full justify-center overflow-hidden">
            <Slider {...settings}>
                {carrouselCortinas.map((imgCortina, index) => (
                    <div className="mt-5 h-[500px] w-full lg:h-[800px]">
                        <img
                            className="h-full w-full object-cover"
                            src={imgCortina.image}
                            alt={imgCortina.title}
                        />
                    </div>
                ))}
            </Slider>
            {/* <section className="grid h-screen w-full grid-cols-1 place-items-center lg:grid-cols-2"> */}
            <section className="flex flex-row flex-wrap items-center justify-center gap-10 py-10">
                {ImgCortinas.map((imgToldos: any) => (
                    <CardCortina
                        isOpenModal={handleOpenModal}
                        image={imgToldos.url}
                        title={imgToldos.title}
                        key={imgToldos.id}
                        id={imgToldos.id}
                    />
                ))}
            </section>
            <ModalCarrousel
                title={selectedImages?.title || ''}
                isVisible={showModal}
                isClose={() => {
                    setShowModal(false);
                    setSelectedImages(null);
                }}
                images={selectedImages?.images || []}
            />
        </div>
    );
};
