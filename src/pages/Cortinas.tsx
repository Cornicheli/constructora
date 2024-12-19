import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImgCortinas, carouselItemsRoller } from '@/constant';
import { ModalCarrousel } from '@/components/modal/ModalCarrousel';
import { CardCortina } from '@/components/card';
import { CardHomeCortinas } from '@/components/card/CardHomeCortinas';
import { DividerBlack } from '@/components/DividerBlack';
import bannerCortinas from '@/assets/cortinas/carruselCortinas/banner-principal-cortinas-large.jpg';
import { arrayCortinasRoller } from '@/constant/ArrayCortinas';
import { useNavigate } from 'react-router-dom';

export const Cortinas = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImages, setSelectedImages] = useState<{
        title: string;
        images: string[];
    } | null>(null);

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

    const navigate = useNavigate();

    const handleNavigation = (id: number) => {
        switch (id) {
            case 1:
                navigate('/toldos');
                break;
            case 2:
                navigate('/sunscreen');
                break;
            case 3:
                navigate('/cerramientos');
                break;
            case 4:
                navigate('/zebra');
                break;
            case 5:
                navigate('/blackout');
                break;
            case 6:
                navigate('/sistemaDoble');
                break;
            default:
                break;
        }
    };

    return (
        <div className="bg h-auto w-full justify-center overflow-hidden">
            {/* <Slider {...settings}>
                {carrouselCortinas.map((imgCortina, index) => (
                    <div className="mt-5 h-[500px] w-full lg:h-[800px]">
                        <img
                            className="h-full w-full object-cover"
                            src={imgCortina.image}
                            alt={imgCortina.title}
                        />
                    </div>
                ))}
            </Slider> */}
            <CardHomeCortinas
                photoHome={bannerCortinas}
                altPhotoHome={'Cortinas de interior homedeluxe'}
                title={'Roller Design'}
                description={
                    'Una solución a medida para Tu Hogar y Espacios. Ofrecemos una amplia variedad de cortinas y toldos para personalizar y mejorar tus ambientes..'
                }
            />
            <div className="flex flex-col items-center justify-center p-5 text-center">
                <p className='" py-1 text-lg tracking-wide text-[#545454] lg:text-3xl'>
                    Diversos sistemas de Cortinas de Interior{' '}
                    <span className="font-medium text-black"> HomeDeluxe</span>{' '}
                    se <br /> adaptan a una gran variedad de espacios,
                    arquitecturas, <br /> estilos y presupuestos.
                </p>
            </div>

            <DividerBlack />

            {/* <section className="grid h-screen w-full grid-cols-1 place-items-center lg:grid-cols-2"> */}
            <section className="flex flex-row flex-wrap items-center justify-center gap-10 py-10">
                {arrayCortinasRoller.map((item: any) => (
                    <div
                        key={item.id}
                        onClick={() => handleNavigation(item.id)}
                        className="cursor-pointer">
                        <CardCortina
                            image={item.photo}
                            title={item.title}
                            id={item.id}
                        />
                    </div>
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
