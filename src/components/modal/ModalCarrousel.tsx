import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import close from '@/assets/close.png';

interface ShowModal {
    isVisible: boolean;
    isClose: () => void;
    images: any;
    title: string;
}

export const ModalCarrousel = ({
    isVisible,
    isClose,
    images,
    title,
}: ShowModal) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (!isVisible) return null;

    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-25 backdrop-blur-sm">
            <div className="z-50 flex h-auto max-h-[95vh] w-full max-w-screen-lg flex-col sm:w-full">
                <div className="relative m-3 h-full overflow-hidden rounded-lg bg-white object-cover lg:m-2">
                    <div className="mx-6 flex h-20 items-center justify-between">
                        <h1 className="w-full text-center text-2xl sm:text-3xl">
                            {title}
                        </h1>
                        <button className="cursor-pointer" onClick={isClose}>
                            <img className="h-5 w-5" src={close} alt="close" />
                        </button>
                    </div>
                    <Slider {...settings}>
                        {Array.isArray(images) &&
                            images.map(
                                (image: string | undefined, index: any) => (
                                    <div
                                        key={index}
                                        className="flex h-80 w-full items-center justify-center rounded-sm md:h-96 lg:h-[650px]">
                                        <img
                                            src={image}
                                            alt={`Imagen ${index + 1}`}
                                            className="h-full w-full rounded-sm lg:p-6"
                                        />
                                    </div>
                                ),
                            )}
                    </Slider>
                </div>
            </div>
        </section>
    );
};
