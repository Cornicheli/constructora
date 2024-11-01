import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImgDesignPiscinas } from '../../constant';

const CarrouselMultiPisci = () => {
    const [hoverId, setHoverId] = useState<number | null>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <main className="w-full bg-[#0E2230] py-10">
            <h1 className="text-center text-4xl font-bold text-white">
                Diseños
            </h1>
            <div className="mt-5">
                <Slider {...settings}>
                    {ImgDesignPiscinas.map(d => (
                        <div
                            className="m-6 flex scale-105 transform flex-row rounded-2xl"
                            key={d.id}>
                            <div
                                className="h-46 w-[100px] rounded-2xl border transition duration-700 ease-in-out md:w-[188px] lg:w-[200px] 2xl:w-[250px]"
                                onMouseEnter={() => setHoverId(d.id)}
                                onMouseLeave={() => setHoverId(null)}>
                                <img
                                    className={`h-full w-full scale-100 transform rounded-2xl transition duration-500 ease-in-out hover:scale-105 ${hoverId === d.id ? 'hovered' : ''}`}
                                    src={
                                        hoverId === d.id
                                            ? d.imageHover
                                            : d.image
                                    }
                                    alt="Design"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </main>
    );
};

export default CarrouselMultiPisci;
