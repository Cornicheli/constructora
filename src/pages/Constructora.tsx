import { AboutUs, Proyect, Typologies } from '../components';
import { WhatsappChat } from '../components/WhatsappChat';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImgConstruccion } from '../constant';
import CarrouselConstru from '@/components/carrousel/CarrouselConstru';

const Constructora = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            {/* <Slider {...settings}>
                {ImgConstruccion.map((imgContruccion, index) => (
                    <Carrousel
                        key={index}
                        url={imgContruccion.url}
                        alt={imgContruccion.alt}
                    />
                ))}
            </Slider> */}
            <CarrouselConstru />
            <AboutUs />
            <Proyect />
            <Typologies />
            <Footer />
            <WhatsappChat />
        </>
    );
};

export default Constructora;
